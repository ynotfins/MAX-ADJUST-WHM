@echo off
echo ==========================================
echo Git Add, Commit and Push
echo ==========================================
echo.

REM Ensure git is available
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Git is not installed or not in PATH.
    echo Please install Git from https://git-scm.com/downloads
    pause
    exit /b 1
)

REM Initialize repo if missing
if not exist .git (
    echo No git repository detected. Initializing...
    git init
)

REM Capture commit message
set COMMIT_MSG=
set /p COMMIT_MSG="Commit message (default: chore: apply redesign updates): "
if "%COMMIT_MSG%"=="" set COMMIT_MSG=chore: apply redesign updates

echo.
echo Staging all changes...
git add -A

echo.
echo Creating commit...
git commit -m "%COMMIT_MSG%"

REM Ensure branch name is main
git branch -M main >nul 2>&1

REM Check for remote 'origin'
for /f "tokens=*" %%i in ('git remote') do set HASREMOTE=%%i
if "%HASREMOTE%"=="" (
    echo.
    echo No remote 'origin' found.
    set /p REPO_URL="Paste your GitHub HTTPS URL (e.g. https://github.com/you/repo.git): "
    if "%REPO_URL%"=="" (
        echo ERROR: A remote URL is required to push.
        pause
        exit /b 1
    )
    git remote add origin %REPO_URL%
)

echo.
echo Pushing to GitHub (main)...
git push -u origin main

echo.
echo ==========================================
echo Push complete.
echo ==========================================
pause
