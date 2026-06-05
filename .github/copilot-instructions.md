# Miller's Digital Portfolio - Copilot Instructions

This is a premium web portfolio for Miller's Digital specializing in web development and AI receptionist solutions.

## Project Overview
- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS + Custom Theme
- **Animation**: Framer Motion + HTML5 Canvas
- **Theme**: Light/Dark Mode with next-themes
- **Auth**: Admin dashboard with password protection

## Key Features
1. Responsive design (mobile-first)
2. Canvas scroll animation (120-frame sequence)
3. Smooth 60fps animations
4. Admin dashboard for AI receptionist management
5. Contact form with multi-channel integration
6. Portfolio showcase
7. AI receptionist demo chat

## Tech Stack
- Next.js 14
- React 18
- TypeScript 5
- Tailwind CSS 3
- Framer Motion 10
- next-themes
- Zustand (ready)
- Lucide Icons

## Directory Structure
```
app/              # Next.js app directory
├── admin/        # Protected admin routes
├── page.tsx      # Home page
├── layout.tsx    # Root layout
└── globals.css   # Global styles

components/      # Reusable React components
├── sections/    # Page sections
├── theme-*      # Theme management
└── admin-*      # Admin features

public/
└── frames/       # Canvas animation frames (add 120 PNGs here)
```

## Development Guidelines
- Use TypeScript for all files
- Follow Tailwind CSS conventions
- Use Framer Motion for animations
- Keep components modular and reusable
- Maintain responsive design principles
- Follow Next.js best practices

## Important Notes
- Admin password: stored in `.env.local` (default: `admin123`)
- Canvas animation requires 120 PNG files in `public/frames/`
- All animations optimized for 60fps performance
- Proper cleanup of event listeners and canvas resources
- No hydration issues - all components properly marked

## Customization Points
1. **Colors**: Update `tailwind.config.js` for theme colors
2. **Content**: Update each section component
3. **Contact Info**: Update `components/contact-section.tsx`
4. **Pricing**: Update `components/services-section.tsx`
5. **Admin Password**: Change in `.env.local`

## Common Tasks
- **Add new section**: Create component in `components/`, export from `index.ts`, add to `page.tsx`
- **Customize colors**: Modify `theme.colors` in `tailwind.config.js`
- **Change fonts**: Update in `app/layout.tsx` and `tailwind.config.js`
- **Modify navigation**: Edit `components/navigation.tsx`
- **Add portfolio items**: Update `portfolio` array in `components/portfolio-section.tsx`

## Performance Checklist
- ✅ 60fps animations
- ✅ No stutter on scroll
- ✅ Loading states
- ✅ Proper cleanup
- ✅ Responsive design
- ✅ Canvas optimization
- ✅ Image lazy loading ready

## Next Steps
1. Install dependencies: `npm install`
2. Add canvas frames to `public/frames/` (120 PNGs)
3. Customize contact information
4. Update pricing and services
5. Deploy to production
