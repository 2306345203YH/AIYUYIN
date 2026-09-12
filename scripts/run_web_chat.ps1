param(
    [int]$Port = 8000,
    [switch]$Build
)

$ErrorActionPreference = "Stop"
$ProjectRoot = (Resolve-Path (Join-Path $PSScriptRoot ".." )).Path
$Python = Join-Path $ProjectRoot ".venv\Scripts\python.exe"
$WebRoot = Join-Path $ProjectRoot "web"
$WebDist = Join-Path $WebRoot "dist"

if (-not (Test-Path -LiteralPath $Python)) {
    throw "没有找到项目虚拟环境：$Python。请先按 README.md 创建 .venv。"
}

if (-not (Test-Path -LiteralPath (Join-Path $WebRoot "node_modules"))) {
    Write-Host "首次运行，正在安装网页依赖..." -ForegroundColor Cyan
    Push-Location $WebRoot
    try { npm install } finally { Pop-Location }
}

if ($Build -or -not (Test-Path -LiteralPath (Join-Path $WebDist "index.html"))) {
    Write-Host "正在构建网页..." -ForegroundColor Cyan
    Push-Location $WebRoot
    try { npm run build } finally { Pop-Location }
}

$env:AIYUYIN_WEB_PORT = "$Port"
Write-Host "AIyuyin 网页聊天：http://127.0.0.1:$Port" -ForegroundColor Green
Write-Host "按 Ctrl+C 停止服务。" -ForegroundColor DarkGray
Push-Location $ProjectRoot
try {
    & $Python -m uvicorn app.web_app:app --host 127.0.0.1 --port $Port
} finally {
    Pop-Location
}
