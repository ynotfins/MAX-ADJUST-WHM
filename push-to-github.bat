@echo off
echo ==========================================
echo Push to GitHub Script
echo ==========================================
echo.
echo This script will push your code to GitHub.
echo Make sure you have:
echo 1. Created a new empty repository on GitHub
echo 2. Copied its HTTPS URL
echo.
set /p REPO_URL="Please paste your GitHub repository URL here: "

echo.
echo Adding remote origin...
git remote add origin %REPO_URL%

echo.
echo Setting main branch...
git branch -M main

echo.
echo Pushing to GitHub...
git push -u origin main

echo.
echo ==========================================
echo Successfully pushed to GitHub!
echo ==========================================
echo.
echo Your repository is now available at: %REPO_URL%
echo.
pause
