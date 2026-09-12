$projectRoot = Split-Path -Parent $PSScriptRoot
$pythonExe = Join-Path $projectRoot ".venv\Scripts\python.exe"
& $pythonExe (Join-Path $projectRoot "app\prepare_voice_dataset.py") @args
exit $LASTEXITCODE
