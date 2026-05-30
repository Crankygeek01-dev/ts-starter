# ts-starter

[![CI](https://github.com/Crankygeek01-dev/ts-starter/actions/workflows/ci.yml/badge.svg)](https://github.com/Crankygeek01-dev/ts-starter/actions/workflows/ci.yml)

A minimal, modern TypeScript starter: ESM, Node 24, `tsx` for dev, `vitest` for tests,
ESLint 9 (flat config) + Prettier.

## Requirements

- Node ≥ 22 (this repo pins **24** via `.node-version`; `fnm` switches automatically on `cd`)
- [pnpm](https://pnpm.io) (via corepack: `corepack enable`)

## Setup

```bash
pnpm install
```

## Scripts

| Command           | What it does                                  |
| ----------------- | --------------------------------------------- |
| `pnpm dev`        | Run `src/index.ts` with watch (via `tsx`)     |
| `pnpm start`      | Run `src/index.ts` once                       |
| `pnpm build`      | Type-check + emit JS to `dist/` (via `tsc`)   |
| `pnpm typecheck`  | Type-check only, no output                    |
| `pnpm test`       | Run tests once (`vitest run`)                 |
| `pnpm test:watch` | Run tests in watch mode                       |
| `pnpm lint`       | Lint with ESLint                              |
| `pnpm format`     | Format with Prettier                          |

## Layout

```
src/
  index.ts       # entry point
  math.ts        # example module
  math.test.ts   # example test
```

> Note: this is ESM with `"moduleResolution": "NodeNext"`, so relative imports use the
> `.js` extension even in `.ts` files (e.g. `import { add } from './math.js'`).
