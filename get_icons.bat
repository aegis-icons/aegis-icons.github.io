set website-root=%cd%
cd ..
cd aegis-icons
cd SVG
robocopy "%cd%" "%website-root%\icons\primary" /mir /xd .Generic .Outdated .Variations
robocopy "%cd%\.Generic" "%website-root%\icons\generic" /mir
robocopy "%cd%\.Outdated" "%website-root%\icons\outdated" /mir
robocopy "%cd%\.Variations" "%website-root%\icons\variations" /mir