@echo off
echo ==========================================
echo Starting MAX ADJUST Website
echo ==========================================
echo.

if not exist "node_modules" (
    echo Installing dependencies first...
    echo This may take a few minutes...
    echo.
    call npm install --legacy-peer-deps
    
    if %errorlevel% neq 0 (
        echo.
        echo ERROR: Failed to install dependencies!
        pause
        exit /b 1
    )
)

echo.
echo Starting development server...
echo.
echo ==========================================
echo Opening http://localhost:3000 in your browser...
echo ==========================================
echo.

rem Start the browser after a short delay
start cmd /c "timeout /t 5 >nul && start http://localhost:3000"

rem Start the development server
npm run dev
