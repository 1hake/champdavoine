# Copilot Instructions for champdavoine

## Project Overview
This is a personal portfolio website built with:
- **Next.js 15** (React framework with App Router)
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **FontAwesome** icons
- **EmailJS** for contact forms

## Tech Stack Details
- **Runtime**: Node.js
- **Package Manager**: npm
- **Build Tool**: Next.js built-in
- **Styling**: Tailwind CSS + PostCSS
- **Type Checking**: TypeScript
- **Linting**: ESLint with next/core-web-vitals and next/typescript configs

## Project Structure
```
/app                  # Next.js App Router pages
  /projects           # Projects page
  layout.tsx          # Root layout
  page.tsx            # Home page
/components           # React components (AboutSection, Hero, ProjectsSection, etc.)
/data                 # Static data files
/public               # Static assets (images, fonts)
/node_modules         # Dependencies (excluded from git)
```

## Coding Standards

### TypeScript
- Strict mode is disabled (`"strict": false` in tsconfig.json)
- `noImplicitAny` is set to false
- Use React.FC for functional components with explicit prop types
- Define interfaces for component props
- Target ES2017

### React/Next.js
- Use `'use client'` directive for components that use client-side features (hooks, animations, browser APIs)
- Prefer functional components over class components
- Use hooks appropriately (useState, useEffect, useRef, etc.)
- Components are in PascalCase (e.g., `Hero.tsx`, `AboutSection.tsx`)

### Styling
- Use Tailwind CSS utility classes
- Follow responsive design patterns (sm:, md:, lg: breakpoints)
- Maintain consistent spacing and color schemes
- Use the existing color palette from the project

### File Organization
- Components go in `/components` directory
- Page components go in `/app` directory
- Static data goes in `/data` directory
- Use named exports for components
- Keep components focused and single-responsibility

### Naming Conventions
- Components: PascalCase (e.g., `Hero.tsx`, `ProjectsSection.tsx`)
- Files: Match component names
- Variables/Functions: camelCase
- Constants: camelCase (not SCREAMING_SNAKE_CASE)

## Development Commands

### Install dependencies
```bash
npm install
```

### Development server
```bash
npm run dev
```
Starts the development server on http://localhost:3000

### Build for production
```bash
npm run build
```

### Start production server
```bash
npm start
```

### Lint code
```bash
npm run lint
```

## Deployment
- **Docker**: Multi-stage Dockerfile for production builds
- **Docker Swarm**: Automated deployment via GitHub Actions CI/CD
- **CI/CD**: Pushes to main trigger automatic Docker build and deployment

## Important Guidelines

### When Making Changes
1. Always run `npm run lint` before committing
2. Test changes with `npm run dev` locally
3. Ensure responsive design works across breakpoints
4. Keep animations performant (use Framer Motion best practices)
5. Maintain existing code style and patterns

### Component Development
- Follow the existing component patterns (see `Hero.tsx` or `AboutSection.tsx` as examples)
- Use TypeScript interfaces for props
- Implement proper error handling
- Consider accessibility (semantic HTML, ARIA labels where needed)

### Dependencies
- Check for security vulnerabilities before adding new packages
- Prefer well-maintained, popular packages
- Keep dependencies up to date but test thoroughly

### Don't
- Don't modify TypeScript strict settings without discussion
- Don't add unnecessary dependencies
- Don't remove existing functionality without understanding impact
- Don't ignore ESLint warnings without good reason
- Don't commit node_modules or build artifacts

## Testing
Currently, there is no automated test suite. When adding features:
- Manually test in development mode
- Verify responsive behavior
- Check browser console for errors
- Test with `npm run build` before deploying

## Questions or Clarifications
If you need clarification on project architecture, design decisions, or implementation details, ask before making significant changes.
