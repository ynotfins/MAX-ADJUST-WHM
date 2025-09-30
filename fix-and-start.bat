@echo off
echo ==========================================
echo MAX ADJUST - Fix Dependencies & Start
echo ==========================================
echo.
echo This script will fix dependency issues and start the dev server.
echo.

echo Step 1: Cleaning up...
if exist ".next" rmdir /s /q .next
if exist "node_modules" rmdir /s /q node_modules
if exist "package-lock.json" del package-lock.json
echo Cleanup complete.

echo.
echo Step 2: Installing dependencies with legacy peer deps...
echo This resolves the HeroUI/Tailwind version conflict.
echo.

npm install --legacy-peer-deps

if %errorlevel% neq 0 (
    echo.
    echo ==========================================
    echo ERROR: Installation failed!
    echo ==========================================
    echo Try these steps:
    echo 1. Run: npm cache clean --force
    echo 2. Delete node_modules folder manually
    echo 3. Try again
    echo.
    pause
    exit /b 1
)

echo.
echo Step 3: Starting development server...
echo.
echo ==========================================
echo Server starting at http://localhost:3000
echo Press Ctrl+C to stop
echo ==========================================
echo.

npm run dev
