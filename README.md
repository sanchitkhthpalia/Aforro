# Aforro Frontend Assignment - Sales Dashboard

> **Live Demo:** [Insert Vercel Link Here]

## Overview
This is a responsive, light-themed sales dashboard built to match a provided Figma design. It features modular chart widgets and a fully functional data table that pulls user records from a public API.

## Tech Stack
- **React** 
- **Vite** 
- **Tailwind CSS**
- **Recharts** (for data visualization)
- **Lucide-React** (for icons)

## Features Implemented
- **UI/Layout:** A pixel-perfect CSS grid layout matching the Figma spec. It's fully responsive, complete with a slide-out mobile drawer for the sidebar.
- **Interactive Navigation:** The sidebar simulates client-side routing with active tab highlighting.
- **Data Visualization:** Built modular Recharts components (including multi-line, area, and stacked bar charts) that closely mirror the original mockups.
- **Vector Map:** Used `react-simple-maps` with TopoJSON to render an interactive, lightweight SVG map representing specific geographic sales regions without bloated dependencies.
- **Data Table:** A fully functional, filterable table pulling live data from JSONPlaceholder.
- **Global Event Bus:** Used custom DOM events to allow decoupled components (like the Header clear button and the UsersTable) to communicate cleanly without heavy Context wrappers.
- **UX Upgrades (Bonus):** Built out a 300ms debounced search to prevent render lag, animated skeleton loaders for the API fetching state, smooth client-side pagination, and a working "Export to CSV" function. Added crisp `sonner` toasts for user actions to give the dashboard a snappier feel.

## Assumptions & Technical Decisions
- **Recharts:** I chose Recharts because it plays nicely with React functional components. It allowed me to closely match the specific multi-line and dual-shaded area charts from the Figma file without adding massive overhead.
- **Custom Data Fetching:** Instead of adding a heavy dependency like TanStack Query for a single endpoint, I wrote a custom `useUsers` hook using native `fetch`. It handles the loading, error, and data states natively, keeping the bundle size small and the architecture simple.
- **Performance:** I implemented debouncing on the search input so the table doesn't re-render on every single keystroke. I also added skeleton loading states to avoid jarring layout shifts when the API finally resolves.

## Project Setup Steps

```bash
git clone <repo-url>
npm install
npm run dev
```
