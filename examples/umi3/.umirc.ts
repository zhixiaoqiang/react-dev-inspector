// https://umijs.org/config/
import { defineConfig } from 'umi'


export default defineConfig({
  title: false,
  hash: true,
  history: {
    type: 'browser',
  },
  publicPath: '/umi3/',
  ignoreMomentLocale: true,
  targets: {
    chrome: 80,
  },
  extraBabelPlugins: [
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

  /**
   * react-dev-inspector example configuration is as follows
   */
  plugins: [
    'react-dev-inspector/plugins/umi/react-inspector',
  ],
})
