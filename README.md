# dfinamore.mat.br

Personal academic website of Douglas Finamore.

Built with [Jekyll](https://jekyllrb.com/) and published by GitHub Pages from the `master`
branch, under the custom domain in `CNAME`.

## Which file do I edit?

Everything that is written for a reader lives in **`pages/`**. The rest of the repository is
machinery and rarely needs to be touched.

| To change | Edit |
|---|---|
| The text of a page | `pages/index.html`, `pages/publications.html`, `pages/profAct.html`, `pages/about.html`, `pages/404.html` |
| The sidebar: links, photo, footer | `_includes/sidebar.html` |
| The `<head>`, meta tags, scripts — anything shared by every page | `_layouts/default.html` |
| Structured data (JSON-LD) for search engines | `_includes/schema.html` |
| Colours, fonts, layout | `css/layout.css` |
| Menu toggle, e-mail de-obfuscation | `js/script.js` |
| Site title, URL, plugins, excluded files | `_config.yml` |
| CV, paper PDFs, images, fonts | `assets/` |

**Never edit anything inside `_site/`** — it is generated output, not source. See
[Local preview](#local-preview).

## How a page is built

A page contains only its own content, preceded by a front matter block:

```yaml
---
layout: default
permalink: /publications.html
nav: publications
schema: publications
math: true
title: "Publications | Douglas Finamore"
description: "Academic publications by Douglas Finamore..."
---
```

At build time Jekyll wraps that content in `_layouts/default.html`, which pulls in
`_includes/sidebar.html` and `_includes/schema.html`, and writes the finished page to `_site/`:

```
pages/publications.html  (front matter + content)
        │
        ▼
_layouts/default.html          ← <!DOCTYPE>, <head>, <body>, sidebar, scripts
        ├── {% include schema.html %}    ← JSON-LD selected by page.schema
        ├── {% include sidebar.html %}   ← nav, with is-current from page.nav
        └── {{ content }}                ← the page itself
        │
        ▼
_site/publications.html        ← what the visitor receives
```

The front matter is what connects a page to the layout. A page **without** it is treated as a
plain static file and copied verbatim — no `<head>`, no sidebar, no stylesheet.

`permalink` is what fixes the page's address, which is why the pages can sit in a folder
without changing any URL: `pages/publications.html` is served at `/publications.html`, and
`pages/index.html` (`permalink: /`) is the homepage. Renaming the folder changes nothing;
changing or dropping a `permalink` changes the page's address and breaks links pointing to it.

Front matter keys understood by the layout:

| Key | Effect |
|---|---|
| `layout` | always `default` |
| `permalink` | the page's URL |
| `title` | `<title>` and `og:title` |
| `description` | `<meta name="description">` and `og:description` |
| `nav` | which sidebar icon is highlighted (`home`, `publications`, `profact`, `about`) |
| `schema` | which JSON-LD block is included (`person`, `publications`, `profact`) |
| `og_type` | `og:type` (defaults to `website`; the homepage uses `profile`) |
| `math` | load MathJax 3 when `true` |
| `sitemap` | `false` keeps the page out of the generated `sitemap.xml` |

## Local preview

```bash
bundle install              # once
bundle exec jekyll serve    # then open http://localhost:4000
```

Jekyll assembles every page and writes the result to `_site/`, rebuilding on each save.

`_site/` is build output: it is listed in `.gitignore`, it is never pushed, and it can be
deleted at any time. Editing a file in there changes nothing on the live site and is thrown
away by the next build.

## Publishing

Commit to `master` and push. GitHub Pages runs Jekyll on its own servers and serves the
result; a build takes about a minute. The `_site/` on your machine plays no part in it.

## Structure

```
pages/               the five pages — the only files with prose in them
_config.yml          site settings
_includes/           sidebar.html, schema.html
_layouts/            default.html — the frame shared by every page
assets/              files/ (CV, paper PDFs), fonts/, images/
css/layout.css       the only stylesheet
js/script.js         menu toggle, e-mail de-obfuscation
CNAME, robots.txt    domain and crawler settings
_site/               build output — ignored by git, never edit
```
