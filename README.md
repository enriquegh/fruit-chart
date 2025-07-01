# Bay Area Seasonal Produce

A mobile-friendly Progressive Web App (PWA) that helps users track seasonal fruits and vegetables in the San Francisco Bay Area, California.

## Features

- View currently in-season produce for any month
- Browse by season (Winter, Spring, Summer, Fall)
- Calendar view to see availability throughout the year
- Mobile-friendly responsive design
- Works offline as a Progressive Web App (PWA)

## Technology Stack

- React - UI library
- Vite - Build tool and development server
- vite-plugin-pwa - PWA capabilities
- CSS custom properties for theming

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone [repository-url]
cd fruit-chart

# Install dependencies
npm install

# Start development server
npm run dev
```

### Building for Production

```bash
npm run build
```

The built application will be in the `dist` folder. You can serve it using any static file server.

## PWA Features

This app can be installed on mobile devices and desktops as a Progressive Web App. It works offline by caching resources and data.

## Data Source

The seasonal produce data is sourced from [Foodwise.org](https://foodwise.org/eat-seasonally/seasonality-charts/) and adapted specifically for the San Francisco Bay Area climate.

## License

MIT

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
Hello World
