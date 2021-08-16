// https://nextjs.org/docs/advanced-features/customizing-babel-config
module.exports = {
  presets: [
    'next/babel',
    [
      // https://github.com/emotion-js/emotion/tree/master/packages/babel-preset-css-prop#options
      '@emotion/babel-preset-css-prop',
      {
        autoLabel: 'always',
      },
    ],
  ],

  plugins: [
    /**
     * react-dev-inspector plugin, options docs see:
     * https://github.com/zthxxx/react-dev-inspector#inspector-babel-plugin-options
     */
    'react-dev-inspector/plugins/babel',
  ],
}
