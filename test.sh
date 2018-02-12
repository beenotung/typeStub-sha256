#!/usr/bin/env bash
hash yarn 2>/dev/null || npm i -g yarn
set -e
cd test
yarn install
yarn test
