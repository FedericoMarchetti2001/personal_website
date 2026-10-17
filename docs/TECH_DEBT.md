# Tech debt

## Inventory
| # | Item | Severity | Effort |
|---|------|----------|--------|
| 1 | `npm ci` fails on peer deps and `tsc` rejects deprecated `baseUrl` on main (health PR) | high | S |
| 2 | Unused deps: `react-hook-form`, `@hookform/resolvers`, `@mdx-js/react`, `baseline-browser-mapping` (no imports; removal deferred to avoid clashing with the open health PR on package.json) | med | S |
| 3 | `any` in `src/theme/index.ts` style-function props and `as any` transitions in `Hero.tsx` / `Navbar.tsx` | low | M |
| 4 | Contact API route is a TODO stub (`src/app/api/contact/route.ts`) | med | M |

## Log
- 2026-10-13: typed the wave shader material ref in `Scene.tsx` (removed `any`) and dropped its duplicate JSX intrinsic declaration (already in `src/types/r3f-declarations.d.ts`).
