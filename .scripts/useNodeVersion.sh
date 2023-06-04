#!/bin/bash

set -e pipefail

if [[ -z "$CI" ]]; then
    pnpm env use --global $(awk '/use-node-version=/{ split($0, v, "="); print v[2] }' .npmrc)
fi
