# Migration track: Contentlayer -> content-collections

Status: **in progress** (1/8 steps) | Last updated: 2026-10-23 | Decision: [ADR 0001](../adr/0001-content-collections-over-contentlayer.md)

## Goal
Replace unmaintained Contentlayer with content-collections while keeping all content, routes, URLs and types identical.

## Baseline (2026-10-23, `main`)
- `npm ci` OK, `npm run build` OK (Contentlayer via `scripts/contentlayer-build.mjs`). `npm run type-check` fails on a clean
  checkout until the build script has generated `.contentlayer/` (expected; generated dir is gitignored).
- Contentlayer touch points: `contentlayer.config.ts`, `scripts/contentlayer-build.mjs`, `next.config.js`, `tsconfig.json` (paths/include),
  `src/lib/contentlayer.ts`, `src/lib/mdx.ts` (`useMDXComponent`), `src/hooks/useBlogContent.ts`, `src/app/sitemap.ts`,
  `src/app/blog/[slug]/{page,BlogPostClient}.tsx`, `src/app/projects/{ProjectsPageClient.tsx,[slug]/{page,ProjectPageClient}.tsx}`,
  `eslint.config.mjs` (ignore), `package.json`, `.gitignore`.
- Content: `src/content/{blog,projects}`; currently 2 projects (`biblion.mdx`, `jgoth-validator.mdx`), see `src/content/blog`.
- Open PRs: #1 (package.json, eslint.config.mjs, .npmrc, AI_CONTEXT.md), #2 (Scene.tsx), #3 (docs/config). Steps touching
  `package.json`/`eslint.config.mjs`/`src/aicontext/AI_CONTEXT.md` wait for #1 to merge.

## Checklist
- [x] 1. Choose library, write ADR, create this plan (docs only).
- [ ] 2. Capture a parity snapshot: script that dumps current `allBlogs`/`allProjects` (url, slug, fields, sorted order) to JSON for later diffing. Fixture only, no app change.
- [ ] 3. Add content-collections deps and `content-collections.ts` replicating both collections + MDX plugins (not yet imported by the app). Needs #1 merged.
- [ ] 4. Add a parity test/script comparing the new collections with the snapshot (fields, url, slug, ordering, MDX compiles).
- [ ] 5. Switch `src/lib/contentlayer.ts` -> `src/lib/content.ts` and the 6 consumer files to the new generated module; swap `useMDXComponent` for `MDXContent`; wrap `next.config.js` with `withContentCollections`.
- [ ] 6. Compare built output (route list, sitemap.xml, rendered HTML of blog/project pages) against `main` build.
- [ ] 7. Remove Contentlayer (deps, config, script, `.npmrc` legacy-peer-deps if no longer needed, tsconfig paths, .gitignore, eslint ignore).
- [ ] 8. Update docs (`src/aicontext/AI_CONTEXT.md`, README, scripts `dev/build/refresh`).

## Verification gate per step
`npm ci`, `npm run lint`, `npm run type-check`, `npm run build` (set `CI=true`), diff of `.next` route list and `sitemap.xml` vs `main`.

## Manual checks for a human
Open `/blog`, a blog post, `/projects`, each project page: code blocks (prism + titles), heading anchors, tables (GFM), images, dates, tag filters.

## Notes for next run
- Check whether PR #1 merged (then rebase and continue with step 2/3).
