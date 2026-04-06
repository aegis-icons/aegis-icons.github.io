cd ..

set website-root=%cd%

cd ..
cd aegis-icons
cd icons

robocopy "%cd%\1_Primary" "%website-root%\icons\p" /mir
robocopy "%cd%\2_Variations" "%website-root%\icons\v" /mir
robocopy "%cd%\3_Generic" "%website-root%\icons\g" /mir
