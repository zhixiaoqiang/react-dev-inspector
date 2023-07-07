import type { Plugin } from 'vite'
import {
  launchEditorMiddleware,
} from '../webpack/middlewares'

export const inspectorServer = (): Plugin => ({
  name: 'inspector-server-plugin',
  configureServer(server) {
    server.middlewares.use(launchEditorMiddleware)
  },
})
