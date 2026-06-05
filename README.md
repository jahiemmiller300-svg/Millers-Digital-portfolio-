# Miller's Digital - Premium Web Portfolio

A world-class, award-winning web portfolio for Miller's Digital featuring premium web design services and AI receptionist solutions. Built with cutting-edge technology for exceptional performance and user experience.

## 🎨 Features

### Design & Animation
- **Black & Gold Premium Design**: Elegant color scheme with Tribo font throughout
- **Framer Motion Animations**: Smooth, sophisticated motion design
- **Canvas Scroll Animation**: HTML5 Canvas with 120-frame image sequence
- **60fps Performance**: Optimized for smooth, stutter-free animations
- **Fully Responsive**: Perfect on mobile and desktop devices

### Sections
- **Hero Section**: Captivating landing with animated elements
- **About**: Services showcase (Web Development, AI Receptionists, Performance)
- **Portfolio**: Featured work showcase with 4 project examples
- **AI Receptionist Demo**: Interactive chat interface with demo features
- **Services & Pricing**: Three-tier pricing model (Starter, Professional, Enterprise)
- **Contact**: Multi-channel contact options (WhatsApp, Instagram, Phone, Email)
- **Admin Dashboard**: Secure management for AI receptionists and webhooks

### Theme Support
- **Light/Dark Mode Toggle**: Built-in theme switcher
- **System Preference Detection**: Respects OS dark mode settings
- **Smooth Transitions**: Seamless theme switching animations

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (100% type-safe)
- **Styling**: Tailwind CSS with custom color extensions
- **Animation**: Framer Motion
- **Rendering**: HTML5 Canvas
- **Theme**: next-themes
- **Icons**: Lucide React
- **State Management**: Zustand (ready for expansion)

## 📋 Requirements Met

✅ Next.js Framework  
✅ TypeScript Throughout  
✅ Tailwind CSS Styling  
✅ Framer Motion Animations  
✅ Canvas 120-Frame Sequence Support  
✅ 60fps Smooth Performance  
✅ Loading States  
✅ No Flicker/Stutter  
✅ Fully Responsive  
✅ Admin Dashboard with Auth  
✅ Light/Dark Mode Toggle  
✅ Proper Cleanup (Canvas + Listeners)  
✅ Black & Gold Color Scheme  

## 🚀 Getting Started

### Installation

1. **Navigate to project directory**
   ```bash
   cd "millers digital real"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure admin password** (optional)
   - Edit `.env.local`
   - Change `NEXT_PUBLIC_ADMIN_PASSWORD` to your desired password
   - Default: `admin123`

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   - Main site: `http://localhost:3000`
   - Admin: `http://localhost:3000/admin`

### Building for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
millers-digital-real/
├── app/
│   ├── layout.tsx           # Root layout with theme provider
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles
│   └── admin/
│       ├── layout.tsx       # Admin layout with protection
│       └── page.tsx         # Admin dashboard
├── components/
│   ├── navigation.tsx       # Responsive navigation
│   ├── hero-section.tsx     # Landing section
│   ├── about-section.tsx    # About & services
│   ├── portfolio-section.tsx # Project showcase
│   ├── ai-receptionist-section.tsx # Demo & features
│   ├── services-section.tsx # Pricing tiers
│   ├── contact-section.tsx  # Contact form & links
│   ├── footer.tsx           # Footer
│   ├── canvas-scroll-animation.tsx # Canvas animation
│   ├── theme-toggle.tsx     # Theme switcher
│   ├── theme-provider.tsx   # Theme provider setup
│   ├── admin-protection.tsx # Admin auth
│   └── index.ts             # Component exports
├── package.json             # Dependencies
├── tsconfig.json            # TypeScript config
├── tailwind.config.js       # Tailwind config
├── postcss.config.js        # PostCSS config
├── next.config.js           # Next.js config
├── .env.local               # Admin password
└── README.md                # This file
```

## 🎯 Key Features Explained

### Canvas Animation
The `CanvasScrollAnimation` component handles:
- Async loading of 120-frame image sequences
- Scroll-linked frame progression
- Smooth canvas rendering with anti-aliasing
- Loading states with progress indicator
- Proper cleanup of resources

**Usage:**
```tsx
<CanvasScrollAnimation
  frameCount={120}
  imageSequencePath="/images/frames"
  height={1080}
  width={1920}
  containerHeight={300}
