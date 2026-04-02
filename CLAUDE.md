# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Install all dependencies
pnpm install

# Build all packages and examples
pnpm build

# Build only packages/react and packages/vue
pnpm build:packages

# Run React example dev server
pnpm dev:react

# Run Vue example dev server
pnpm dev:vue

# Build a single package
pnpm --filter @patrick-ui/react build
pnpm --filter @patrick-ui/vue build
```

> There are no tests configured yet.

## Architecture

This is a pnpm monorepo with three packages and two examples:

- `packages/core` — CSS-only package. All styles are defined here using `@vanilla-extract/css`. No framework code.
- `packages/react` — React component library. Imports styles from `core` and wraps primitives from `@base-ui/react`.
- `packages/vue` — Vue 3 component library. Imports styles from `core`, uses native elements.
- `examples/react` and `examples/vue` — dev sandboxes, not published.

### Styling pattern (vanilla-extract)

All CSS lives in `packages/core/src/**/*.css.ts` files. Components use:
- `createThemeContract` (`theme-contract.css.ts`) — defines the CSS variable contract (`vars`)
- `createTheme` (`default.css.ts`) — implements `defaultTheme` and `darkTheme` class names
- `recipe()` — for multi-variant components (e.g. Button has `variant` and `size`)
- `style()` / `globalStyle()` — for single-purpose styles

Framework packages resolve `@patrick-ui/core` to `../core/src` via a Vite alias — they import directly from source during build, not from a compiled dist.

### Theming

`PatrickUIProvider` applies the `defaultTheme` class to a wrapper `<div>`, which activates all CSS variables defined in `theme-contract.css.ts`. To support dark mode, apply the `darkTheme` class instead.

### Adding a new component

1. Add `packages/core/src/<name>/<name>.css.ts` with vanilla-extract styles, using `vars` from `theme-contract.css.ts`.
2. Add `packages/react/src/components/<name>/<name>.tsx` importing the CSS and using a `@base-ui/react` primitive or native element. Export from `packages/react/src/index.ts`.
3. Mirror in `packages/vue/src/components/<name>/<Name>.vue` and export from `packages/vue/src/index.ts`.

### CSS class naming

Both Vite configs use `identifiers: ({ hash }) => \`patrick-ui_${hash}\`` so all generated class names are prefixed with `patrick-ui_`.
