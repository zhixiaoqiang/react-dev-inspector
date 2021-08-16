import path from 'path'
import globby from 'globby'
import fs from 'fs-extra'
import type webpack from 'webpack'
import inspectorLoader from '../src/plugins/webpack/inspector-loader'


/**
 * usage:
 *   $ ts-node scripts/gen-test-fixtures.ts
 *
 * (working directory is project root dir)
 */


const assetsBaseDir = './examples/umi3/src'
const fixturesBaseDir = './tests/fixtures'

const assets = globby
  .sync(`${assetsBaseDir}/layouts/**/*.tsx`)
  .map((filePath) => path.relative(assetsBaseDir, filePath))

assets.forEach((asset) => {
  const filePath = path.join(assetsBaseDir, asset)
  const source = fs.readFileSync(filePath, { encoding: 'utf-8' }).toString()

  const content = {
    rootContext: assetsBaseDir,
    resourcePath: filePath,
    query: {},
  } as any as webpack.loader.LoaderContext

  const processed = inspectorLoader.call(content, source)

  fs.outputFileSync(path.join(fixturesBaseDir, asset), processed)
})

