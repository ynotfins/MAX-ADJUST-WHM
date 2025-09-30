@echo off
echo Starting MAX ADJUST Dev Server...
echo ================================
echo.

if not exist "node_modules" (
    echo ERROR: Dependencies not installed!
    echo.
    echo Please run one of these first:
    echo - fix-and-start.bat (recommended)
    echo - install-deps.bat
    echo - start-dev-clean.bat
    echo.
    pause
    exit /b 1
)

echo Server will run at http://localhost:3000
echo Press Ctrl+C to stop
echo.

npm run dev
