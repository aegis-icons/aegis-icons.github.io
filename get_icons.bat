set website-root=%cd%
cd ..
cd aegis-icons
cd icons
robocopy "%cd%\1_Primary" "%website-root%\icons\primary" /mir
robocopy "%cd%\2_Variations" "%website-root%\icons\variations" /mir
robocopy "%cd%\3_Generic" "%website-root%\icons\generic" /mir
robocopy "%cd%\4_Outdated" "%website-root%\icons\outdated" /mir