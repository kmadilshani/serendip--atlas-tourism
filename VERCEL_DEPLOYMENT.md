# Vercel Free Hosting & Deployment Guide

This project **Serendip Atlas — Sri Lanka Tourism Agency Website** has been converted into a full-fledged **Next.js (App Router) + React + Tailwind CSS** application.

---

## 🚀 Quick Start (Local Development)

To run the Next.js development server locally:

```bash
# Install dependencies if you haven't already
pnpm install   # or npm install / yarn

# Start Next.js Development Server
npm run next:dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the Next.js application.

---

## 🌐 Deploying to Vercel (Free Hosting)

Vercel provides **100% free hosting** for Next.js projects with global CDN edge performance, automatic HTTPS/SSL, and automatic continuous deployment on every Git push.

### Option A: 1-Click GitHub Deployment (Recommended)

1. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "Convert project to Next.js App Router with Tailwind CSS"
   git push origin main
   ```

2. **Connect to Vercel**:
   - Go to [Vercel.com](https://vercel.com) and log in or create a free account.
   - Click **"Add New Project"** -> **"Project"**.
   - Import your GitHub repository.
   - Vercel automatically detects **Next.js** and configures build settings:
     - **Framework Preset**: `Next.js`
     - **Build Command**: `next build`
     - **Output Directory**: `.next`
   - Click **"Deploy"**.

3. **Done!** Your website will be live at `https://your-project-name.vercel.app` in under 60 seconds!

---

### Option B: Deploying via Vercel CLI

If you prefer deploying directly from your terminal:

```bash
# 1. Install Vercel CLI globally
npm i -g vercel

# 2. Login to Vercel
vercel login

# 3. Deploy to free preview environment
vercel

# 4. Deploy to Production
vercel --prod
```

---

## 📱 Mobile & Desktop Responsive Features Included

- 📱 **Mobile Responsive Drawer Menu**: Smooth hamburger overlay navigation for screens below 768px.
- 💻 **Desktop Navbar**: Fixed blur glassmorphism header with active route highlighting.
- 🎯 **Interactive Trip Planner**: 3-step route builder with live route summary card.
- 🗺️ **24 Sri Lanka Destinations**: Dynamic filter by region & grid/list layout switcher.
- 🌟 **Design System**: Harmonious tropical dark palette (`#071C24` forest, `#19B8A6` teal gold, `#FF6B4A` spice), custom Google Fonts (Fraunces & Outfit), and micro-animations.
