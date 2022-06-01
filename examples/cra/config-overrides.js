const {
  launchEditorMiddleware,
} = require('react-dev-inspector/plugins/webpack')
const {
  override,
  overrideDevServer,
  disableEsLint,
  addWebpackResolve,
  addWebpackAlias,
  addBabelPlugin,
  addBabelPresets,
  addWebpackPlugin,
  removeModuleScopePlugin,
} = require('customize-cra')


/**
 * origin config:
 *   https://github.com/facebook/create-react-app/blob/v5.0.1/packages/react-scripts/config/webpack.config.js
 *   https://github.com/facebook/create-react-app/blob/v5.0.1/packages/react-scripts/config/webpackDevServer.config.js
 *
 * customize-cra api code: https://github.com/arackaf/customize-cra
 */
module.exports = {
  webpack: override(
    disableEsLint(),
    addWebpackResolve({
      symlinks: false,
    }),
    addWebpackAlias({
      react: require.resolve('react'),
    }),
    /**
     * avoid require react path error like:
     *   "You can either move it inside src/, or add a symlink to it from project's node_modules/""
     */
    removeModuleScopePlugin(),
    ...addBabelPresets(
      [
        // https://github.com/emotion-js/emotion/tree/main/packages/babel-plugin#options
        '@emotion/babel-plugin',
        {
          sourceMap: true,
          autoLabel: 'always',
          labelFormat: '[local]',
        },
      ],
    ),

    /** react-dev-inspector - babel config */
    addBabelPlugin([
      // plugin options docs see:
      // https://github.com/zthxxx/react-dev-inspector#inspector-babel-plugin-options
      'react-dev-inspector/plugins/babel',
      {
        excludes: [
          /xxxx-want-to-ignore/,
        ],
      },
    ]),
  ),

  /** react-dev-inspector - dev server config */
  devServer: overrideDevServer(
    serverConfig => {
      // https://webpack.js.org/configuration/dev-server/#devserversetupmiddlewares
      serverConfig.setupMiddlewares = (middlewares) => {
        middlewares.unshift(launchEditorMiddleware)
        return middlewares
      }

      return serverConfig
    },
  ),
}
