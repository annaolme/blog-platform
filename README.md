# Blog Platform

A minimal blog built with Next.js 14, MDX and Tailwind CSS. Write posts in Markdown, get a fast static site.

## Features

- MDX blog posts with frontmatter
- Syntax highlighting for code blocks
- Tag system
- About page
- Clean typography with prose styles
- Static generation for fast loading
- Responsive design

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- MDX (next-mdx-remote)
- Tailwind CSS
- gray-matter for frontmatter parsing

## Adding Posts

Create a `.mdx` file in `content/posts/`:

```mdx
---
title: "My Post"
date: "2024-01-01"
description: "A description"
tags: ["tag1", "tag2"]
---

Your content here...
```

## Setup

```bash
npm install
npm run dev
```
