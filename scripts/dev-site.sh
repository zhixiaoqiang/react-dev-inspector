#!/usr/bin/env bash

# usage:
#   scripts/dev-site.sh
#   scripts/dev-site.sh vite2
#   scripts/dev-site.sh cra
site="${1:-umi3}"

npm run dev -w "examples/${site}"
