# martinjakovoski.dev

My personal portfolio and blog — a fast, responsive site with light/dark mode, built with Next.js and the App Router.

🔗 **Live:** [martinjakovoski.dev](https://martinjakovoski.dev)

## Features

- **Responsive design** with a light/dark theme toggle that remembers your choice (no flash on load)
- **Projects** — a list that links through to per-project detail pages with banners, live/GitHub links, and the tech stack behind each one
- **Blog** — Markdown-powered posts; add a post by dropping a `.md` file in `content/blog/`
- **Contact** — click-to-reveal email (keeps the address away from spam scrapers)
- **Custom touches** — a canvas pixel-shimmer effect on hover, scroll-reveal animations, a retro chrome logo, and an interactive photo gallery in the hero

## Tech stack

- **[Next.js](https://nextjs.org/)** (App Router) + **[React](https://react.dev/)**
- **[TypeScript](https://www.typescriptlang.org/)**
- **[Tailwind CSS](https://tailwindcss.com/)** v4
- **[react-markdown](https://github.com/remarkjs/react-markdown)** for blog rendering
- **[react-icons](https://react-icons.github.io/react-icons/)** for tech and brand logos
- Deployed on **[Vercel](https://vercel.com/)**

## Getting started

```bash
# install dependencies
npm install

# run the dev server
npm run dev

# build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Project structure

```
app/                  Routes (home, projects, blog, contact) + layout
components/           Reusable UI (theme toggle, pixel text, photo gallery, ...)
lib/                  Data + helpers (projects list, blog file reader)
content/blog/         Blog posts as Markdown files
public/               Images and static assets
```

## Adding content

**A blog post** — create a Markdown file in `content/blog/`:

```markdown
---
title: "My post title"
date: "2026-01-01"
description: "A short summary for the blog list."
---

Your content here, in **Markdown**.
```

The filename becomes the URL (`my-post.md` → `/blog/my-post`), and posts sort newest-first.

**A project** — add an entry to the `projects` array in `lib/projects.ts` (title, description, tech, links, and an optional banner image in `public/projects/`).

## Contact

Martin Jakovoski — Skopje, Macedonia

- [LinkedIn](https://www.linkedin.com/in/martin-jakovoski-00a246300/)
- [GitHub](https://github.com/macemacemace)
