@echo off
setlocal
set "ROOT=%~dp0"
cd /d "%ROOT%"
set "PATH=%ROOT%runtime\ffmpeg\bin;%ROOT%runtime\python;%ROOT%runtime\python\Scripts;%PATH%"
set "PYTHONNOUSERSITE=1"
set "PYTHONIOENCODING=utf-8"

if "%~1"=="" (
  echo Usage:
  echo   run_dataset_preparation.bat data\raw\videos\changli.mp4 --engine whisper --speaker changli --output-dir data\processed\changli_whisper
  echo   Add --duration-seconds 30 to test the first 30 seconds.
)
"%ROOT%runtime\python\python.exe" "app\prepare_voice_dataset.py" %*
echo.
pause
