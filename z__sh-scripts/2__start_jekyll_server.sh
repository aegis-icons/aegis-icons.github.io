#!/bin/bash -i
echo -ne "\033]0;Local Jekyll server for aegis-icons website\007"
cd ..
printf "\033[41;97m%s\033[0m\n" " Don't close the window, use CTRL+C instead! Otherwise Ruby stays running in the background! "
echo
bundle exec jekyll serve --incremental --host 0.0.0.0 --port 4000 --open_url
