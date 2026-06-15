param(
    [string]$ServerHost = "43.204.101.72",
    [string]$ServerUser = "ubuntu",
    [string]$PemPath = "D:\eximinq-key.pem",
    [string]$FrontendRemoteDir = "/home/ubuntu/app",
    [string]$BackendRemoteDir = "/home/ubuntu/backend",
    [string]$Domain = "https://eximinq.in",
    [string]$FrontendArchiveName = "frontend-build.tgz",
    [string]$BackendArchiveName = "backend-deploy.tgz",
    [switch]$BuildFrontend,
    [switch]$IncludePdfDoc
)

$ErrorActionPreference = "Stop"

function Write-Step($message) {
    Write-Host ""
    Write-Host "==> $message" -ForegroundColor Cyan
}

function Assert-LastExitCode($message) {
    if ($LASTEXITCODE -ne 0) {
        throw $message
    }
}

function Remove-IfExists($path) {
    if (Test-Path $path) {
        Remove-Item $path -Force -Recurse
    }
}

$projectRoot = $PSScriptRoot
$backendRoot = Join-Path $projectRoot "backend"
$buildRoot = Join-Path $projectRoot "build"
$frontendArchivePath = Join-Path $projectRoot $FrontendArchiveName
$archivePath = Join-Path $backendRoot $BackendArchiveName

Set-Location $projectRoot

if (!(Test-Path $PemPath)) {
    throw "PEM file not found at: $PemPath"
}

if ($BuildFrontend) {
    Write-Step "Building frontend"
    npm run build
    Assert-LastExitCode "Frontend build failed."
}

if (!(Test-Path (Join-Path $buildRoot "index.html"))) {
    throw "Build output not found. Run 'npm run build' first or use -BuildFrontend."
}

if (!(Test-Path (Join-Path $backendRoot "server.js"))) {
    throw "backend\server.js not found."
}

Write-Step "Preparing backend archive"
Remove-IfExists $frontendArchivePath
Remove-IfExists $archivePath

Write-Step "Preparing frontend archive"
Push-Location $buildRoot
tar -czf $frontendArchivePath *
Assert-LastExitCode "Frontend archive creation failed."
Pop-Location

$backendItems = @(
    "package.json",
    "package-lock.json",
    "server.js",
    ".env",
    "routes",
    "controllers",
    "models",
    "utils",
    "services",
    "data"
)

if ($IncludePdfDoc) {
    $backendItems += "PDF_DOC"
}

$existingBackendItems = @()
foreach ($item in $backendItems) {
    $fullPath = Join-Path $backendRoot $item
    if (Test-Path $fullPath) {
        $existingBackendItems += $item
    }
}

if ($existingBackendItems.Count -eq 0) {
    throw "No backend items found to archive."
}

Push-Location $backendRoot
tar -czf $BackendArchiveName @existingBackendItems
Assert-LastExitCode "Backend archive creation failed."
Pop-Location

Write-Step "Ensuring remote directories exist"
ssh -i $PemPath "${ServerUser}@${ServerHost}" "mkdir -p '$FrontendRemoteDir' '$BackendRemoteDir'"
Assert-LastExitCode "Failed to create remote directories."

Write-Step "Uploading frontend archive"
scp -i $PemPath $frontendArchivePath "${ServerUser}@${ServerHost}:${FrontendRemoteDir}/"
Assert-LastExitCode "Frontend upload failed."

Write-Step "Uploading backend archive"
scp -i $PemPath $archivePath "${ServerUser}@${ServerHost}:${BackendRemoteDir}/"
Assert-LastExitCode "Backend archive upload failed."

$remoteCommand = @"
set -e

mkdir -p "$FrontendRemoteDir" "$BackendRemoteDir"
cd "$FrontendRemoteDir"
tar -xzf "$FrontendArchiveName"
rm -f "$FrontendArchiveName"

cd "$BackendRemoteDir"
tar -xzf "$BackendArchiveName"
rm -f "$BackendArchiveName"

npm install

if pm2 describe backend >/dev/null 2>&1; then
  pm2 restart backend
else
  pm2 start server.js --name backend
fi

pm2 save

sudo chown -R ${ServerUser}:${ServerUser} "$FrontendRemoteDir" "$BackendRemoteDir"
sudo chmod -R 755 "$FrontendRemoteDir"
sudo nginx -t
sudo systemctl restart nginx
"@

Write-Step "Running remote install and restart"
ssh -i $PemPath "${ServerUser}@${ServerHost}" $remoteCommand
Assert-LastExitCode "Remote deploy steps failed."

Write-Step "Running live verification"
$regulatoryUrl = "$Domain/foreign-trade-policy/regulatory-updates"
$gstApiUrl = "$Domain/api/gst/acts"
$dgftApiUrl = "$Domain/api/dgft/notices?type=public"

curl.exe -I $regulatoryUrl
Assert-LastExitCode "Live regulatory page HEAD check failed."

curl.exe $gstApiUrl
Assert-LastExitCode "Live GST API verification failed."

curl.exe -I $dgftApiUrl
Assert-LastExitCode "Live DGFT API verification failed."

Write-Step "Deployment completed"
Write-Host "Open $regulatoryUrl and hard refresh the page." -ForegroundColor Green
