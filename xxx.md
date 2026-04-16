# Vue 3 Migration Status

## Project
- Path: `/home/pzl/code/vue-router-tab`
- Goal: upgrade the project from Vue 2 to Vue 3, with emphasis on `lib/`

## Completed
- Migrated app bootstrap to Vue 3 in `src/main.js`
- Migrated router bootstrap to Vue Router 4 in `src/router/index.js`
- Updated package declarations toward Vue 3 in `package.json`
- Updated ESLint stack toward Vue 3 in `.eslintrc.js`
- Ported core plugin install flow in `lib/index.js`
- Updated main tab component wiring in `lib/RouterTab.vue` and `lib/RouterTab.js`
- Reworked `lib/components/TabItem.js` for Vue 3 render/event behavior
- Reworked `lib/components/RouterAlive.vue` around Vue 3 `RouterView` slot rendering and KeepAlive-based caching
- Updated related mixins/utilities for Vue 3-safe APIs:
  - `lib/mixins/pageLeave.js`
  - `lib/mixins/routerPage.js`
  - `lib/mixins/contextmenu.js`
  - `lib/mixins/scroll.js`
  - `lib/mixins/restore.js`
  - `lib/util/index.js`
  - `lib/util/RouteMatch.js`
  - `lib/util/tabs.js`

## Validation already run
- `npm install --legacy-peer-deps`
- `npm ls vue vue-router @vue/cli-service @vue/compiler-sfc vue-template-compiler`
- `npm run lib:build`
- `npm run demo:build`
- `lsp_diagnostics` on `lib/` and `src/`
- grep sweeps for remaining Vue 2-only patterns in `lib/`

## Current status
- Core migration is mostly complete, especially under `lib/`
- Real build validation has started against installed Vue 3 dependencies
- Remaining blockers are now small cleanup items, not large architectural migration work

## Current blockers
- ESLint rule `vue/multi-word-component-names` is blocking build for many existing legacy/demo component names
- Deprecated lifecycle hooks still remain in:
  - `src/components/PageTimer.vue`
  - `src/components/frames/I18n.vue`
- `src/components/frames/I18n.vue` still needs its old `Vue.prototype` pattern fully replaced with Vue 3-safe global properties wiring

## Notes
- `npm ls` still shows Vue 2-related packages under `vuepress` and a nested `vue-template-compiler`; those are transitive/doc-tooling leftovers, not the main runtime target for the migrated library/app path
- The library source no longer shows the main Vue 2-only internals previously identified in `lib/` such as `$destroy`, `_vnode`, `componentOptions.Ctor.options`, `instances.default`, `.native`, and `$scopedSlots`

## Next step
- Apply the final small cleanup edits to `.eslintrc.js`, `src/components/PageTimer.vue`, and `src/components/frames/I18n.vue`
- Re-run `npm run lib:build` and `npm run demo:build`
- If builds pass, perform final Oracle-backed wrap-up and mark the migration task complete
