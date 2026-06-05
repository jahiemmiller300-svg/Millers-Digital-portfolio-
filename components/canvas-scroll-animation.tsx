'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface CanvasScrollAnimationProps {
  frameCount: number;
  imageSequencePath: string;
  height?: number;
  width?: number;
  containerHeight?: number;
}

export function CanvasScrollAnimation({
  frameCount = 120,
  imageSequencePath,
  height = 1080,
  width = 1920,
  containerHeight = 300,
}: CanvasScrollAnimationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);

  // Load all frames
  useEffect(() => {
    const loadImages = async () => {
      const images: HTMLImageElement[] = [];
      let loadedCount = 0;

      for (let i = 1; i <= frameCount; i++) {
        const img = new Image();
        img.src = `${imageSequencePath}/frame_${String(i).padStart(4, '0')}.png`;
        img.onload = () => {
          loadedCount++;
          setImagesLoaded(loadedCount);
          if (loadedCount === frameCount) {
            setIsLoading(false);
          }
        };
        img.onerror = () => {
          loadedCount++;
          if (loadedCount === frameCount) {
            setIsLoading(false);
          }
        };
        images.push(img);
      }
      imagesRef.current = images;
    };

    loadImages();

    return () => {
      // Cleanup images
      imagesRef.current = [];
    };
  }, [frameCount, imageSequencePath]);

  // Handle scroll animation
  useEffect(() => {
    if (!canvasRef.current || imagesRef.current.length === 0) return;

    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const scrollProgress = 1 - rect.top / window.innerHeight;
      const frameIndex = Math.min(
        frameCount - 1,
        Math.floor(scrollProgress * frameCount)
      );

      if (frameIndex >= 0 && frameIndex !== currentFrameRef.current) {
        currentFrameRef.current = frameIndex;
        drawFrame(frameIndex);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    drawFrame(0); // Draw initial frame

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [frameCount]);

  // Draw frame on canvas
  const drawFrame = (frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas || !imagesRef.current[frameIndex]) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = imagesRef.current[frameIndex];
    if (!img.complete) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Calculate dimensions to fit container while maintaining aspect ratio
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const imgAspect = width / height;
    const canvasAspect = canvasWidth / canvasHeight;

    let drawWidth = canvasWidth;
    let drawHeight = canvasHeight;
    let offsetX = 0;
    let offsetY = 0;

    if (imgAspect > canvasAspect) {
      drawWidth = canvasWidth;
      drawHeight = canvasWidth / imgAspect;
      offsetY = (canvasHeight - drawHeight) / 2;
    } else {
      drawHeight = canvasHeight;
      drawWidth = canvasHeight * imgAspect;
      offsetX = (canvasWidth - drawWidth) / 2;
    }

    // Draw image with anti-aliasing
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  const handleCanvasRef = (element: HTMLCanvasElement) => {
    if (element) {
      element.width = window.innerWidth > 768 ? 1920 : 1080;
      element.height = containerHeight;
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden bg-black"
      style={{ height: `${containerHeight}px` }}
    >
      {isLoading && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center bg-black z-10"
          initial={{ opacity: 1 }}
          animate={{ opacity: isLoading ? 1 : 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-3 border-gold border-t-transparent rounded-full animate-spin" />
            <p className="text-gold text-sm">
              Loading {imagesLoaded}/{frameCount} frames
            </p>
          </div>
        </motion.div>
      )}

      <canvas
        ref={handleCanvasRef}
        className="w-full h-full block"
        style={{ display: isLoading ? 'none' : 'block' }}
      />
    </div>
  );
}