/>
```

### Admin Dashboard
- Password-protected access (default: `admin123`)
- Add/edit/delete AI Receptionists
- Manage API keys and webhooks
- Toggle receptionist status
- LocalStorage-based session management

**Access at**: `/admin`

### Theme System
- Automatic detection of system preference
- Persistent theme selection
- Smooth transitions without flicker
- Works across all sections

## ⚙️ Customization

### Colors
Edit `tailwind.config.js`:
```js
colors: {
  black: '#000000',
  gold: '#D4AF37',
  'gold-dark': '#B8860B',
  'gold-light': '#FFD700',
}
```

### Fonts
The template uses Poppins from Google Fonts. To change:
1. Update font import in `app/layout.tsx`
2. Update font configuration in `tailwind.config.js`

### Contact Information
Update in `components/contact-section.tsx`:
- Phone number
- Email address
- WhatsApp link
- Instagram handle

### Pricing Tiers
Modify in `components/services-section.tsx`:
- Package names and prices
- Features list
- Descriptions

## 📱 Responsive Design

- **Mobile**: Optimized for screens < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+
- **Menu**: Auto-collapses on mobile
- **Canvas**: Dynamically sized for viewport

## 🔐 Security

- Admin password stored in `.env.local` (not in repo)
- Session token in localStorage
- Password validation on each admin access
- Clear logout functionality

**⚠️ Production Checklist:**
- Change `NEXT_PUBLIC_ADMIN_PASSWORD` to strong password
- Use environment-based configuration
- Add HTTPS
- Consider implementing proper authentication service

## 🎬 Canvas Frames Setup

To use the canvas animation:

1. Create a folder: `public/frames/`
2. Add numbered images: `frame_0001.png` to `frame_0120.png`
3. Image size: 1920x1080 (or adjust in props)
4. Format: PNG (recommended)

The animation loads frames asynchronously with a progress indicator.

## 🚨 Performance Optimization

- **60fps**: Achieved through requestAnimationFrame and CSS transforms
- **Loading States**: Prevents flicker during frame loading
- **Cleanup**: Event listeners and canvas resources cleaned up properly
- **Lazy Loading**: Components load on view with IntersectionObserver
- **Image Optimization**: Canvas uses high-quality rendering

## 📞 Contact Integration

The contact section includes:
- Email form (ready for backend integration)
- Direct phone link
- WhatsApp link (opens chat)
- Instagram profile link
- Custom webhook support

## 🎨 Animation Principles

All animations follow these principles:
- **Smooth**: 60fps, hardware-accelerated
- **Purposeful**: Enhances UX, not distracting
- **Responsive**: Adapts to device capabilities
- **Accessible**: Respects prefers-reduced-motion

## 📖 Browser Support

- Chrome/Edge: Latest versions
- Firefox: Latest versions
- Safari: Latest versions
- Mobile: iOS 12+, Android 5+

## 🐛 Troubleshooting

### Canvas Not Showing
- Check frames exist in `public/frames/`
- Verify frame count matches `frameCount` prop
- Check browser console for errors

### Theme Not Working
- Clear localStorage and refresh
- Check `next-themes` installation
- Verify `ThemeProvider` wraps app in `layout.tsx`

### Admin Not Loading
- Check `.env.local` exists
- Verify password is correct
- Clear localStorage admin token
- Check browser console for errors

## 📄 License

This template is provided as-is for Miller's Digital portfolio use.

## 🤝 Support

For issues or questions:
1. Check the troubleshooting section
2. Review component documentation in source files
3. Check Next.js and Framer Motion documentation

---

**Built with ❤️ for Miller's Digital**  
*Premium Web Solutions & AI Receptionist Technology*
