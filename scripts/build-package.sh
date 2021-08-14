#!/usr/bin/env bash
# working directory is project root dir

# bash strict mode (https://gist.github.com/mohanpedala/1e2ff5661761d3abd0385e8223e16425)
# https://www.explainshell.com/explain/1posix/set
set -euxo pipefail

# https://github.com/chalk/supports-color/blob/main/index.js#L21
export FORCE_COLOR=true

npm run clean

tsc -p build.esm.json
tsc -p build.cjs.json
tsc -p build.plugins.json
