@echo off
echo|set /p=http://127.0.0.1:4000/|clip
echo.
echo Jekyll server address copied to your clipboard:
echo http://127.0.0.1:4000/
echo.
echo ----
echo.
jekyll serve --host=0.0.0.0