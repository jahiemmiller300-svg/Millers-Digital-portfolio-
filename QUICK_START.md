# ⚡ Quick Start Guide

## For the Impatient Developer

### 1️⃣ Install (1 minute)
```bash
npm install
```

### 2️⃣ Run (2 seconds)
```bash
npm run dev
```

### 3️⃣ Open (Automatic)
- Main: http://localhost:3000
- Admin: http://localhost:3000/admin (password: `admin123`)

---

## 🎯 Most Important Files to Edit

| File | What to Change | Why |
|------|---|---|
| `.env.local` | `NEXT_PUBLIC_ADMIN_PASSWORD` | Security |
| `components/contact-section.tsx` | Phone, Email, WhatsApp, Instagram | Contact info |
| `components/services-section.tsx` | Prices and features | Pricing |
| `components/portfolio-section.tsx` | Project names and descriptions | Show your work |
| `tailwind.config.js` | Colors (if not black/gold) | Theme |
| `public/frames/` | Add 120 PNG files | Canvas animation |

---

## 🚀 Common Tasks

### Add a Portfolio Project
Edit `components/portfolio-section.tsx`:
```tsx
const portfolio = [
  // ... existing projects
  {
    id: 5,
    title: 'Your New Project',
    description: 'What it does',
    category: 'Web Development',
    image: 'placeholder-5',
    link: '#',
  },
];
```

### Change a Price
Edit `components/services-section.tsx`:
```tsx
{
  price: 4999,  // ← Change this
  // ...
}
```

### Update Phone Number
Edit `components/contact-section.tsx`:
```tsx
{
  label: 'Phone',
  value: '+1 (555) 123-4567',  // ← Change this
  href: 'tel:+15551234567',
}
```

### Change Admin Password
Edit `.env.local`:
```env
NEXT_PUBLIC_ADMIN_PASSWORD=YourNewPassword123
```
Then restart `npm run dev`.

---

## 🎬 Add Canvas Animation

1. Create 120 PNG files (frame_0001.png → frame_0120.png)
2. Put them in: `public/frames/`
3. That's it! Component auto-loads them

---

## 🎨 Change Colors

Edit `tailwind.config.js`:
```js
colors: {
  gold: '#YOUR_COLOR',
}
```

---

## 📱 Test on Phone

```bash
# Get your machine IP
ipconfig

# Open on phone:
http://YOUR_IP:3000
```

---

## 🚀 Deploy (5 minutes with Vercel)

1. Push to GitHub
2. Go to vercel.com
3. Import repo
4. Set `NEXT_PUBLIC_ADMIN_PASSWORD` env var
5. Click Deploy

Done! 🎉

---

## 🆘 Something Broke?

Try in order:
1. `npm run dev` again
2. Clear `.next` folder
3. Reinstall: `rm -r node_modules && npm install`
4. Check error message in terminal
5. Check browser console (F12)

---

## 📞 Need Help?

- Full guide: See `SETUP.md`
- Project details: See `README.md`
- Code docs: See `.github/copilot-instructions.md`
- Next.js help: https://nextjs.org/docs
- Component guide: Check component headers

---

**You've got this! 🚀**
