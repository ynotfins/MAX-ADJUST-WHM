@echo off
echo ==========================================
echo System Check for MAX ADJUST Development
echo ==========================================
echo.

echo Checking Node.js...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Node.js is not installed!
    echo Please install Node.js from https://nodejs.org/
) else (
    echo [OK] Node.js: 
    node --version
)

echo.
echo Checking npm...
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] npm is not installed!
) else (
    echo [OK] npm: 
    npm --version
)

echo.
echo Checking project structure...
if exist "package.json" (
    echo [OK] package.json found
) else (
    echo [ERROR] package.json not found!
)

if exist "node_modules" (
    echo [OK] Dependencies installed
) else (
    echo [WARNING] Dependencies not installed - run start-dev-clean.bat
)

if exist ".next" (
    echo [INFO] Build cache exists (.next folder)
) else (
    echo [INFO] No build cache found (fresh start)
)

echo.
echo ==========================================
echo System check complete!
echo.
echo To start the dev server, run:
echo - start-dev-clean.bat (recommended)
echo - quick-start.bat (if deps installed)
echo ==========================================
echo.
pause
