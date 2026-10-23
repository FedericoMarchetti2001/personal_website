# ADR 0001: Replace Contentlayer with content-collections

- Status: accepted (2026-10-23)
- Context: Contentlayer / next-contentlayer are unmaintained. They pin `next@^12 || ^13` peers, so installs need
  `legacy-peer-deps` on Next 16, and `scripts/contentlayer-build.mjs` exists only to work around a Node 22 crash.
- Options: **Velite** vs **content-collections** (both maintained, both support MDX, Zod schemas, Next 16).
- Decision: **content-collections** (`@content-collections/core`, `/next`, `/mdx`).
- Why:
  - Its API mirrors Contentlayer (`allBlogs`/`allProjects` generated export, `transform` for computed fields),
    so call sites change by import path only; this keeps routes, URLs and types identical with the smallest diff.
  - First-class Next plugin (`withContentCollections`) removes the custom build script.
  - Frontmatter validation uses Zod, already a dependency (zod 4).
- Consequences / constraints for the migration:
  - The `Blog`/`Project` types must keep fields `title, description, date, tags, url, slug` and
    `title, summary, year, tags, technologies, coverImage, github?, link?, url, slug`; `url` stays `/blog/<slug>`, `/projects/<slug>`.
  - MDX is compiled to code and rendered with a client `MDXContent`; the `development: false` workaround must be kept.
  - rehype-slug, rehype-code-titles, rehype-prism-plus, remark-gfm stay unchanged.
  - Migration is incremental: new library added next to Contentlayer, parity-tested, switched, then Contentlayer removed.
- Rollback: revert the switching PR; Contentlayer stays installed until the final cleanup step.
