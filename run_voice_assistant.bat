@echo off
setlocal
set "ROOT=%~dp0"
cd /d "%ROOT%"
set "PATH=%ROOT%runtime\ffmpeg\bin;%ROOT%runtime\python;%ROOT%runtime\python\Scripts;%PATH%"
set "PYTHONNOUSERSITE=1"
set "PYTHONIOENCODING=utf-8"

echo Keep the Ollama LLM service (run_llm_service.bat) running in another window.
echo Press SPACE to start/stop recording, Ctrl+C to quit.
"%ROOT%runtime\python\python.exe" "app\voice_assistant.py" %*
echo.
pause
