#!/usr/bin/env bash
# working directory is project root dir

tsc -p build.esm.json
tsc -p build.plugins.json

./scripts/dev-site.sh
