@echo off
setlocal
set "ROOT=%~dp0"
cd /d "%ROOT%"
set "PATH=%ROOT%runtime\ffmpeg\bin;%ROOT%runtime\python;%ROOT%runtime\python\Scripts;%PATH%"
set "PYTHONNOUSERSITE=1"
set "PYTHONIOENCODING=utf-8"
set "NLTK_DATA=%ROOT%runtime\nltk_data"
set "HF_HOME=%ROOT%runtime\cache\huggingface"

if "%~1"=="" (
  echo Usage:
  echo   run_voice_clone.bat --voice aiyafala --text "Picnic time." --output outputs\generated\demo.wav
  echo   run_voice_clone.bat --voice changli --text "Welcome back."
  echo.
  echo Voices are defined in config\voices.yaml.
)
"%ROOT%runtime\python\python.exe" "app\voice_clone.py" %*
echo.
pause
