<h1 align="center">React Dev Inspector</h1>

<p align="center">
  <a href="https://www.npmjs.com/package/react-dev-inspector" target="_blank" rel="noopener noreferrer"><img src="https://badgen.net/npm/v/react-dev-inspector" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/package/react-dev-inspector" target="_blank" rel="noopener noreferrer"><img src="https://badgen.net/npm/dt/react-dev-inspector" alt="NPM Downloads" /></a>
  <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer"><img src="https://badgen.net/npm/node/react-dev-inspector" alt="Node.js" /></a>
  <a href="https://github.com/zthxxx/react-dev-inspector/blob/master/LICENSE" target="_blank" rel="noopener noreferrer"><img src="https://badgen.net/github/license/zthxxx/react-dev-inspector" alt="License" /></a>
</p>

## Introduction

This package allows users to jump to local IDE code directly from browser React component by just a simple click, which is similar to Chrome inspector but more advanced.

### Preview

online demo: https://react-dev-inspector.zthxxx.me

> press hotkey (`ctrl⌃ + shift⇧ + commmand⌘ + c`), then click the HTML element you wish to inspect.

screen record gif (8M size):

[![inspector-gif](https://github.com/zthxxx/react-dev-inspector/raw/master/docs/images/inspect.gif)](https://react-dev-inspector.zthxxx.me/images/inspect.gif)



## Installation

```bash
npm i -D react-dev-inspector
```

## Usage

<br />

### for VSCode only, but simple without any other configuration

Works with almost all react frameworks such as
  [Vite](https://github.com/vitejs/vite/tree/main/packages/plugin-react),
  [Next.js](https://nextjs.org/),
  [Create React App](https://create-react-app.dev/),
  [Umi3](https://umijs.org/),
  [Ice.js](https://ice.work/),

or any other which use [@babel/plugin-transform-react-jsx-source](https://github.com/babel/babel/tree/master/packages/babel-plugin-transform-react-jsx-source) in builtin.
Just follow the component code below:


```tsx
import React from 'react'
import { Inspector, InspectParams } from 'react-dev-inspector'

const isDev = process.env.NODE_ENV === 'development'

export const Layout = () => {
  // ...

  return (
    <>
      <YourComponent />

      {isDev && (
        <Inspector
          // props see docs:
          // https://github.com/zthxxx/react-dev-inspector#inspector-component-props
          keys={['control', 'shift', 'command', 'c']}
          disableLaunchEditor={true}
          onClickElement={({ codeInfo }: InspectParams) => {
            if (!codeInfo?.absolutePath) return
            const { absolutePath, lineNumber, columnNumber } = codeInfo
            // you can change the url protocol if you are using in Web IDE
            window.open(`vscode://file/${absolutePath}:${lineNumber}:${columnNumber}`)
          }}
        >
      )}
    </>
  )
}
```

-----

Whether you use `vscode://`, `webstorm://` or otherwise, it solidifies in code.

sometime you want it **infer** which is the current local IDE you are using now.

But for generally infer current local IDE, **need some server-side configuration**.
At this time, follow those **TWO steps** below:

### 1. Add Inspector React Component

```tsx
import React from 'react'
import { Inspector, InspectParams } from 'react-dev-inspector'

const isDev = process.env.NODE_ENV === 'development'

export const Layout = () => {
  // ...

  return (
    <>
      <YourComponent />

      {isDev && (
        <Inspector
          // props see docs:
          // https://github.com/zthxxx/react-dev-inspector#inspector-component-props
          keys={['control', 'shift', 'command', 'c']}
          onHoverElement={(inspect: InspectParams) => {}}
          onClickElement={(inspect: InspectParams) => {}}
        >
      )}
    </>
  )
}
```

<br />

### 2. Set up Inspector Config

You should add:

- an inspector **babel plugin**, to inject source code location info
  - `react-dev-inspector/plugins/babel`
- an server **api middleware**, to open local IDE
  - `import { launchEditorMiddleware } from 'react-dev-inspector/plugins/webpack'`

to your current project development config.

Such as add **babel plugin** into your `.babelrc` or webpack `babel-loader` config,
add **api middleware** into your `webpack-dev-server` config or other server setup.

<br />

There are some example ways to set up, please pick the one fit your project best.

In common cases, if you're using webpack, you can see [#raw-webpack-config](https://github.com/zthxxx/react-dev-inspector#raw-webpack-config),

If your project happen to use vite / nextjs / create-react-app and so on, you can also try out our **integrated plugins / examples** with

- [#usage-with-vite2](https://github.com/zthxxx/react-dev-inspector#usage-with-vite2)
- [#usage-with-next.js](https://github.com/zthxxx/react-dev-inspector#usage-with-nextjs)
- [#usage-with-create-react-app](https://github.com/zthxxx/react-dev-inspector#usage-with-create-react-app)
- [#usage-with-umi3](https://github.com/zthxxx/react-dev-inspector#usage-with-umi3)
- [#usage-with-umi2](https://github.com/zthxxx/react-dev-inspector#usage-with-umi2)
- [#usage-with-ice.js](https://github.com/zthxxx/react-dev-inspector#usage-with-icejs)



#### raw webpack config

Support webpack v4 and v5, examples see:

<details>
<summary>.babelrc.js</summary><br>

```js
// .babelrc.js
module.exports = {
  plugins: [
    /**
     * react-dev-inspector plugin, options docs see:
     * https://github.com/zthxxx/react-dev-inspector#inspector-babel-plugin-options
     */
    'react-dev-inspector/plugins/babel',
  ],
}
```

<br></details>

<details>
<summary>webpack.config.ts</summary><br>

```ts
// webpack.config.ts
import type { Configuration } from 'webpack'
import { ReactInspectorPlugin } from 'react-dev-inspector/plugins/webpack'

const config: Configuration = {
  plugins: [
    /**
     * react-dev-inspector webpack plugin
     * this plugin will create
     *  `devServer.setupMiddlewares` config for webpack5
     *   and `devServer.before` config for webpack4
     */
    new ReactInspectorPlugin(),
  ],
}
```

<br></details>

However, if you want more manully config with `webpack-dev-server`, here are some equivalent:

<details>
<summary>webpack.config.ts</summary><br>

```ts
// webpack.config.ts
import type { Configuration } from 'webpack'
import { launchEditorMiddleware } from 'react-dev-inspector/plugins/webpack'

const config: Configuration = {
  devServer: {
    /**
     * react-dev-inspector - dev server config
     * for create-react-app@^5 + webpack-dev-server@^4.7
     */
    setupMiddlewares: (middlewares, devServer) => {
      middlewares.unshift(launchEditorMiddleware)
      return middlewares
    },

    /**
     * react-dev-inspector - dev server config
     * for create-react-app@^4 + webpack-dev-server@^3
     */
    before: (app, server, compiler) => {
      app.use(launchEditorMiddleware)

      // ... other middlewares after
    },
  },
}
```

<br></details>


#### usage with [Vite2](https://vitejs.dev)

> example project see: https://github.com/zthxxx/react-dev-inspector/tree/master/examples/vite2

<details>
<summary>vite.config.ts</summary><br>

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { inspectorServer } from 'react-dev-inspector/plugins/vite'

export default defineConfig({
  plugins: [
    react(),

    /**
     * react-dev-inspector configuration
     * only need setup an inspector middleware
     */
    inspectorServer(),
  ],
})
```

<br></details>


#### usage with [Next.js](https://nextjs.org/)

use Next.js [Custom Server](https://nextjs.org/docs/advanced-features/custom-server) + [Customizing Babel Config](https://nextjs.org/docs/advanced-features/customizing-babel-config)

> example project see: https://github.com/zthxxx/react-dev-inspector/tree/master/examples/nextjs

<details>
<summary>server.js</summary><br>

```js
...

const {
  queryParserMiddleware,
  launchEditorMiddleware,
} = require('react-dev-inspector/plugins/webpack')

app.prepare().then(() => {
  createServer((req, res) => {
    /**
     * middlewares, from top to bottom
     */
    const middlewares = [
      /**
       * react-dev-inspector configuration, two middlewares for nextjs
       */
      queryParserMiddleware,
      launchEditorMiddleware,

      /** Next.js default app handle */
        (req, res) => handle(req, res),
    ]

    const middlewarePipeline = middlewares.reduceRight(
      (next, middleware) => (
        () => { middleware(req, res, next) }
      ),
      () => {},
    )

    middlewarePipeline()

  }).listen(PORT, (err) => {
    if (err) throw err
    console.debug(`> Ready on http://localhost:${PORT}`)
  })
})
```

<br></details>

<details>
<summary>package.json</summary><br>

```diff
  "scripts": {
-    "dev": "next dev",
+    "dev": "node server.js",
    "build": "next build"
  }
```

<br></details>

<details>
<summary>.babelrc.js</summary><br>

```js
module.exports = {
  plugins: [
    /**
     * react-dev-inspector plugin, options docs see:
     * https://github.com/zthxxx/react-dev-inspector#inspector-babel-plugin-options
     */
    'react-dev-inspector/plugins/babel',
  ],
}
```

<br></details>


#### usage with create-react-app

create-react-app + [react-app-rewired](https://github.com/timarney/react-app-rewired) + [customize-cra](https://github.com/arackaf/customize-cra) example `config-overrides.js`:

> example project see: https://github.com/zthxxx/react-dev-inspector/tree/master/examples/cra

Support create-react-app v4, v5, example config see:

<details>
<summary>config-overrides.js</summary><br>

```ts
const {
  launchEditorMiddleware,
  ReactInspectorPlugin,
} = require('react-dev-inspector/plugins/webpack')
const {
  override,
  overrideDevServer,
  addBabelPlugin,
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

    /**
     * react-dev-inspector - dev server config
     * for create-react-app@^4 + webpack-dev-server@^3
     */
    addWebpackPlugin(
      new ReactInspectorPlugin(),
    ),
  ),

  /**
   * react-dev-inspector - dev server config
   * for create-react-app@^5 + webpack-dev-server@^4.7
   */
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
```

<br></details>


#### usage with [Umi3](https://umijs.org/)

> example project see: https://github.com/zthxxx/react-dev-inspector/tree/master/examples/umi3

<details>
<summary>.umirc.dev.ts</summary><br>

```ts
// https://umijs.org/config/
import { defineConfig } from 'umi'

export default defineConfig({
  plugins: [
    'react-dev-inspector/plugins/umi/react-inspector',
  ],
  inspectorConfig: {
    // babel plugin options docs see:
    // https://github.com/zthxxx/react-dev-inspector#inspector-babel-plugin-options
    excludes: [],
  },
})
```

<br></details>


#### usage with [Umi2](https://v2.umijs.org)

<details>
<summary>.umirc.dev.ts</summary><br>

```js
import { launchEditorMiddleware } from 'react-dev-inspector/plugins/webpack'

export default {
  // ...
  extraBabelPlugins: [
    // plugin options docs see:
    // https://github.com/zthxxx/react-dev-inspector#inspector-babel-plugin-options
    'react-dev-inspector/plugins/babel',
  ],

  /**
   * And you need to set `false` to `dll` in `umi-plugin-react`,
   * becase these is a umi2 bug that `dll` cannot work with `devServer.before`
   *
   * https://github.com/umijs/umi/issues/2599
   * https://github.com/umijs/umi/issues/2161
   */
  chainWebpack(config, { webpack }) {
    const originBefore = config.toConfig().devServer

    config.devServer.before((app, server, compiler) => {

      app.use(launchEditorMiddleware)

      originBefore?.before?.(app, server, compiler)
    })

    return config
  },
}
```

<br></details>


#### usage with [Ice.js](https://ice.work/)

<details>
<summary>build.json</summary><br>

```ts
// https://ice.work/docs/guide/basic/build
{
  "plugins": [
    "react-dev-inspector/plugins/ice",
  ]
}
```

<br></details>

<br />

### Examples Project Code

- **vite2**
  - code: https://github.com/zthxxx/react-dev-inspector/tree/master/examples/vite2
  - preview: https://react-dev-inspector.zthxxx.me/vite2
- **next.js**
  - code: https://github.com/zthxxx/react-dev-inspector/tree/master/examples/nextjs
  - preview: https://react-dev-inspector.zthxxx.me/nextjs
- **create-react-app**
  - code: https://github.com/zthxxx/react-dev-inspector/tree/master/examples/cra
  - preview: https://react-dev-inspector.zthxxx.me/cra
- **umi3**
  - code: https://github.com/zthxxx/react-dev-inspector/tree/master/examples/umi3
  - preview: https://react-dev-inspector.zthxxx.me/umi3

<br />

## Configuration

### `<Inspector>` Component Props

checkout TS definition under [`react-dev-inspector/es/Inspector.d.ts`](https://github.com/zthxxx/react-dev-inspector/blob/master/src/Inspector/Inspector.tsx#L29).

| Property            | Description                                                                                           | Type                                                                                                                           | Default                                |
| ------------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------- |
| keys                | inspector hotkeys<br /><br />supported keys see: https://github.com/jaywcjlove/hotkeys#supported-keys | `string[]`                                                                                                                     | `['control', 'shift', 'command', 'c']` |
| disableLaunchEditor | disable editor launching<br /><br />(launch by default in dev Mode, but not in production mode)       | `boolean`                                                                                                                      | `false`                                |
| onHoverElement      | triggered when mouse hover in inspector mode                                                          | [`(params: InspectParams) => void`](https://github.com/zthxxx/react-dev-inspector/blob/master/src/Inspector/Inspector.tsx#L14) | -                                      |
| onClickElement      | triggered when mouse hover in inspector mode                                                          | [`(params: InspectParams) => void`](https://github.com/zthxxx/react-dev-inspector/blob/master/src/Inspector/Inspector.tsx#L14) | -                                      |

```ts
// import type { InspectParams } from 'react-dev-inspector'

interface InspectParams {
  /** hover / click event target dom element */
  element: HTMLElement,
  /** nearest named react component fiber for dom element */
  fiber?: React.Fiber,
  /** source file line / column / path info for react component */
  codeInfo?: {
    lineNumber: string,
    columnNumber: string,
    /**
    * code source file relative path to dev-server cwd(current working directory)
    * need use with `react-dev-inspector/plugins/babel`
    */
    relativePath?: string,
    /**
    * code source file absolute path
    * just need use with `@babel/plugin-transform-react-jsx-source` which auto set by most framework
    */
    absolutePath?: string,
  },
  /** react component name for dom element */
  name?: string,
}
```

<br />

### Inspector Babel Plugin Options

```ts
interface InspectorPluginOptions {
  /** override process.cwd() */
  cwd?: string,
  /** patterns to exclude matched files */
  excludes?: (string | RegExp)[],
}
```

<br />

### Inspector Loader Props

```ts
// import type { ParserPlugin, ParserOptions } from '@babel/parser'
// import type { InspectorConfig } from 'react-dev-inspector/plugins/webpack'

interface InspectorConfig {
  /** patterns to exclude matched files */
  excludes?: (string | RegExp)[],
  /**
   * add extra plugins for babel parser
   * default is ['typescript', 'jsx', 'decorators-legacy', 'classProperties']
   */
  babelPlugins?: ParserPlugin[],
  /** extra babel parser options */
  babelOptions?: ParserOptions,
}
```

<br />

### IDE / Editor config

This package uses `react-dev-utils` to launch your local IDE application, but, which one will be open?

In fact, it uses an **environment variable** named **`REACT_EDITOR`** to specify an IDE application, but if you do not set this variable, it will try to open a common IDE that you have open or installed once it is certified.

For example, if you want it always open VSCode when inspection clicked, set `export REACT_EDITOR=code` in your shell.

<br />

#### VSCode

- install VSCode command line tools, [see the official docs](https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line)
  ![install-vscode-cli](./docs/images/install-vscode-cli.png)

- set env to shell, like `.bashrc` or `.zshrc`
  ```bash
  export REACT_EDITOR=code
  ```

<br />

#### WebStorm

- just set env with an absolute path to shell, like `.bashrc` or `.zshrc` (only MacOS)
  ```bash
  export REACT_EDITOR='/Applications/WebStorm.app/Contents/MacOS/webstorm'
  ```

**OR**

- install WebStorm command line tools
  ![install-webstorm-cli](./docs/images/install-webstorm-cli.png)

- then set env to shell, like `.bashrc` or `.zshrc`
  ```bash
  export REACT_EDITOR=webstorm
  ```

<br />

#### Vim

Yes! you can also use vim if you want, just set env to shell

```bash
export REACT_EDITOR=vim
```

<br />

## How It Works

- **Stage 1 - Compile Time**

  - [babel plugin] inject source file path/line/column to JSX data attributes props

- **Stage 2 - Web React Runtime**

  - [React component] `Inspector` Component in react, for listen hotkeys, and request api to dev-server for open IDE.

    Specific, when you click a component DOM, the `Inspector` will try to obtain its source file info (path/line/column), then request launch-editor api (in stage 3) with absolute file path.

- **Stage 3 - Dev-server Side**

  - [middleware] setup  `launchEditorMiddleware` in webpack dev-server (or other dev-server), to open file in IDE according to the request params.

    **Only need** in development mode,and you want to open IDE when click a component element.

    **Not need** in prod mode, or you just want inspect dom without open IDE (set `disableLaunchEditor={true}` to Inspector component props)



### Analysis of Theory

- [chinese] [🎉 我点了页面上的元素，VSCode 乖乖打开了对应的组件？原理揭秘](https://juejin.cn/post/6901466406823575560)

<br />

## License

[MIT LICENSE](./LICENSE)
