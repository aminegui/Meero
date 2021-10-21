#!/bin/sh

branch="$(git rev-parse --abbrev-ref HEAD)"

if [ "$branch" = "staging" ] || [ "$branch" = "master" ]; then
  echo "You can't commit directly to $branch branch"
  exit 1
fi