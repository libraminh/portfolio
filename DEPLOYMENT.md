# Deployment Guide

This portfolio website is ready to be deployed on Vercel.

## Prerequisites

- A GitHub account
- A Vercel account (sign up at [vercel.com](https://vercel.com))

## Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

2. **Import Project on Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Click "Import Git Repository"
   - Select your GitHub repository
   - Vercel will automatically detect Next.js

3. **Configure Project**
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: `./portfolio` (if deploying from monorepo) or leave as root
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `.next` (auto-detected)
   - Install Command: `npm install` (auto-detected)

4. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete
   - Your site will be live at `https://your-project.vercel.app`

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   cd portfolio
   vercel
   ```

4. **Follow the prompts**
   - Link to existing project or create new
   - Confirm settings
   - Deploy

## Environment Variables

Currently, no environment variables are required. If you need to add any in the future:

1. Go to your project settings on Vercel
2. Navigate to "Environment Variables"
3. Add your variables
4. Redeploy

## Custom Domain

To add a custom domain:

1. Go to your project settings on Vercel
2. Navigate to "Domains"
3. Add your domain
4. Follow DNS configuration instructions

## Performance Optimization

The site is already optimized with:
- Next.js Image optimization
- Automatic code splitting
- Static generation where possible
- Optimized fonts (Geist Sans & Geist Mono)

## Build Configuration

The project uses:
- **Next.js 14+** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Shadcn/UI** components
- **Framer Motion** for animations

## Troubleshooting

### Build Fails
- Check Node.js version (should be 18+)
- Ensure all dependencies are installed
- Check for TypeScript errors: `npm run build`

### Styles Not Loading
- Verify Tailwind CSS is properly configured
- Check `globals.css` is imported in `layout.tsx`

### Images Not Loading
- Ensure images are in the `public` folder
- Use Next.js `Image` component for optimization

## Support

For issues or questions:
- Check [Next.js Documentation](https://nextjs.org/docs)
- Check [Vercel Documentation](https://vercel.com/docs)
- Review project README.md

