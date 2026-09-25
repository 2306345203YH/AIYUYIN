param(
    [int]$Port = 8000,
    [switch]$Build
)

$ErrorActionPreference = "Stop"
$ProjectRoot = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
$Python = Join-Path $ProjectRoot ".venv\Scripts\python.exe"
$WebRoot = Join-Path $ProjectRoot "web"
$WebDist = Join-Path $WebRoot "dist"

if (-not (Test-Path -LiteralPath $Python)) {
    throw "Project virtual environment not found: $Python"
}

if (-not (Test-Path -LiteralPath (Join-Path $WebRoot "node_modules"))) {
    Write-Host "Installing web dependencies..." -ForegroundColor Cyan
    Push-Location $WebRoot
    try { npm install } finally { Pop-Location }
}

if ($Build -or -not (Test-Path -LiteralPath (Join-Path $WebDist "index.html"))) {
    Write-Host "Building web interface..." -ForegroundColor Cyan
    Push-Location $WebRoot
    try { npm run build } finally { Pop-Location }
}

while (Get-NetTCPConnection -State Listen -LocalPort $Port -ErrorAction SilentlyContinue) {
    $Port += 1
}

$env:AIYUYIN_WEB_PORT = "$Port"
Write-Host "AIyuyin web chat: http://127.0.0.1:$Port" -ForegroundColor Green
Write-Host "Press Ctrl+C to stop the server." -ForegroundColor DarkGray
Start-Process "http://127.0.0.1:$Port"
Push-Location $ProjectRoot
try {
    & $Python -m uvicorn app.web_app:app --host 127.0.0.1 --port $Port
} finally {
    Pop-Location
}
