# EdgeOne Pages React Router Starter

A comprehensive React Router v7 starter template for EdgeOne Pages, showcasing various rendering modes and full-stack capabilities.

## 🚀 Features

- **Server-Side Rendering (SSR)** - Real-time server-side rendering
- **Client-Side Rendering (CSR)** - Dynamic rendering in the browser
- **Static Site Generation (SSG)** - Static generation at build time
- **Node Functions** - Node.js runtime server functions
- **Edge Functions** - Edge runtime functions
- **Client-Side Routing** - Fast client-side routing

## 🛠️ Tech Stack

- **React Router v7** - Full-stack React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling framework
- **Lucide React** - Icon library
- **Vite** - Build tool

## 📦 Installation

```bash
# Clone the project
git clone <repository-url>
cd react-router-v7-demo

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🎯 Pages Overview

### Home (/)
Displays project overview and entry points to various feature modules.

### SSR (/ssr)
Demonstrates server-side rendering:
- Re-renders on the server for each request
- Real-time data fetching
- SEO friendly
- Suitable for dynamic content

### CSR (/csr)
Demonstrates client-side rendering:
- All rendering happens in the browser
- Data fetching after JavaScript loads
- Rich interactive experiences
- Reduced server load
- Suitable for interactive applications

### Pre-render (/prerender)
Demonstrates static site generation:
- Pre-generates pages at build time
- Fastest loading speed
- CDN friendly
- Suitable for static content

### Node Functions (/node-functions)
Demonstrates Node.js server functions:
- Full Node.js runtime
- Complex backend logic
- Database operations
- API integrations

### Edge Functions (/edge-functions)
Demonstrates edge functions:
- Lightweight edge runtime
- Global edge deployment
- Ultra-low latency response
- Geolocation services

### Client-Side Routing (/client-routing)
Demonstrates client-side routing:
- Navigation without page refresh
- State persistence
- Smooth user experience
- Preloading optimization

## 🔧 Development Commands

```bash
# Development mode
npm run dev

# Build project
npm run build

# Start production server
npm run start

# Type checking
npm run typecheck
```

## 📁 Project Structure

```
app/
├── components/          # Components
│   ├── ui/             # UI components
│   ├── layout/         # Layout components
│   ├── Header.tsx      # Header navigation
│   ├── Hero.tsx        # Home hero section
│   ├── Features.tsx    # Features showcase
│   └── FeatureCard.tsx # Feature card
├── lib/                # Utility functions
│   └── utils.ts        # Common utilities
├── routes/             # Route pages
│   ├── home.tsx        # Home page
│   ├── ssr.tsx         # SSR demo
│   ├── csr.tsx         # CSR demo
│   ├── prerender.tsx   # Pre-render demo
│   ├── streaming.tsx   # Streaming SSR demo
│   ├── node-functions.tsx    # Node functions demo
│   └── edge-functions.tsx    # Edge functions demo
├── app.css             # Global styles
├── root.tsx            # Root component
└── routes.ts           # Route configuration
```

## 🌟 Comparison with Next.js

This project replicates the functionality of Next.js hybrid rendering template, but implemented with React Router v7:

### Similarities
- Supports SSR and SSG
- Server function support
- Modern development experience
- TypeScript support

### Differences
- **Routing System**: React Router v7 uses file-system routing + configuration file
- **API Routes**: Implemented through loader/action functions
- **Build Tool**: Based on Vite instead of Webpack
- **Deployment**: More flexible deployment options

### React Router v7 Advantages
- Cleaner API design
- Better TypeScript support
- Faster development server (Vite)
- More flexible deployment options
- Better error handling

## 📚 Learning Resources

- [React Router v7 Official Documentation](https://reactrouter.com/start/framework)
- [React Router v7 GitHub](https://github.com/remix-run/react-router)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)

## 🤝 Contributing

Issues and Pull Requests are welcome!

## 📄 License

MIT License