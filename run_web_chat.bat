@echo off
setlocal enabledelayedexpansion
set "ROOT=%~dp0"
cd /d "%ROOT%"
set "PATH=%ROOT%runtime\ffmpeg\bin;%ROOT%runtime\python;%ROOT%runtime\python\Scripts;%PATH%"
set "PYTHONNOUSERSITE=1"
set "PYTHONIOENCODING=utf-8"
set "NLTK_DATA=%ROOT%runtime\nltk_data"
set "HF_HOME=%ROOT%runtime\cache\huggingface"

set "PORT=8000"
if not "%~1"=="" set "PORT=%~1"

rem Skip to the next free port if the preferred one is occupied.
set /a TRIES=0
:findport
netstat -ano | findstr /C:":%PORT% " | findstr /C:"LISTENING" >nul 2>&1
if not errorlevel 1 (
  set /a TRIES+=1
  if !TRIES! geq 50 (
    echo Could not find a free port starting from %PORT%.
    pause
    exit /b 1
  )
  echo Port %PORT% is already in use, trying %PORT%+1...
  set /a PORT+=1
  goto findport
)

set "AIYUYIN_WEB_PORT=%PORT%"
echo ================================================
echo   AIyuyin web chat:  http://127.0.0.1:%PORT%
echo ================================================
echo Press Ctrl+C to stop the server.
start "" cmd /c "timeout /t 4 /nobreak >nul && start http://127.0.0.1:%PORT%"
"%ROOT%runtime\python\python.exe" -m uvicorn app.web_app:app --host 127.0.0.1 --port %PORT%
echo.
echo Server stopped.
pause
