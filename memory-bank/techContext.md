# Technical Context: JAMStack Website Template

## Technology Stack

### Core Technologies
- **TypeScript**: Superset of JavaScript that adds static typing
- **React**: Library for building user interfaces with components
- **Next.js**: React framework with routing, server-side rendering, and more
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Component library built with Radix UI and Tailwind CSS

### Development Tools
- **Node.js**: JavaScript runtime for build tools and development server
- **Yarn**: Package manager for dependency management
- **ESLint**: Code linting for TypeScript/React
- **Next.js App Router**: File-based routing system

## Dependencies Overview

### Production Dependencies
- `react`: Core React library
- `react-dom`: React rendering for web
- `next`: Next.js framework
- `shadcn/ui`: UI component library (custom integrated, not an npm package)

### Development Dependencies
- `typescript`: TypeScript compiler
- `@types/react`, `@types/react-dom`, `@types/node`: Type definitions
- `tailwindcss`: Tailwind CSS framework
- `eslint`, `eslint-config-next`: Linting tools

## Technical Constraints

1. **TypeScript Requirements**:
   - Strict type checking enabled
   - All components should have proper type definitions
   - Avoid using `any` type

2. **Accessibility Standards**:
   - WCAG 2.1 AA compliance as a minimum target
   - Components should include proper ARIA attributes when needed
   - Keyboard navigation support

3. **Browser Compatibility**:
   - Support for modern browsers (Chrome, Firefox, Safari, Edge)
   - Progressive enhancement for older browsers
   - Mobile browser optimization

4. **Performance Requirements**:
   - Core Web Vitals targets:
     - Largest Contentful Paint (LCP): < 2.5s
     - First Input Delay (FID): < 100ms
     - Cumulative Layout Shift (CLS): < 0.1
   - Bundle size optimizations

## Technical Decisions

### Next.js App Router
We chose the Next.js App Router for its file-based routing and modern React features, including server components. This enables better performance and simpler code organization.

### shadcn/ui
Rather than using a pre-packaged component library, we utilize shadcn/ui which provides high-quality, accessible components that can be directly imported and customized in the project. This gives us more control over the codebase and bundle size.

### Tailwind CSS
We use Tailwind for utility-first styling to enable rapid development and consistent design. It integrates well with component-based architecture and provides an excellent responsive design system.

### TypeScript
TypeScript improves code quality and developer experience by catching errors at compile time and providing better tooling. It's especially valuable for larger projects and teams.

## Development Environment

### Setup Instructions
1. Install Node.js (LTS version recommended)
2. Clone repository
3. Run `yarn` to install dependencies
4. Use `yarn dev` to start development server
5. Access site at `http://localhost:3000`

### Build Process
- `yarn build`: Creates optimized production build
- `yarn start`: Runs production build locally

### Project Structure
See `systemPatterns.md` for detailed project structure

## Best Practices

### Code Style
- Follow React functional component patterns
- Use TypeScript interfaces for props
- Follow ESLint rules for consistent code style

### Performance
- Use Next.js Image component for optimized images
- Implement code splitting where appropriate
- Minimize dependencies

### Accessibility
- Ensure proper semantic HTML
- Use appropriate color contrast
- Test with keyboard navigation
- Include proper ARIA attributes when needed
