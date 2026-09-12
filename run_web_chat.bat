@echo off
setlocal
set "ROOT=%~dp0"
cd /d "%ROOT%"
set "PATH=%ROOT%runtime\ffmpeg\bin;%ROOT%runtime\python;%ROOT%runtime\python\Scripts;%PATH%"
set "PYTHONNOUSERSITE=1"
set "PYTHONIOENCODING=utf-8"
set "NLTK_DATA=%ROOT%runtime\nltk_data"
set "HF_HOME=%ROOT%runtime\cache\huggingface"

set "PORT=8000"
if not "%~1"=="" set "PORT=%~1"
set "AIYUYIN_WEB_PORT=%PORT%"
echo AIyuyin web chat: http://127.0.0.1:%PORT%
echo Press Ctrl+C to stop the server.
start "" cmd /c "timeout /t 4 /nobreak >nul && start http://127.0.0.1:%PORT%"
"%ROOT%runtime\python\python.exe" -m uvicorn app.web_app:app --host 127.0.0.1 --port %PORT%
echo.
echo Server stopped.
pause
