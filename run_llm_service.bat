@echo off
setlocal
set "ROOT=%~dp0"
cd /d "%ROOT%"
set "PATH=%ROOT%runtime\ffmpeg\bin;%ROOT%runtime\python;%ROOT%runtime\python\Scripts;%PATH%"
set "PYTHONNOUSERSITE=1"
set "PYTHONIOENCODING=utf-8"

echo Requires Ollama running with a pulled model (ollama pull deepseek-r1:7b).
echo Health check: http://127.0.0.1:5000/health
"%ROOT%runtime\python\python.exe" "app\llm_service.py" %*
echo.
pause
