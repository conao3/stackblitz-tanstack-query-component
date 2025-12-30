# stackblitz-tanstack-query-component

A proof-of-concept repository exploring component architecture patterns with React, TanStack Query, and GraphQL.

## Overview

This project investigates how to build truly reusable components that can independently manage their own data requirements while maintaining GraphQL's efficiency benefits.

### The Challenge

Building reusable components often means allowing each component to fetch only the data it needs. However, this approach conflicts with GraphQL's fundamental principle of batching queries to minimize network requests. This project explores ways to reconcile these two patterns.

### The Approach

The solution involves passing carefully scoped data subsets as props from parent components to children, where child components serve as controlled components. The implementation demonstrates practical patterns for achieving this architecture.

## Tech Stack

- React 19
- TanStack Query
- GraphQL with graphql-request
- TypeScript
- Vite

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Generate GraphQL types
npm run graphql:codegen
```

## Status

This project is a work in progress. The patterns described above represent the target architecture, but the implementation is still evolving. An alternative approach using normalized caching with urql is also under consideration.

## License

MIT
