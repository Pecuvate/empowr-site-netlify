# Empowr Site - Netlify

A modern Next.js website showcasing the Empowr brand with Poppins typography and a comprehensive color system.

## 🎨 Brand System

### Typography
- **Primary Font**: Poppins (Google Fonts)
- **Weights**: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)
- **Optimized**: Using Next.js font optimization for better performance

### Color Palette

#### Primary Colors
- **Empowr Blue**: `#4A70C2` - Primary brand color
- **Empowr Red**: `#FF6161` - Secondary brand color  
- **Empowr Black**: `#1B1B1B` - Neutral brand color

#### Color Usage
- **Primary**: Main actions, important information, headers
- **Secondary**: Supporting actions, highlights, accents
- **Neutral**: General content, subtle elements, backgrounds

#### Available Shades
Each color includes 10 shades (50-900) for flexible design:
- `empowr-blue-50` to `empowr-blue-900`
- `empowr-red-50` to `empowr-red-900`
- `empowr-black-50` to `empowr-black-900`

#### Semantic Colors
- `primary-500` = `empowr-blue-500`
- `secondary-500` = `empowr-red-500`
- `neutral-900` = `empowr-black-900`

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or pnpm

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Linting
```bash
npm run lint
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15.4.4
- **Styling**: Tailwind CSS v4
- **Typography**: Poppins (Google Fonts)
- **Language**: TypeScript
- **Linting**: ESLint

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles and brand utilities
│   ├── layout.tsx       # Root layout with Poppins font setup
│   └── page.tsx         # Brand showcase page
├── components/          # Reusable components (to be added)
└── lib/                # Utility functions (to be added)
```

## 🎯 Brand Guidelines

### Typography Usage
```jsx
// Headings
<h1 className="text-6xl font-bold">Main Heading</h1>
<h2 className="text-5xl font-semibold">Section Heading</h2>
<h3 className="text-4xl font-medium">Subsection Heading</h3>

// Body text
<p className="text-base font-normal">Regular body text</p>
<p className="text-xl font-light">Light body text</p>
```

### Color Usage
```jsx
// Primary actions
<button className="bg-primary-500 hover:bg-primary-600 text-white">
  Primary Button
</button>

// Secondary actions
<button className="bg-secondary-500 hover:bg-secondary-600 text-white">
  Secondary Button
</button>

// Text colors
<h1 className="text-neutral-900">Dark text</h1>
<p className="text-neutral-600">Medium text</p>
<span className="text-neutral-400">Light text</span>
```

### Custom Utilities
```jsx
// Gradient text
<h1 className="text-gradient">Gradient Text</h1>

// Gradient backgrounds
<div className="bg-gradient-primary">Primary gradient</div>
<div className="bg-gradient-secondary">Secondary gradient</div>

// Focus styles
<button className="focus-ring">Accessible button</button>
```

## 🌟 Features

- ✅ **Brand-Consistent Design**: Complete color system with semantic naming
- ✅ **Optimized Typography**: Poppins font with proper weights and optimization
- ✅ **Responsive Design**: Mobile-first approach with Tailwind CSS
- ✅ **Performance Optimized**: Next.js 15 with image and font optimization
- ✅ **Accessibility**: Proper focus states and semantic HTML
- ✅ **Type Safety**: Full TypeScript support
- ✅ **Code Quality**: ESLint configuration for consistent code

## 📝 License

This project is proprietary to Empowr.
