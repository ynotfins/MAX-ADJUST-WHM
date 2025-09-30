@echo off
echo Creating MAX ADJUST Web App zip file...

powershell -Command "Remove-Item -Path 'MAX-ADJUST-WEBAPP-REDESIGN.zip' -Force -ErrorAction SilentlyContinue"

powershell -Command "Compress-Archive -Path 'src', 'public', '*.json', '*.ts', '*.mjs', '*.md', '.vscode' -DestinationPath 'MAX-ADJUST-WEBAPP-REDESIGN.zip' -Force"

echo.
echo Successfully created MAX-ADJUST-WEBAPP-REDESIGN.zip
echo The zip file contains all your website files with the new web app design.
pause
