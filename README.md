# Portfolio Website

A modern, minimalist personal portfolio website built with Next.js 14+, TypeScript, Shadcn/UI, and Tailwind CSS.

## Features

- 🎨 Modern, minimalist design
- 📱 Fully responsive (mobile-first)
- ⚡ Optimized for performance
- 🎭 Smooth animations with Framer Motion
- 🌙 Dark mode support (via Shadcn/UI)
- 🔍 SEO optimized with structured data
- ♿ Accessible components (Shadcn/UI)
- 🚀 Ready for Vercel deployment

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/UI
- **Animations**: Framer Motion
- **Icons**: Lucide React, React Icons
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Run the development server
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
portfolio/
├── app/
│   ├── components/
│   │   ├── layout/          # Header, Footer, Navigation
│   │   ├── sections/        # Hero, About, Experience, etc.
│   │   └── ui/              # Shadcn/UI components
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Main page
│   └── globals.css          # Global styles
├── lib/
│   └── data.ts              # Portfolio data
└── public/                  # Static assets
```

## Customization

### Update Portfolio Data

Edit `lib/data.ts` to update:
- Personal information
- Work experience
- Projects
- Skills
- Education
- Certifications

### Styling

- Global styles: `app/globals.css`
- Component styles: Tailwind CSS classes
- Theme: Configured via Shadcn/UI in `components.json`

### Adding New Sections

1. Create a new component in `app/components/sections/`
2. Import and add it to `app/page.tsx`
3. Add navigation link in `app/components/layout/Navigation.tsx`

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

### Quick Deploy to Vercel

1. Push your code to GitHub
2. Import project on [vercel.com](https://vercel.com)
3. Deploy!

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## License

MIT

## Contact

Minh Le - libraminh@gmail.com

Portfolio: [https://minhle.vercel.app/](https://minhle.vercel.app/)
