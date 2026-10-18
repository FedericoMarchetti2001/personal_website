# Structure Roadmap — personal_website

Audit against [ENGINEERING_STANDARDS.md](ENGINEERING_STANDARDS.md). Weekly routine implements the next 1-3 unchecked steps in small, behavior-preserving PRs.

**Divergence score = number of open items.**

| Week of | Score | Note |
|---------|-------|------|
| 2026-10-18 | 14 | Baseline audit; 3 items closed in this PR (17 → 14) |

Framework-forced divergences: Next.js `src/app`, `next.config.js`, `contentlayer.config.ts`. Contentlayer replacement belongs to the `claude/migration/` routine.

## Checklist (cheapest / highest value first)

- [x] 1. Add `.editorconfig`
- [x] 2. Add `.nvmrc` (Node 22)
- [x] 3. Add shared `.prettierrc.json`
- [ ] 4. Add `.env.example`; make `.gitignore` ignore `.env*` except example
- [ ] 5. Add `.github/workflows/ci.yml` (npm ci, lint, typecheck, test, build)
- [ ] 6. Unify scripts: add `typecheck` (keep `type-check` as alias until removed), `lint:fix`, `format`, `test`, `test:watch` (add test runner)
- [ ] 7. Align `engines.node` with `.nvmrc`
- [ ] 8. Move `src/aicontext/*` → `docs/ai-context/`; move `DEPLOYMENT.md` there too; update references
- [ ] 9. Add `docs/adr/0001-adopt-engineering-standards.md`
- [ ] 10. Rename `eslint.config.mjs` → `eslint.config.js` (or set `"type": "module"`), add `import/no-cycle`
- [ ] 11. Decide on `archived-blog/` and `archived-project/` (delete or move under `docs/archive/`)
- [ ] 12. Convert `next.config.js` / `postcss.config.js` to `.mjs`/TS where the tool allows; document exceptions
- [ ] 13. Enable/verify `strict: true` in `tsconfig.json`; fix fallout
- [ ] 14. Typed Zod config module `src/config/env.ts`
- [ ] 15. Reorganize `src/components`, `src/hooks`, `src/lib`, `src/data` into `src/features/<feature>` + `src/shared/*`, one feature per PR (`src/app` stays)
- [ ] 16. Rename non-component files to kebab-case, one component per file
- [ ] 17. Colocate tests as `*.test.tsx` once a runner exists
