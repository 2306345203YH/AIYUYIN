$projectRoot = Split-Path -Parent $PSScriptRoot
$pythonExe = Join-Path $projectRoot ".venv\Scripts\python.exe"
& $pythonExe (Join-Path $projectRoot "app\voice_assistant.py") @args
exit $LASTEXITCODE
