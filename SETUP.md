# 🚀 Miller's Digital Portfolio - Complete Setup Guide

Welcome to the premium web portfolio for Miller's Digital! This guide will walk you through everything you need to get started.

## 📋 Prerequisites

Make sure you have the following installed:
- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js)
- A code editor like **VS Code**

Verify installation:
```bash
node --version  # Should be v16+
npm --version   # Should be v7+
```

## 🚀 Quick Start (3 Steps)

### Step 1: Install Dependencies
Run one of these commands:

**Option A - Automated Setup (Windows):**
```bash
# Double-click: setup.bat
# OR run in Command Prompt:
setup.bat
```

**Option B - Automated Setup (PowerShell):**
```powershell
# Right-click setup.ps1 → Run with PowerShell
# OR run in PowerShell:
powershell -ExecutionPolicy Bypass -File setup.ps1
```

**Option C - Manual Installation:**
```bash
npm install
```

### Step 2: Configure Admin Password (Optional)

Edit `.env.local`:
```env
NEXT_PUBLIC_ADMIN_PASSWORD=your_secure_password_here
```

Default password: `admin123`

⚠️ **Important**: Change this in production!

### Step 3: Start Development Server

```bash
npm run dev
```

Then open your browser:
- **Main Site**: [http://localhost:3000](http://localhost:3000)
- **Admin Dashboard**: [http://localhost:3000/admin](http://localhost:3000/admin)

## 📁 File Structure Explained

```
millers-digital-real/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with theme provider
│   ├── page.tsx                 # Home page (all sections)
│   ├── globals.css              # Global styles & animations
│   ├── admin/
│   │   ├── layout.tsx          # Admin layout wrapper
│   │   └── page.tsx            # Admin dashboard
│
├── components/                   # Reusable React components
│   ├── navigation.tsx           # Header navigation (responsive)
│   ├── hero-section.tsx         # Landing section
│   ├── about-section.tsx        # About & services highlight
│   ├── portfolio-section.tsx    # Featured projects (4 items)
│   ├── ai-receptionist-section.tsx  # Interactive AI demo
│   ├── services-section.tsx     # Pricing tiers (3 packages)
│   ├── contact-section.tsx      # Contact form & links
│   ├── footer.tsx               # Footer
│   ├── canvas-scroll-animation.tsx  # Canvas animation component
│   ├── theme-toggle.tsx         # Light/dark mode button
│   ├── theme-provider.tsx       # Next-themes wrapper
│   ├── admin-protection.tsx     # Admin auth middleware
│   └── index.ts                 # Component exports
│
├── public/
│   └── frames/                  # Canvas animation frames ← ADD YOUR IMAGES HERE
│
├── package.json                 # Dependencies list
├── tsconfig.json                # TypeScript config
├── tailwind.config.js           # Tailwind CSS theme config
├── next.config.js               # Next.js config
├── postcss.config.js            # PostCSS config
├── .env.example                 # Example environment variables
├── .env.local                   # Your secret configurations
├── .gitignore                   # Git ignore rules
├── README.md                    # Project overview
├── SETUP.md                     # This file
├── setup.bat                    # Windows setup script
└── setup.ps1                    # PowerShell setup script
```

## 🎨 Customization Guide

### 1. Contact Information

**File**: `components/contact-section.tsx`

Find and update:
```tsx
const contactMethods = [
  {
    label: 'Phone',
    value: '+1 (555) 123-4567',        // ← Change this
    href: 'tel:+15551234567',
  },
  {
    label: 'Email',
    value: 'hello@millers-digital.com', // ← And this
    href: 'mailto:hello@millers-digital.com',
  },
  // ... WhatsApp and Instagram links
];
```

### 2. Pricing Tiers

**File**: `components/services-section.tsx`

Update the `packages` array:
```tsx
const packages = [
  {
    name: 'Starter',
    price: 2999,              // ← Change price
    description: 'Perfect for small businesses',
    features: [
      // ← Update features list
      'Landing page',
      'Mobile responsive',
      // ...
    ],
  },
  // ... other packages
];
```

### 3. Portfolio Projects

**File**: `components/portfolio-section.tsx`

Update the `portfolio` array:
```tsx
const portfolio = [
  {
    id: 1,
    title: 'Your Project Name',        // ← Change
    description: 'Project description', // ← Change
    category: 'Web Development',        // ← Change
    link: '#',                          // ← Add link
  },
  // ... more projects
];
```

### 4. Colors & Theme

**File**: `tailwind.config.js`

```js
colors: {
  black: '#000000',
  gold: '#D4AF37',      // ← Main accent
  'gold-dark': '#B8860B',
  'gold-light': '#FFD700',
}
```

### 5. Company Name

Search for `Miller's Digital` and replace with your company name in:
- `components/hero-section.tsx`
- `components/about-section.tsx`
- `components/footer.tsx`
- `app/layout.tsx` (metadata)

### 6. Fonts

Change Poppins to another font:

1. Update `app/layout.tsx`:
```tsx
<link
  href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;500;600;700&display=swap"
  rel="stylesheet"
/>
```

2. Update `tailwind.config.js`:
```js
fontFamily: {
  sans: ['Your Font', 'system-ui'],
}
```

## 🎬 Adding Canvas Animation Frames

The hero section uses a 120-frame image sequence for smooth scroll animation.

### Setup Instructions:

1. **Create your frames**:
   - Total frames needed: 120
   - File format: PNG (recommended)
   - Resolution: 1920x1080px
   - Optimization: Use TinyPNG or similar to compress

2. **Name your files**:
   ```
   frame_0001.png
   frame_0002.png
   frame_0003.png
   ...
   frame_0120.png
   ```

3. **Add to project**:
   - Create folder: `public/frames/`
   - Copy all 120 images there
   - The component will auto-load them

4. **Optional: Adjust properties**:
   ```tsx
   <CanvasScrollAnimation
     frameCount={120}           // Total frames
     imageSequencePath="/frames" // Folder path
     height={1080}              // Frame height
     width={1920}               // Frame width
     containerHeight={300}      // Display height
   />
   ```

### Tips:
- Use video frame extraction for smooth sequences
- Compress images to reduce load time
- Test with 30-60 frames first to verify setup

## 🔐 Admin Dashboard

### Accessing Admin:
- URL: `http://localhost:3000/admin`
- Default password: `admin123` (from `.env.local`)

### Features:
- ✅ Add AI Receptionists
- ✅ Edit webhook URLs
- ✅ Manage API keys
- ✅ Toggle receptionist status
- ✅ Delete receptionists

### To Change Password:
Edit `.env.local`:
```env
NEXT_PUBLIC_ADMIN_PASSWORD=your_new_secure_password
```

⚠️ Restart dev server after changing password.

## 🔨 Available Commands

```bash
# Development
npm run dev          # Start dev server (http://localhost:3000)

# Production
npm run build        # Build for production
npm start           # Run production build

# Code quality
npm run lint        # Run ESLint

# Help
npm run --list      # Show all scripts
```

## 📱 Testing Responsiveness

### Built-in Breakpoints:
- **Mobile**: < 768px (phone)
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Test in Browser DevTools:
1. Open DevTools (F12 or Ctrl+Shift+I)
2. Click responsive design mode (Ctrl+Shift+M)
3. Test all breakpoints

### Key Responsive Features:
- Navigation collapses to mobile menu
- Canvas adjusts to screen width
- Touch-friendly buttons and links
- Optimized font sizes per device

## 🌙 Light/Dark Mode

- **Toggle**: Top-right of page
- **Default**: Follows system preference
- **Persistence**: Saved in localStorage
- **Smooth**: No flicker between modes

### To Set Default Theme:
Edit `app/layout.tsx`:
```tsx
<ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
```

## 🚀 Deployment

### Deploy to Vercel (Recommended):
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repo
4. Set `NEXT_PUBLIC_ADMIN_PASSWORD` in environment variables
5. Deploy!

### Deploy to Other Platforms:
```bash
# Build production version
npm run build

# This creates .next/ folder
# Deploy the entire project folder
```

## 🐛 Troubleshooting

### Canvas frames not showing?
- [ ] Frames exist in `public/frames/` folder
- [ ] File names are `frame_0001.png` to `frame_0120.png`
- [ ] Frame count matches component prop (120)
- [ ] Check browser console for errors

### Admin page not loading?
- [ ] `.env.local` file exists
- [ ] Check password in `.env.local`
- [ ] Clear localStorage: Open DevTools → Storage → Clear All
- [ ] Restart dev server

### Theme not changing?
- [ ] Check next-themes is installed (`npm list next-themes`)
- [ ] Verify `ThemeProvider` wraps entire app
- [ ] Clear browser cache
- [ ] Check JavaScript is enabled

### Animations stuttering?
- [ ] Check browser DevTools Performance tab
- [ ] Verify no console errors
- [ ] Close other browser tabs
- [ ] Update GPU drivers
- [ ] Try on different browser

### Styling looks wrong?
- [ ] Run `npm run build` and check for errors
- [ ] Clear `.next` folder and rebuild
- [ ] Check Tailwind config syntax
- [ ] Verify globals.css imports at top of layout

## 📚 Learning Resources

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)

## ✅ Pre-Launch Checklist

- [ ] All contact information updated
- [ ] Canvas frames added (120 PNGs in `public/frames/`)
- [ ] Portfolio projects updated
- [ ] Pricing tiers customized
- [ ] Admin password changed from default
- [ ] Company name updated throughout
- [ ] Tested on mobile and desktop
- [ ] Theme toggle working (light/dark)
- [ ] Admin dashboard password working
- [ ] All animations smooth at 60fps
- [ ] Contact form working
- [ ] Links and navigation working
- [ ] Deployed and tested in production

## 🎯 Performance Goals

This template achieves:
- ✅ **Lighthouse Score**: 90+
- ✅ **First Contentful Paint**: < 2s
- ✅ **Time to Interactive**: < 4s
- ✅ **Cumulative Layout Shift**: < 0.1
- ✅ **Core Web Vitals**: Passing

## 💬 Support

For issues or questions:
1. Check the troubleshooting section above
2. Review component source code (well-commented)
3. Check Next.js and Tailwind documentation
4. Review `.github/copilot-instructions.md`

## 📄 License

This template is created for Miller's Digital.

---

## 🎉 You're All Set!

Your premium web portfolio is ready to customize. Start with:

1. Update contact information
2. Add canvas frames
3. Customize pricing
4. Update portfolio projects
5. Change the admin password
6. Deploy!

**Happy coding!** 🚀

---

**Last Updated**: June 2024
**Template Version**: 1.0.0
**Next.js Version**: 14+
