# Medi Voices - Healthcare Innovation Magazine

A modern healthcare magazine website built with Next.js, TypeScript, and Tailwind CSS, featuring a beautiful magenta-violet gradient theme.

## Features

- 🎨 **Modern Design** - Clean, professional healthcare magazine layout with magenta-violet gradient theme
- 📱 **Responsive** - Fully responsive design that works on all devices
- 📄 **Dynamic Pages** - Homepage, article listings, category pages, and individual article pages
- 📚 **Magazine Issues** - Browse volumes and issues of the healthcare magazine
- 🔍 **Search & Filter** - Advanced search and filtering capabilities
- 🏷️ **Categories** - Organized content by healthcare topics and specialties
- 👥 **Author Profiles** - Article author information and profiles
- 📊 **Statistics** - Display publication metrics and achievements

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom gradient theme
- **Icons**: Lucide React
- **Font**: Inter from Google Fonts

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── articles/          # Article listing and detail pages
│   ├── categories/        # Category listing and detail pages
│   ├── issues/           # Magazine issues and volumes
│   ├── globals.css       # Global styles and theme
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Homepage
├── components/           # Reusable React components
│   ├── Header.tsx        # Site header with navigation
│   ├── Footer.tsx        # Site footer
│   └── Layout.tsx        # Main layout wrapper
├── data/                 # Mock data and content
│   └── mockData.ts       # Sample articles, categories, volumes
├── lib/                  # Utility functions
│   └── utils.ts          # Helper functions
└── types/                # TypeScript type definitions
    └── index.ts          # Article, Category, Volume types
```

## Customization

### Theme Colors

The magenta-violet gradient theme is defined in `src/app/globals.css`:

```css
--magenta-primary: #d946ef;
--violet-secondary: #7c3aed;
--magenta-violet-gradient: linear-gradient(135deg, #d946ef 0%, #7c3aed 100%);
```

### Content

Update the mock data in `src/data/mockData.ts` to modify:
- Articles and blog posts
- Categories and subcategories  
- Magazine volumes and issues

## Pages

- **Homepage** (`/`) - Hero section, featured articles, categories overview
- **Articles** (`/articles`) - Complete article listing with search and filters
- **Article Detail** (`/articles/[id]`) - Individual article page with author info
- **Categories** (`/categories`) - Browse all content categories
- **Category Detail** (`/categories/[slug]`) - Articles within a specific category
- **Issues** (`/issues`) - Magazine volumes and issues archive

## Deployment

### Build for Production

```bash
npm run build
npm start
```

### Deploy on Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

## License

This project is licensed under the MIT License.

## Support

For support, please contact contact@madivoices.com
