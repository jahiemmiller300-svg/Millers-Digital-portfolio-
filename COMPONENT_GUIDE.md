# 🎨 Component Documentation

Detailed guide to each component in Miller's Digital portfolio.

---

## 📑 Table of Contents

1. [Layout Components](#layout-components)
2. [Section Components](#section-components)
3. [Feature Components](#feature-components)
4. [Utility Components](#utility-components)

---

## Layout Components

### `Navigation.tsx`
**Purpose**: Top navigation bar with links and theme toggle

**Features**:
- Responsive mobile menu
- Smooth scroll to sections
- Theme toggle button
- Active link highlighting

**Props**: None (uses hooks)

**Usage**:
```tsx
import { Navigation } from '@/components';

export default function App() {
  return <Navigation />;
}
```

**Customization**:
- Change logo text: Line 25 `"M's Digital"`
- Add/remove nav items: Line 18-23 `navItems` array
- Change colors: Line 45-50 style props

---

### `Footer.tsx`
**Purpose**: Bottom footer with links and copyright

**Features**:
- Quick links to sections
- Social media links
- Copyright info
- Responsive grid

**Props**: None

**Usage**:
```tsx
import { Footer } from '@/components';

export default function App() {
  return <Footer />;
}
```

**Customization**:
- Social links: Line 50-66
- Company info: Line 40-45
- Copyright year: Auto-calculated (Line 9)

---

## Section Components

### `HeroSection.tsx`
**Purpose**: Landing page hero with animated elements

**Features**:
- Large headline with gradient
- Subheadline
- Animated background elements
- CTA buttons
- Scroll indicator

**Props**: None

**Usage**:
```tsx
import { HeroSection } from '@/components';

<HeroSection />
```

**Customization**:
- Headline: Line 38-42
- Subheadline: Line 44-47
- Button labels: Line 50-60
- Animation speed: Line 18-21

---

### `AboutSection.tsx`
**Purpose**: Company about section with service highlights

**Features**:
- Section title with gradient
- 3-column service cards
- Icon display
- Expertise highlight box
- Animated on scroll

**Props**: None

**Usage**:
```tsx
import { AboutSection } from '@/components';

<AboutSection />
```

**Customization**:
- Title: Line 44-46
- Services: Line 12-27 `services` array
- Expertise items: Line 75-86
- Colors: Use Tailwind classes (Line 64)

---

### `PortfolioSection.tsx`
**Purpose**: Featured work showcase

**Features**:
- Grid portfolio display
- Project cards with hover effects
- Category badges
- External links
- View All button

**Props**: None

**Usage**:
```tsx
import { PortfolioSection } from '@/components';

<PortfolioSection />
```

**Customization**:
- Projects: Line 10-33 `portfolio` array
- Add project: Add new object to array
- Grid columns: Line 65 `md:grid-cols-2`
- Colors: Tailwind classes (Line 80)

**Project Object Structure**:
```tsx
{
  id: 1,
  title: 'Project Name',
  description: 'Brief description',
  category: 'Web Development',
  image: 'placeholder-1',
  link: 'https://example.com',
}
```

---

### `AIReceptionistSection.tsx`
**Purpose**: Interactive AI demo and features

**Features**:
- Chat interface simulation
- Message input
- AI response simulation
- Capabilities list
- Feature icons

**Props**: None

**Usage**:
```tsx
import { AIReceptionistSection } from '@/components';

<AIReceptionistSection />
```

**Customization**:
- Title: Line 50-51
- Features: Line 109-124 array
- Chat messages: Line 15-20
- Initial response: Line 77-82
- Colors: Tailwind classes (Line 95)

**Adding Real AI**:
Replace the simulation with real API call:
```tsx
const handleSendMessage = async () => {
  // Call your AI API here
  const response = await fetch('/api/chat', {
    method: 'POST',
    body: JSON.stringify({ message }),
  });
  // Update messages
};
```

---

### `ServicesSection.tsx`
**Purpose**: Pricing tiers and service packages

**Features**:
- Three pricing tiers
- Feature lists
- Price display
- Popular badge
- CTA buttons
- Checkmark icons

**Props**: None

**Usage**:
```tsx
import { ServicesSection } from '@/components';

<ServicesSection />
```

**Customization**:
- Packages: Line 11-70 `packages` array
- Add package: Add object to array
- Change prices: `price` field
- Highlight package: `highlighted: true`
- Features: `features` array

**Package Object Structure**:
```tsx
{
  id: 1,
  name: 'Package Name',
  price: 2999,
  description: 'Description',
  features: [
    'Feature 1',
    'Feature 2',
  ],
  highlighted: false,
}
```

---

### `ContactSection.tsx`
**Purpose**: Contact form and contact methods

**Features**:
- Contact form with validation
- Multi-channel contact options
- Social media links
- Form submission feedback
- Animated contact cards

**Props**: None

**Usage**:
```tsx
import { ContactSection } from '@/components';

<ContactSection />
```

**Customization**:
- Contact methods: Line 62-86 array
- Update phone: Line 65-68
- Update email: Line 70-73
- Update WhatsApp: Line 75-78
- Update Instagram: Line 80-83
- Success message: Line 59

**Contact Method Structure**:
```tsx
{
  icon: PhoneIcon,
  label: 'Phone',
  value: '+1 (555) 123-4567',
  href: 'tel:+15551234567',
}
```

**To Add Backend Integration**:
```tsx
const handleSubmit = async (e) => {
  e.preventDefault();
  // Call your backend API
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(formData),
  });
  // Handle response
};
```

---

## Feature Components

### `CanvasScrollAnimation.tsx`
**Purpose**: HTML5 Canvas animation linked to scroll

**Features**:
- Async frame loading
- Scroll-linked animation
- Frame progress indicator
- Loading states
- Proper cleanup
- High-quality rendering

**Props**:
```tsx
interface CanvasScrollAnimationProps {
  frameCount?: number;           // Total frames (default: 120)
  imageSequencePath: string;     // Path to frames folder
  height?: number;               // Frame height (default: 1080)
  width?: number;                // Frame width (default: 1920)
  containerHeight?: number;      // Display height (default: 300)
}
```

**Usage**:
```tsx
<CanvasScrollAnimation
  frameCount={120}
  imageSequencePath="/frames"
  height={1080}
  width={1920}
  containerHeight={400}
/>
```

**Setup Instructions**:
1. Add 120 PNG files to `public/frames/`
2. Name: `frame_0001.png` to `frame_0120.png`
3. Component auto-loads them

**Performance Tips**:
- Compress frames to reduce file size
- Use PNG format for best quality
- Keep dimensions consistent (1920x1080)
- Test with 30 frames first

**Troubleshooting**:
- Check browser console for errors
- Verify frame paths are correct
- Ensure frameCount matches actual files
- Check for CORS issues (should be local)

---

### `ThemeToggle.tsx`
**Purpose**: Light/dark mode toggle button

**Features**:
- Click to toggle theme
- Icon changes (sun/moon)
- Mounted state handling (prevents hydration issues)
- Smooth transitions

**Props**: None (uses hooks)

**Usage**:
```tsx
import { ThemeToggle } from '@/components';

<ThemeToggle />
```

**Customization**:
- Button size: Line 31 `w-10 h-10`
- Icons: Line 34-35
- Border color: Line 29 `border-gold`
- Hover effect: Line 30 `hover:bg-gold/10`

---

### `ThemeProvider.tsx`
**Purpose**: Provides theme context to entire app

**Features**:
- Next-themes integration
- System preference detection
- Persistent theme selection
- No flicker on load

**Props**: ThemeProviderProps (from next-themes)

**Usage**:
```tsx
// In app/layout.tsx
import { ThemeProvider } from '@/components';

export default function RootLayout({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      {children}
    </ThemeProvider>
  );
}
```

**Configuration**:
```tsx
attribute="class"          // Use class attribute
defaultTheme="dark"        // Default to dark
enableSystem={true}        // Follow OS preference
storageKey="theme"         // localStorage key
```

---

### `AdminProtection.tsx`
**Purpose**: Password-protected admin area

**Features**:
- Password prompt
- Session management
- LocalStorage token
- Logout button
- Error feedback

**Props**:
```tsx
interface AdminProtectionProps {
  children: ReactNode;
}
```

**Usage**:
```tsx
// In app/admin/layout.tsx
import { AdminProtection } from '@/components';

export default function AdminLayout({ children }) {
  return <AdminProtection>{children}</AdminProtection>;
}
```

**Password Configuration**:
- Set in `.env.local`:
```env
NEXT_PUBLIC_ADMIN_PASSWORD=your_password
```
- Default: `admin123`
- Change triggers: Must restart dev server

**Customization**:
- Change prompt title: Line 47 `<h1>`
- Change button text: Line 65 `<button>`
- Change error message: Line 60

**Security Notes**:
- Password stored in env variable
- Session via localStorage token
- Not recommended for production auth
- Consider implementing proper JWT/OAuth

---

## Utility Components

### `index.ts`
**Purpose**: Central export point for all components

**Usage**:
```tsx
import { 
  Navigation, 
  HeroSection, 
  AboutSection,
  // ... other components
} from '@/components';
```

**Adding New Component**:
1. Create file: `components/new-component.tsx`
2. Export function with `'use client'` if needed
3. Add to `components/index.ts`:
```tsx
export { NewComponent } from './new-component';
```
4. Import in page or another component

---

## 🎨 Styling Patterns

### Color Usage
```tsx
// Primary accent
className="text-gold"
className="border-gold"
className="bg-gold"

// Hover states
className="hover:text-gold"
className="hover:border-gold/60"

// Dark theme
className="dark:text-white"
className="dark:bg-black"
```

### Animation Patterns
```tsx
// Framer Motion
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  whileHover={{ scale: 1.05 }}
>
  Content
</motion.div>
```

### Responsive Patterns
```tsx
// Mobile first
className="px-4 md:px-8"  // Mobile: 4, Desktop: 8
className="text-lg md:text-2xl"
className="block md:flex"
```

---

## 🔧 Common Customizations

### Change Section Title
```tsx
<h2 className="text-4xl md:text-5xl font-bold text-white">
  New <span className="text-gold">Title</span>
</h2>
```

### Change Button Style
```tsx
// Primary (filled)
className="px-8 py-3 bg-gold text-black font-bold rounded-lg hover:bg-gold-light"

// Secondary (outlined)
className="px-8 py-3 border-2 border-gold text-gold font-bold rounded-lg hover:bg-gold/10"
```

### Change Card Style
```tsx
className="p-8 rounded-lg border border-gold/30 bg-gradient-to-br from-gold/10 to-transparent hover:border-gold/60 transition-all"
```

### Add Animation
```tsx
<motion.div
  initial={{ opacity: 0, x: -20 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  Content
</motion.div>
```

---

## 📱 Component Sizes

- **Hero Section Height**: Full viewport
- **Section Padding**: `py-20 md:py-32`
- **Max Width**: `max-w-6xl`
- **Button Height**: `py-3` (12px)
- **Card Padding**: `p-6` to `p-8`

---

## 🎯 Next Steps

1. **Review** each component source code
2. **Understand** the structure and patterns
3. **Customize** for your brand
4. **Test** changes on `npm run dev`
5. **Deploy** when satisfied

---

**Happy customizing! 🚀**
