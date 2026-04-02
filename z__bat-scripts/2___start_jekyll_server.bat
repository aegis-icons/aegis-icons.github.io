@echo off
cd ..
title Local Jekyll server for aegis-icons website
color 0C
echo Don't close the window, use CTRL+C instead! Otherwise Ruby stays running in the background
color 07
echo.
jekyll serve --incremental --host 0.0.0.0 --port 4000 --open_url
pause
