$projectRoot = Split-Path -Parent $PSScriptRoot
$pythonExe = Join-Path $projectRoot ".venv\Scripts\python.exe"
& $pythonExe (Join-Path $projectRoot "app\llm_service.py") @args
exit $LASTEXITCODE
