@echo off
echo ==========================================
echo MAX ADJUST - Clean Development Server Start
echo ==========================================
echo.

echo Step 1: Cleaning .next build folder...
if exist ".next" (
    rmdir /s /q .next
    echo .next folder deleted successfully
) else (
    echo .next folder not found, skipping...
)

echo.
echo Step 2: Checking dependencies...

if not exist "node_modules" (
    echo Dependencies not found. Installing...
    echo This may take a few minutes...
    echo.
    call npm install --legacy-peer-deps
) else (
    echo Dependencies found. Running quick install check...
    call npm install --legacy-peer-deps
)

if %errorlevel% neq 0 (
    echo.
    echo ERROR: npm install failed!
    echo Please make sure Node.js and npm are installed.
    echo.
    pause
    exit /b 1
)

echo.
echo Step 3: Starting development server on port 3000...
echo.
echo ==========================================
echo Server will start at http://localhost:3000
echo Press Ctrl+C to stop the server
echo ==========================================
echo.

call npm run dev
