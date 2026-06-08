# Luke Coleman — Portfolio

A modern dark-themed developer portfolio built with **Next.js 15** and **TypeScript**.

## ✨ Features
- Dark theme with green (#00ff88) accent
- Space Mono + Outfit fonts
- Animated hero with rotating dashed circle & typewriter effect
- Count-up stats animation
- Services, Resume timeline, Work portfolio, Contact form
- Fully responsive — mobile hamburger menu
- No Tailwind — pure CSS

## 📁 Project Structure

```
luke-portfolio/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Resume.tsx
│   │   ├── Work.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
│   └── (add avatar.jpg here)
├── package.json
├── tsconfig.json
└── next.config.ts
```

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run development server
```bash
npm run dev
```

### 3. Open in browser
```
http://localhost:3000
```

## 🖼️ Add Your Photo

Place your photo in `/public/avatar.jpg`, then in `Hero.tsx` replace the placeholder div with:

```tsx
import Image from "next/image";

// Inside the .avatar div:
<Image src="/avatar.jpg" alt="Your Name" fill style={{ objectFit: "cover" }} />
```

## ✏️ Customization

| What | Where |
|------|-------|
| Your name | `Navbar.tsx` (logo) + `Hero.tsx` (h1) |
| Job title | `Hero.tsx` (hero-role) |
| Description | `Hero.tsx` (hero-desc) |
| Stats (years, projects) | `Hero.tsx` (STATS array) |
| Services | `Services.tsx` (SERVICES array) |
| Experience & Education | `Resume.tsx` (EXP + EDU arrays) |
| Skills | `Resume.tsx` (SKILLS array) |
| Projects | `Work.tsx` (WORKS array) |
| Contact info | `Contact.tsx` (email, LinkedIn, GitHub) |

## 🌐 Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repo at [vercel.com](https://vercel.com).
