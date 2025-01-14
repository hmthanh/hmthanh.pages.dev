---
layout: blog
postTitle: "Docs Theme"
focusKeyphrase: "Docs Theme"
datePublished: "2021-04-07T16:04:42.000+0100"
lastUpdated: "2021-04-14T10:17:52.000+0100"
seoMetaDescription: "Docs Theme is probably a question at the front of your mind right now! Let's take a look."
featuredImage: "best-medium-format-camera-for-starting-out.jpg"
featuredImageAlt: "Photograph of a Hasselblad medium format camera with the focusing screen exposed"
ogImage: "best-medium-format-camera-for-starting-out-open-graph.jpg"
ogSquareImage: "best-medium-format-camera-for-starting-out-open-graph-square.jpg"
twitterImage: "best-medium-format-camera-for-starting-out-twitter.jpg"
categories: ""
tags: ""
---

<script>
  import Canvas from "$lib/components/Canvas.svelte"
</script>

# Docs Theme

Nextra Docs Theme is a theme that includes almost everything you need to build a
modern documentation website. It includes a top navigation bar, a search bar, a
pages sidebar, a TOC sidebar, and other built-in components.

This website itself is built with the Nextra Docs Theme.

## Quick Start from Template

### Deploy to Vercel

You can start by creating your own Nextra site and deploying to Vercel by clicking the link:

Vercel will fork the and deploy the site for you. Once done, every commit in the repository will be
deployed automatically.

### Fork the Template

You can also manually fork the
[template repository](https://github.com/shuding/nextra-docs-template).

## Start as New Project

To create a Nextra Docs site manually, you have to install **Next.js**,
**React**, **Nextra**, and **Nextra Docs Theme**. In your project directory, run
the following command to install the dependencies:

```sh npm2yarn
npm i next react react-dom nextra nextra-theme-docs
```

Add the following scripts in `package.json`:

```json filename="package.json"
"scripts": {
  "dev": "next",
  "build": "next build",
  "start": "next start"
},
```

You can either start the server with, for example if you use npm, `npm run dev`,
which will run in development mode or `npm run build && npm run start` for
production mode.
