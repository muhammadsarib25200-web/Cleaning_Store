<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Repository agent guidance

This repo is a Next.js cleaning services website with a top header, a home hero section, and service dropdown categories.

When the user asks for code suggestions, the agent should respond with repository-aware code changes using these files:
- `components/Header/header.js` for header and navigation menu behavior.
- `components/Header/header.css` for header dropdown, mobile hamburger, and responsive styling.
- `components/Home/home.css` for the hero layout and image styling.
- `src/app/store/serviceSlice.js` and `src/app/store/store.js` for service state modeling.

Prefer clear, production-friendly UI code with functional React components, CSS classes, and simple Redux slice patterns.

When adding services, use the labels exactly:
- `House Cleaning (Residential)`
- `Business Cleaning (Commercial)`

When the user edits code in this repo, provide code suggestions based on the existing stylesheet and component structure rather than replacing the whole design.
