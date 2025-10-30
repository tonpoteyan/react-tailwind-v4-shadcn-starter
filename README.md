# React + Tailwind CSS v4 + shadcn/ui Boilerplate

A modern, production-ready boilerplate for building React applications with TypeScript, Tailwind CSS v4, and shadcn/ui components. This starter template provides everything you need to kickstart your next project with best practices and modern tooling.

## Features

- **React 19** - Latest version of React with improved performance and developer experience
- **TypeScript** - Full type safety and enhanced developer experience
- **Vite 7** - Lightning-fast build tool and development server
- **Tailwind CSS v4** - Latest version with the new Vite plugin for optimal performance
- **shadcn/ui** - Beautiful, accessible component library built on Radix UI
- **ESLint** - Code linting with React and TypeScript support
- **Path Aliases** - Configured `@/` alias for cleaner imports
- **Pre-configured Components** - Button and Card components ready to use

## Tech Stack

- **React** ^19.1.1
- **TypeScript** ~5.9.3
- **Vite** ^7.1.7
- **Tailwind CSS** ^4.1.16
- **shadcn/ui** - Component library
- **Radix UI** - Unstyled, accessible component primitives
- **Lucide React** - Icon library
- **class-variance-authority** - For component variants
- **tailwind-merge** - Utility for merging Tailwind classes
- **clsx** - Utility for constructing className strings conditionally

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** 18.0 or higher
- **npm** 9.0 or higher (or yarn/pnpm)

## Getting Started

### Installation

1. Clone this repository or use it as a template:

```bash
git clone <your-repo-url>
cd react-tailwind-shadcn
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

The application will automatically reload when you make changes to the code.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check for code issues

## Project Structure

```
react-tailwind-shadcn/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images and other assets
│   ├── components/
│   │   └── ui/         # shadcn/ui components (Button, Card, etc.)
│   ├── lib/
│   │   └── utils.ts    # Utility functions (cn helper)
│   ├── App.tsx         # Main application component
│   ├── main.tsx        # Application entry point
│   └── index.css       # Global styles and Tailwind imports
├── components.json     # shadcn/ui configuration
├── tsconfig.json       # TypeScript configuration
├── vite.config.ts      # Vite configuration
└── package.json        # Project dependencies
```

## Adding shadcn/ui Components

This boilerplate comes with shadcn/ui pre-configured. To add more components:

```bash
npx shadcn@latest add [component-name]
```

Examples:

```bash
npx shadcn@latest add input
npx shadcn@latest add dropdown-menu
npx shadcn@latest add dialog
npx shadcn@latest add form
```

Browse all available components at [shadcn/ui](https://ui.shadcn.com/docs/components).

## Configuration

### Tailwind CSS v4

Tailwind CSS v4 is configured using the new Vite plugin. The configuration is in:

- `vite.config.ts` - Tailwind plugin is added
- `src/index.css` - Contains `@import "tailwindcss";`

### Path Aliases

The project uses path aliases for cleaner imports. Configured in:

- `tsconfig.json` - TypeScript path mapping
- `tsconfig.app.json` - Application-specific paths
- `vite.config.ts` - Vite resolve aliases

Usage:

```typescript
// Instead of
import { Button } from '../../components/ui/button'

// Use
import { Button } from '@/components/ui/button'
```

### shadcn/ui Configuration

shadcn/ui settings are in `components.json`. Default configuration:

- **Style**: New York
- **Base Color**: Neutral
- **CSS Variables**: Enabled
- **Icon Library**: Lucide React

## Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment.

To preview the production build:

```bash
npm run preview
```

## Customization

### Changing Theme Colors

Edit the CSS variables in `src/index.css` to customize your color scheme. shadcn/ui uses CSS variables for theming, making it easy to customize.

### Adding Additional Dependencies

Install packages as needed:

```bash
npm install [package-name]
```

### Code Quality

This project includes ESLint for code quality. Run the linter:

```bash
npm run lint
```

## Learn More

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vite.dev)
- [Tailwind CSS v4 Documentation](https://tailwindcss.com)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [TypeScript Documentation](https://www.typescriptlang.org)

## License

This project is open source and available under the MIT License.

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## Support

If you encounter any problems or have questions, please open an issue on the GitHub repository.
