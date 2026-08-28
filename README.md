<div align="center">

<img width="256" alt="Image" src="https://github.com/user-attachments/assets/d02b0463-60b8-4122-8f48-46018ffd52b3" />

# WoobleWoobly

**A playful, 3D-enhanced personal bio link & hub built with Astro, Tailwind CSS v4, and Three.js.**

[![Astro](https://img.shields.io/badge/Astro-v7-FF5D01?logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Three.js](https://img.shields.io/badge/Three.js-r185-black?logo=three.js&logoColor=white)](https://threejs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[**Live Demo (rockhead07.tech)**](https://rockhead07.tech) • [**Report Bug**](https://github.com/RockHead07/WoobleWoobly/issues) • [**Request Feature**](https://github.com/RockHead07/WoobleWoobly/issues)

</div>

---

## 🌟 Overview

**WoobleWoobly** is a personalized, interactive alternative to standard Linktree pages. Designed and developed by [Bagus Insan Pradana (@rockhead07)](https://github.com/RockHead07), it combines high-performance static rendering with tactile UI design, smooth micro-interactions, and a real-time interactive 3D floating character.

### ✨ Key Features

- 🧸 **Interactive 3D Floating Avatar**: Powered by Three.js with orbit controls, inertia rotation, floating animations, and lightweight GLB model loading.
- 🎨 **Minimal & Tactile Design System**: Clean pastel blue aesthetic (`#F7FBFC`, `#D6E6F2`, `#B9D7EA`, `#769FCD`), sharp corner cards (`rounded-md`), and subtle dot grid patterns without clunky AI gradients.
- ⚡ **Blazing Fast Performance**: Zero unnecessary client runtime overhead using Astro's Static Site Generation (SSG).
- 🖱️ **Custom Interactive Cursor**: Smooth cursor tracking with hover-state scaling and magnetic feel (gracefully disabled on touch/mobile devices).
- 💼 **Service & Collaboration CTA**: Built-in call-to-action cards for freelance/contract inquiries with direct WhatsApp integration.
- ☕ **Creator Support Card**: Standout support card container for Buy Me a Coffee.
- 📱 **Mobile & Touch Optimized**: Responsive layout with touch drag support for the 3D model and mobile-specific interaction delays.
- 🗂️ **Centralized Configuration**: Easily customize all profile info, social links, quick links, and services from a single TypeScript file (`src/data/links.ts`).

---

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build) (v7 / Static Output)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) + `@tailwindcss/vite`
- **3D Graphics**: [Three.js](https://threejs.org) (`GLTFLoader`, `OrbitControls`)
- **Typography**: [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans)
- **Icons & Assets**: Custom SVG icons, Tenor verified badge sticker, and Smol Calli 3D asset

---

## 📁 Project Structure

```text
WoobleWoobly/
├── public/
│   ├── avatar/             # 3D GLTF/GLB models & fallback assets
│   ├── icons/              # SVG & GIF badge icons (e.g. verified.gif)
│   └── favicon.svg         # Site favicon
├── src/
│   ├── assets/             # Profile pictures & bundled media
│   ├── components/
│   │   ├── avatar/         # Three.js 3D floating avatar component & physics
│   │   ├── cursor/         # Custom interactive cursor logic & styling
│   │   ├── links/          # Link cards, CTAs, newsletter & connect components
│   │   └── profile/        # Profile header, verified badge, and social bar
│   ├── data/
│   │   └── links.ts        # ⚙️ All site data & links configuration
│   ├── layouts/
│   │   └── BaseLayout.astro # Base HTML layout with SEO, OpenGraph & dot-grid
│   ├── pages/
│   │   └── index.astro     # Main landing page
│   └── styles/
│       └── global.css      # Global Tailwind styles & custom animations
├── astro.config.mjs        # Astro & Vite configuration
└── package.json            # Dependencies & scripts
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `>= 22.12.0`
- **npm**, **pnpm**, or **yarn**

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/RockHead07/WoobleWoobly.git
   cd WoobleWoobly
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start local development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:4321` in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```
   Production-ready static files will be generated in the `dist/` directory.

---

## ⚙️ Customization

Customize all content by editing `src/data/links.ts`:

```typescript
// src/data/links.ts
export const profile = {
  name: "Your Name",
  handle: "@yourhandle",
  bio: "Your bio description here...",
  location: "Your Location",
  verified: true,
};

export const socialLinks = [
  { platform: "GitHub", url: "https://github.com/yourname", icon: "github", label: "GitHub" },
  // ...
];

export const quickLinks = [
  {
    id: "portfolio",
    title: "Portfolio Website",
    description: "Explore my latest works & case studies",
    url: "https://yourdomain.com",
    badge: "Featured",
    highlight: true,
  },
  // ...
];
```

---

## 🚢 Deployment

Since this project outputs standard static files, it can be deployed to any modern static hosting platform:

### Deploying to Vercel

1. Push your repository to GitHub.
2. Import the repository into [Vercel](https://vercel.com).
3. Vercel will automatically detect **Astro** with preset build settings (`npm run build` -> `dist`).
4. Add your custom domain under **Project Settings > Domains** (e.g. `rockhead07.tech`).

### Deploying to Cloudflare Pages

1. In the [Cloudflare Dashboard](https://dash.cloudflare.com), go to **Workers & Pages** > **Create application** > **Pages**.
2. Connect your GitHub repository.
3. Set build command to `npm run build` and output directory to `dist`.
4. Connect your custom domain in the **Custom domains** tab.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

<div align="center">
  Crafted with ❤️ by <a href="https://github.com/RockHead07">Bagus Insan Pradana (@rockhead07)</a>
</div>
