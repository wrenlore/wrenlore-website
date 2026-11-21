# WrenLore website

The public website for [WrenLore](https://wrenlore.com), the self-hosted knowledge base for humans and AI agents.

The site is built with Astro and rendered to static HTML. Tailwind CSS and selected [coss ui](https://coss.com/ui) sources provide the design foundation. Production does not require a JavaScript application server.

## Local development

Requires Node.js 24 and pnpm.

```bash
pnpm install
pnpm dev
```

The local server listens on `http://localhost:4321`.

## Verification

```bash
pnpm astro check
pnpm build
pnpm preview
```

The production artifact is written to `dist/`. It includes the generated sitemap, robots policy, static SEO pages and social preview asset.

## Project structure

```text
public/                 Static assets and robots.txt
src/components/         Site and coss UI components
src/data/seo-pages.ts   Search-intent page content
src/layouts/            Shared metadata and schema layout
src/pages/              Homepage, security page and generated routes
src/styles/             Design tokens and responsive site styles
```

## Deployment

Production is a static Apache site. Deploy the contents of `dist/`, not the source tree. Keep a backup of the previous document root and verify the canonical URL, sitemap, robots file and all generated routes after deployment.

## Licence

Website code is released under the MIT licence. WrenLore itself is licensed separately under AGPL-3.0 in the [main repository](https://github.com/wrenlore/wrenlore).
