/**
 * preset plugins for umi3
 */

import type { IApi } from '@umijs/types'
import {
  createLaunchEditorMiddleware,
} from '../webpack/middlewares'
import type { InspectorPluginOptions } from '../babel'

export default function inspectorPlugin(api: IApi) {
  const inspectorConfig = api.userConfig.inspectorConfig as InspectorPluginOptions | undefined

  api.describe({
    key: 'inspectorConfig',
    config: {
      schema(joi) {
        return joi.object()
      },
    },
    enableBy: api.EnableBy.register,
  })

  // umi4
  // @ts-ignore
  if (api.addBeforeBabelPlugins) {
    // @ts-ignore
    api.addBeforeBabelPlugins(() => [
      [
        require.resolve('@react-dev-inspector/babel-plugin'),
        {
          cwd: inspectorConfig?.cwd,
          excludes: [
            /\.umi(-production)?\//,
            ...inspectorConfig?.excludes ?? [],
          ],
        },
      ],
    ])
  } else {
    // umi3
    api.modifyBabelOpts((babelOptions) => {
      babelOptions.plugins.unshift([
        'react-dev-inspector/plugins/babel',
        {
          cwd: inspectorConfig?.cwd,
          excludes: [
            /\.umi(-production)?\//,
            ...inspectorConfig?.excludes ?? [],
          ],
        },
      ])
      return babelOptions
    })
  }

  // umi4 & umi3
  if (api.addBeforeMiddlewares) {
    api.addBeforeMiddlewares(createLaunchEditorMiddleware)
  } else {
    // legacy umi3
    api.addBeforeMiddewares(createLaunchEditorMiddleware)
  }
}
