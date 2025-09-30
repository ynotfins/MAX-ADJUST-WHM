@echo off
echo ==========================================
echo Installing MAX ADJUST Dependencies
echo ==========================================
echo.
echo This will install all required packages.
echo Using --legacy-peer-deps to resolve version conflicts.
echo.

if exist "node_modules" (
    echo Removing existing node_modules...
    rmdir /s /q node_modules
)

if exist "package-lock.json" (
    echo Removing package-lock.json...
    del package-lock.json
)

echo.
echo Installing fresh dependencies...
echo.

npm install --legacy-peer-deps

if %errorlevel% neq 0 (
    echo.
    echo ==========================================
    echo ERROR: Installation failed!
    echo ==========================================
    echo.
    echo Possible solutions:
    echo 1. Make sure Node.js and npm are installed
    echo 2. Try running as administrator
    echo 3. Clear npm cache: npm cache clean --force
    echo.
) else (
    echo.
    echo ==========================================
    echo SUCCESS: Dependencies installed!
    echo ==========================================
    echo.
    echo You can now run: quick-start.bat
    echo.
)

pause
