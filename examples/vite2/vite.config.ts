import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { inspectorServer } from 'react-dev-inspector/plugins/vite'
import { onlineDemoBuildPlugin } from './onlineDemoBuildPlugin'

// https://vitejs.dev/config/
export default defineConfig({
  clearScreen: false,
  server: {
    open: true,
  },
  resolve: {
    preserveSymlinks: true,
    alias: {
      react: require.resolve('react'),
    },
  },
  plugins: [
    react({
      jsxRuntime: 'classic',
      babel: {
        plugins: [
          [
            // https://github.com/emotion-js/emotion/tree/main/packages/babel-plugin#options
            '@emotion/babel-plugin',
            {
              sourceMap: true,
              autoLabel: 'always',
              labelFormat: '[local]',
            },
          ],
        ],
      },
    }),
    // this `onlineDemoBuildPlugin` only for prod build with online demo site
    onlineDemoBuildPlugin(),

    /**
     * react-dev-inspector example configuration is as follows
     * only need setup an inspector middleware for dev
     */
    inspectorServer(),
  ],
})
