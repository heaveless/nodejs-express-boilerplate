Write-Host "Hello, World!"

$nodeBuild = {npm run build}
$dockerBuild = {docker-compose up --build}

Invoke-Expression $node
Invoke-Expression $dockerBuild