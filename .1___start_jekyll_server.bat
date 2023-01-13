@echo off
title Local Jekyll server for aegis-icons website
echo.
echo Local Jekyll server automatically opens hosted page for the default browser.
echo.
echo ----
echo.
jekyll serve --incremental --host 0.0.0.0 --port 4000 --open_url
pause