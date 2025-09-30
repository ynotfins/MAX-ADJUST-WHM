@echo off
echo Initializing Git repository...
echo.

git init

echo.
echo Adding all files to git...
echo.

git add .

echo.
echo Creating initial commit...
echo.

git commit -m "chore: initial commit (Next.js + redesign)"

echo.
echo ========================================
echo Git repository initialized successfully!
echo ========================================
echo.
echo Next steps:
echo 1. Create a new empty repository on GitHub (no README/License)
echo 2. Copy its HTTPS URL (e.g. https://github.com/ynotfins/maxadjust-web.git)
echo 3. Run the following commands:
echo.
echo    git remote add origin [PASTE_YOUR_GITHUB_URL_HERE]
echo    git branch -M main
echo    git push -u origin main
echo.
pause
