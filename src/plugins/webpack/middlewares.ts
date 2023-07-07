import path from 'path'
import type { NextHandleFunction, IncomingMessage } from 'connect'
import type { RequestHandler } from 'express'

/**
 * https://github.com/facebook/create-react-app/blob/v5.0.1/packages/react-dev-utils/launchEditorEndpoint.js
 * used in https://github.com/facebook/create-react-app/blob/v5.0.1/packages/react-dev-utils/errorOverlayMiddleware.js#L14
 */
import launchEditorEndpoint from 'react-dev-utils/launchEditorEndpoint'
import createReactLaunchEditorMiddleware from 'react-dev-utils/errorOverlayMiddleware'


const reactLaunchEditorMiddleware: RequestHandler = createReactLaunchEditorMiddleware()

/**
 * @deprecated no longer necessary to use `queryParserMiddleware` directly,
 *   which has been integrated into the `launchEditorMiddleware`
 */
export const queryParserMiddleware: NextHandleFunction = (req: IncomingMessage & { query?: Object }, res, next) => {
  if (!req.query && req.url) {
    const url = new URL(req.url, 'https://placeholder.domain')
    req.query = Object.fromEntries(url.searchParams.entries())
  }
  next()
}


export const launchEditorMiddleware: RequestHandler = (req, res, next) => {
  if (!req.url?.startsWith(launchEditorEndpoint)) {
    return next()
  }

  queryParserMiddleware(req, res, () => {})

  if (!req.query.fileName) {
    return next()
  }

  if (!('REACT_EDITOR' in process.env)) {
    /**
     * If not set `REACT_EDITOR` in environment variables, set default to `vscode`.
     * - (`code` is cli command installed by `vscode`:  `>Shell Command: Install 'code' command in PATH`)
     * - link: https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line
     *
     * ---
     *
     * `REACT_EDITOR` env var is used in `react-dev-utils/launchEditor`,
     * for launch editor(IDE) in backend of `REACT_EDITOR`.
     *
     * If not provide `REACT_EDITOR`, `react-dev-utils/launchEditor` will guess one editor(IDE) which user opened.
     *
     * They called "Auto-detect more common editors" -> (https://github.com/facebook/create-react-app/issues/2636)
     *
     * but sometimes the guess result is wrong, so we make it default to `vscode` for frontend developer.
     *
     * ---
     *
     * used in https://github.com/facebook/create-react-app/blob/v5.0.1/packages/react-dev-utils/launchEditor.js#L198
     */
    process.env.REACT_EDITOR = 'code'
  }

  /**
   * retain origin endpoint for backward compatibility <= v1.2.0
   */
  if (
    // relative route used in `Inspector.tsx` `gotoEditor()` relative path by
    // react-dev-inspector's babel plugin
    req.url.startsWith(`${launchEditorEndpoint}/relative`)
    && typeof req.query.fileName === 'string'
  ) {
    req.query.fileName = path.join(process.cwd(), req.query.fileName)
  }

  reactLaunchEditorMiddleware(req, res, next)
}

/**
 * retain create method for backward compatibility <= v1.2.0
 */
export const createLaunchEditorMiddleware: () => RequestHandler = () => launchEditorMiddleware
