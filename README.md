# Super Bright Engineering Company (SBECO) — Web Platform

[![React](https://img.shields.io/badge/React-19.x-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![React Router](https://img.shields.io/badge/React_Router-v7-CA4245?style=flat-square&logo=react-router&logoColor=white)](https://reactrouter.com/)
[![Netlify](https://img.shields.io/badge/Deployed_on-Netlify-00C7B7?style=flat-square&logo=netlify&logoColor=white)](https://www.netlify.com/)

Official web portal and digital product catalogue for **Super Bright Engineering Company (SBECO)** — a premier industrial supplier and authorized stockist delivering reliable solutions in strapping, nailing, stapling, packaging consumables, power tools, and facility management equipment across India.

---

## 📌 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Project Architecture & Structure](#-project-architecture--structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Local Development](#local-development)
  - [Building for Production](#building-for-production)
  - [Linting](#linting)
- [Deployment & Serverless Backend](#-deployment--serverless-backend)
- [Product Categories Covered](#-product-categories-covered)
- [Contact & Support](#-contact--support)

---

## 🏢 Overview

Founded with a commitment to quality and service excellence, **SBECO (Super Bright Engineering Company)** serves industrial manufacturing, logistics, warehousing, construction, and interior design sectors.

This modern web application offers an interactive, responsive, and performant digital catalogue allowing clients and partners to:
- Browse extensive industrial product catalogs with hierarchical navigation and deep-search filters.
- View high-resolution product imagery with interactive zoom / lightbox modals.
- Explore company history, milestone timelines, technical articles, and video demonstrations.
- Request quotations and submit inquiries through a validated contact flow backed by serverless functions.

---

## ✨ Key Features

- **⚡ Fast, Modern SPA**: Powered by React 19, Vite, and Tailwind CSS v4 for fast load times and fluid transitions.
- **📦 Multi-Level Product Catalogue**:
  - Sticky, collapsible category sidebar navigation with expandable subcategories and nested tiers.
  - Dynamic filtering by category, brand, and specifications.
  - Comprehensive individual product detail pages (`/products/:productId`) with specifications and inquiry shortcuts.
- **🔍 Image Zoom & Lightbox**: Interactive inspection of high-resolution product and equipment images.
- **🖼️ Curated Visual Gallery**: Dedicated gallery showcase (`/gallery`) automatically indexing categorized industrial images across power tools, heat guns, packaging, and tapes.
- **📖 Articles & Technical Insights**: Knowledge hub with technical guides and product selection articles (`/articles`).
- **🎥 Multimedia & Social Hub**: Video showcases and Instagram integration (`/videos`).
- **⏳ Our Journey Interactive Timeline**: Visual milestones showcasing the company’s evolution (`/about/journey`).
- **✉️ Validated Inquiry & Quotation Form**:
  - Flexible contact validation (Email OR Phone support with real-time feedback).
  - Serverless Netlify function backend (`netlify/functions/contact.js`) for reliable processing.
- **📱 Responsive & Accessible**: Optimized for all form factors (smartphones, tablets, and desktop workstations).

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| **Frontend Framework** | [React 19](https://react.dev/) |
| **Build Tooling & Bundler** | [Vite 8](https://vitejs.dev/) |
| **Routing** | [React Router v7](https://reactrouter.com/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/vite` |
| **Serverless Functions** | [Netlify Functions](https://docs.netlify.com/functions/overview/) |
| **Linting & Code Quality** | [ESLint](https://eslint.org/) |

---

## 📂 Project Architecture & Structure

```plaintext
sbeco-react/
├── netlify/
│   └── functions/
│       └── contact.js          # Netlify serverless function for contact submissions
├── public/
│   ├── images/                 # Product photos, category banners, brand assets
│   └── favicon.ico
├── src/
│   ├── components/             # Reusable UI components
│   │   ├── CategorySidebar.jsx # Collapsible multi-tier category navigation
│   │   ├── FilterPanel.jsx     # Product search and attribute filters
│   │   ├── Footer.jsx          # Site-wide footer with quick links & contact info
│   │   ├── Header.jsx          # Top navigation bar with active route highlighting
│   │   ├── Hero.jsx            # Dynamic page banner and hero section
│   │   └── Lightbox.jsx        # Image zoom modal dialog
│   ├── data/                   # Centralized application data & catalogues
│   │   ├── articles.js         # Technical articles and industry guides
│   │   ├── catalogue.js        # Category hierarchy definitions
│   │   ├── galleryImages.js    # Gallery image paths and categorization
│   │   ├── journeyTimeline.js  # Historical company milestones
│   │   └── products.js         # Master product database & attributes
│   ├── pages/                  # Route views
│   │   ├── About.jsx           # Company background, vision, and team
│   │   ├── ArticleDetail.jsx   # Individual article view
│   │   ├── Articles.jsx        # Articles index
│   │   ├── Catalog.jsx         # Main product directory & search
│   │   ├── Contact.jsx         # Inquiry and quotation form
│   │   ├── Gallery.jsx         # Product photo gallery
│   │   ├── Home.jsx            # Landing page with product carousel
│   │   ├── JourneyRange.jsx    # Era-specific journey showcase
│   │   ├── OurJourney.jsx      # Company timeline overview
│   │   ├── ProductDetail.jsx   # Detailed product specification page
│   │   └── Videos.jsx          # Video library and social showcase
│   ├── App.jsx                 # Application entry point & router configuration
│   ├── index.css               # Global styling & Tailwind directives
│   └── main.jsx                # React DOM root render
├── netlify.toml                # Netlify build & redirect configuration
├── package.json                # Project dependencies and npm scripts
├── vite.config.js              # Vite configuration
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version `18.x` or higher recommended)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)

### Installation

Clone the repository and install the project dependencies:

```bash
git clone https://github.com/Himanshu-dev-Bca/SBECO-First-.git
cd SBECO-First-/sbeco-react
npm install
```

### Local Development

Start the Vite development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

The application will be accessible at `http://localhost:5173`.

### Building for Production

Create an optimized production bundle:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

### Linting

Run ESLint to check for code issues:

```bash
npm run lint
```

---

## ☁️ Deployment & Serverless Backend

The project is preconfigured for continuous deployment via **Netlify**:

- **Build Configuration**: Defined in `netlify.toml`:
  - Build command: `npm run build`
  - Publish directory: `dist`
  - Single-Page Application (SPA) redirect rule: `/* -> /index.html 200`
- **Serverless API**:
  - The contact form communicates with `/.netlify/functions/contact` to safely process customer inquiries and quotes.

---

## 🧰 Product Categories Covered

- **Tapes & Dispensers**: Industrial adhesive tapes, high-temp masking, tape dispensers, and automatic tapers.
- **Strapping Solutions**: Manual, pneumatic, and battery-powered strapping equipment, PET/PP straps, and seals.
- **Power Tools**: Heavy-duty industrial equipment and tools for precision assembly and construction.
- **Packaging Consumables**: Stretch films, bubble wraps, edge protectors, foam rolls, and void fills.
- **Nailing & Stapling**: Pneumatic nailers, staplers, and industrial fasteners for timber, packaging, and framing.
- **Facility Management & Safety**: PVC strip curtains, safety gear, and industrial maintenance supplies.
- **Heat Guns**: Professional hot-air welding equipment and tools.

---

## 📞 Contact & Support

- **Company**: Super Bright Engineering Company (SBECO)
- **Email**: [sales@sbeco.in](mailto:sales@sbeco.in)
- **Phone**: +91 88847 46746
- **Social Media**: [Instagram](https://www.instagram.com/superbrightlabs/) · [YouTube](https://www.youtube.com/@superbrightlabs)
