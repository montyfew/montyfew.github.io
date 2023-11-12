#!/usr/bin/env bash
sleep 8 && open http://0.0.0.0:4000 &
cd -- "$(dirname "$0")"
bundle exec jekyll serve --livereload