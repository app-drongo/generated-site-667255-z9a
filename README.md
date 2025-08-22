# 68a84a285bf71ff00caf9e77

This Next.js website was generated using AI-powered template selection and enhancement.

## Generation Method

- **Template System**: Pre-built templates from database
- **AI Enhancement**: Content customized by AI with page-specific context
- **Structure**: Clean layout-based architecture
- **Unique Components**: Each page gets unique component instances (no deduplication)
- **Route-Based**: Uses Next.js App Router with route-based page generation

## Pages

- **Home** (/): 5 components

## Layout Components

- Header: 1 components
- Footer: 2 components

## Statistics

- **Total Pages**: 1
- **Total Components**: 8 (unique instances)
- **Generated**: 2025-08-22T10:47:33.988Z
- **Method**: Template-based generation with route-based structure

## Component Architecture

Each page header gets a unique component file to ensure page-specific content:
- Home page: `PageHeaderHome.tsx`
- About page: `PageHeaderAbout.tsx`
- Services page: `PageHeaderServices.tsx`

This prevents content duplication and ensures each page has relevant messaging.

## Route-Based Structure

Pages are generated based on routes, not names:
- Route `/` → `src/app/page.tsx` (home page)
- Route `/about` → `src/app/about/page.tsx`
- Route `/contact` → `src/app/contact/page.tsx`

## Import System

All imports use:
- **Default imports**: `import Component from './Component'` (no curly braces)
- **PascalCase paths**: `'@/components/Component'` (matches file names)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## Customization

All components are in `src/components/` and can be edited directly.
Each component file is unique to prevent cross-page content conflicts.

---
Generated with AI Template-Based Website Builder (Route-Based Architecture)
