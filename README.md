## Local Development

First, run the development server:

1. Install `pnpm` check docs: https://pnpm.io/installation

```bash
# Once pnpm is installed, install dependencies👇
pnpm i

# Once it's done start local-server
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

2. Once done with all changes run build

```bash
# Run build and check if any error exsists or not
pnpm run build
```

3. Create a `.env` file from `.env.example` file add all the API keys required

## Folder Structure

```
root
 |-app (check nextjs docs https://nextjs.org/docs/app/getting-started/project-structure)
 |-components
 |-lib
 |-blogs
 |-projects
 |-public
```

## Creating new Blog or Project

```
root
 |-blogs
 |-projects
```

1. You'll have blogs & projects folders in your root directory
2. To create a new blog create a new `mdx` file in blogs folder example👇

```
root
 |-blogs
 |  |-my-new-blog.mdx
 |-projects
```

3. Make sure the name of file should have only alpha-numeric values seperated by `- hypens` don't use special characters or spaces ex: `my-new-blog.mdx`
4. You can write blog in markdown

```mdx
---
title: "My new blog"
description: "Random description for my new blog"
tags:
  - { name: "tag", color: "green" }
imageURL: "/cover-pic.jpg"
featured: true
date: 2025-02-15
---

# Hello this is my new blog
```

5. For adding new fields to blog or project collection check `content-collections.ts` file
6. Follow same process for creating a project also

## Reference Docs

- [shadcn](https://ui.shadcn.com/)
- [tailwindcss](https://v3.tailwindcss.com/)
- [nextjs server-actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations)
