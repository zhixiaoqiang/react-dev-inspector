#!/usr/bin/env bash
# working directory is project root dir

# bash strict mode (https://gist.github.com/mohanpedala/1e2ff5661761d3abd0385e8223e16425)
# https://www.explainshell.com/explain/1posix/set
set -euxo pipefail

# https://github.com/chalk/supports-color/blob/main/index.js#L21
export FORCE_COLOR=true

# build site pages
npm run --ws build

# create github-page dir
rm -rf site
mkdir -p site

# move examples as site routes
for site_dir in $(ls -d examples/*); do
  site=$(basename ${site_dir})
  cp -fR examples/${site}/dist site/${site}
done

# create index page
cp -f site/umi3/index.html site/

# domain
echo react-dev-inspector.zthxxx.me > site/CNAME

# static
cp -fR docs/images site/
