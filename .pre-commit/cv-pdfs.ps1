$workdir = (Get-Location).Path
$languages = ('en', 'ru')

if (-not (Test-NetConnection 127.0.0.1 -Port 8080 -InformationLevel Quiet)) {
  Write-Host -ForegroundColor Red "Unable to connect to the local server."
  exit 1
}

foreach ($lang in $languages) {
  $localpath = "src\pages\cv\files\cv_${lang}.pdf"
  Write-Host "Generating PDF for '${lang}' language..."
  Start-Process -Wait msedge "--headless --print-to-pdf=${workdir}\${localpath} http://127.0.0.1:8080/cv.html?language=${lang}&print"
  git add "$localpath"
}