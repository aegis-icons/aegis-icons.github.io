#!/bin/bash -i
echo -ne "\033]0;Local Jekyll server for aegis-icons website\007"
cd ..
echo -e "\033[41mDon't close the window, use CTRL+C instead! Otherwise Ruby stays running in the background!\033[0m"
echo
jekyll serve --incremental --host 0.0.0.0 --port 4000 --open_url
