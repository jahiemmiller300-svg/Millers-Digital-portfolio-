import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';

export const metadata: Metadata = {
  title: "Miller's Digital - Website Building & AI Receptionist",
  description:
    "Premium web development and AI receptionist solutions for modern businesses. Awwwards-level creative design with cutting-edge technology.',
  keywords: ['web design', 'ai receptionist', 'next.js', 'premium portfolio'],
  authors: [{ name: "Miller's Digital" }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://millers-digital.com',
    siteName: "Miller's Digital",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
