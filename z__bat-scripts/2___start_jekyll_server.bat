@echo off
title Local Jekyll server for aegis-icons website
cd ..
echo [41mDon't close the window, use CTRL+C instead! Otherwise Ruby stays running in the background![0m
echo.
jekyll serve --incremental --host 0.0.0.0 --port 4000 --open_url
pause
