import { defineNuxtConfig } from 'nuxt/config';

// nxViteTsPaths resolves Nx monorepo path aliases at dev time.
// It must NOT run in production/Docker – it initialises the full Nx project
// graph which requires all workspace files that are not present in Docker.
const isProduction = process.env.NODE_ENV === 'production';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  workspaceDir: '../../',
  devtools: { enabled: false },
  devServer: {
    host: 'localhost',
    port: 4200,
  },
  typescript: {
    // typeCheck uses vite-plugin-checker's bundled TypeScript (typescript-vue-tsc)
    // which does not ship dom lib files, causing "lib.dom.d.ts not found" errors.
    // Run type checking separately with: nx run @org/nuxt:typecheck
    typeCheck: false,
  },
  imports: {
    autoImport: true,
  },
  css: ['~/assets/css/styles.scss'],
  vite: {
    plugins: isProduction
      ? []
      : [
          // eslint-disable-next-line @typescript-eslint/no-require-imports
          require('@nx/vite/plugins/nx-tsconfig-paths.plugin').nxViteTsPaths(),
        ],
    // Sourcemap generation is unreliable when node_modules lives in a parent
    // directory (monorepo root). Disable it for production to avoid the
    // "Sourcemap is likely to be incorrect" Rollup error.
    build: {
      sourcemap: false,
    },
  },
});
