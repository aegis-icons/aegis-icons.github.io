@echo off
title Jekyll server for aegis-icons website
echo.
echo Jekyll server automatically opens hosted page for the default browser.
echo.
echo Open port 4000 (TCP) on the router for testing in local network (mobile).
echo Access [YOUR-SERVER-DESKTOP-IPv4-ADDRESS]:4000 for mobile devices etc.
echo.
echo If 0.0.0.0:4000 address doesn't work on your desktop that has the server, try this address instead:
echo http://localhost:4000/
echo.
echo ----
echo.
jekyll serve --incremental --host=0.0.0.0 --port 4000 --open_url
pause