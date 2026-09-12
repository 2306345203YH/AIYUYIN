@echo off
setlocal
set "ROOT=%~dp0"
cd /d "%ROOT%"
set "PATH=%ROOT%runtime\ffmpeg\bin;%ROOT%runtime\python;%ROOT%runtime\python\Scripts;%PATH%"
set "PYTHONNOUSERSITE=1"
set "PYTHONIOENCODING=utf-8"
set "NLTK_DATA=%ROOT%runtime\nltk_data"
set "HF_HOME=%ROOT%runtime\cache\huggingface"

:menu
cls
echo ==================================================
echo   AIyuyin Portable Launcher  (bundled runtime)
echo ==================================================
echo   1. Web voice chat    http://127.0.0.1:8000
echo   2. Voice clone       (generate WAV by voice)
echo   3. Ollama LLM service (Flask, port 5000)
echo   4. Push-to-talk voice assistant
echo   5. Dataset preparation from video
echo   0. Exit
echo ==================================================
echo   Requires NVIDIA driver for GPT-SoVITS voice clone.
echo ==================================================
choice /c 123450 /n /m "Select: "
if errorlevel 6 goto :eof
if errorlevel 5 call "%ROOT%run_dataset_preparation.bat" & goto menu
if errorlevel 4 call "%ROOT%run_voice_assistant.bat" & goto menu
if errorlevel 3 call "%ROOT%run_llm_service.bat" & goto menu
if errorlevel 2 call "%ROOT%run_voice_clone.bat" & goto menu
if errorlevel 1 call "%ROOT%run_web_chat.bat" & goto menu
goto menu
