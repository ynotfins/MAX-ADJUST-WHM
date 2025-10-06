# Script to manage Google Analytics service account keys
# PowerShell version for Windows

Write-Host "==================================================" -ForegroundColor Cyan
Write-Host "Google Analytics Service Account Key Management" -ForegroundColor Cyan
Write-Host "==================================================" -ForegroundColor Cyan
Write-Host ""

# 1) Pick the correct GCP project
Write-Host "Step 1: Setting GCP project..." -ForegroundColor Yellow
gcloud config set project maxadjust-website
gcloud config get-value project
Write-Host ""

# 2) See your service account(s) and keys
Write-Host "Step 2: Listing service accounts..." -ForegroundColor Yellow
gcloud iam service-accounts list --format="table[box](email, displayName)"
Write-Host ""

Write-Host "Examining key files..." -ForegroundColor Yellow
$mcpDir = "$env:USERPROFILE\.mcp"

# Check if directory exists
if (-not (Test-Path $mcpDir)) {
    Write-Host "Error: Directory $mcpDir not found" -ForegroundColor Red
    exit 1
}

# Find the key ID inside each JSON on disk
Write-Host ""
Write-Host "Contents of ga-key.json:" -ForegroundColor Green
$gaKeyPath = "$mcpDir\ga-key.json"
if (Test-Path $gaKeyPath) {
    $json = Get-Content $gaKeyPath -Raw | ConvertFrom-Json
    Write-Host "  client_email: $($json.client_email)"
    Write-Host "  private_key_id: $($json.private_key_id)"
} else {
    Write-Host "File not found: $gaKeyPath" -ForegroundColor Red
}

Write-Host ""
Write-Host "Contents of maxadjust-website-*.json files:" -ForegroundColor Green
$oldFiles = Get-ChildItem "$mcpDir\maxadjust-website-*.json" -ErrorAction SilentlyContinue
if ($oldFiles) {
    foreach ($file in $oldFiles) {
        Write-Host "File: $($file.FullName)"
        $json = Get-Content $file.FullName -Raw | ConvertFrom-Json
        Write-Host "  client_email: $($json.client_email)"
        Write-Host "  private_key_id: $($json.private_key_id)"
        Write-Host ""
    }
} else {
    Write-Host "No old maxadjust-website-*.json files found"
}

Write-Host ""
Write-Host "Copy the private_key_id of the old file (if any)" -ForegroundColor Cyan
Write-Host ""

# Set the service account email
$sa = "mcp-ga-analytics@maxadjust-website.iam.gserviceaccount.com"

Write-Host "Listing keys for service account: $sa" -ForegroundColor Yellow
gcloud iam service-accounts keys list --iam-account $sa --format="table[box](keyId, validBeforeTime)"
Write-Host ""

# 3) Revoke the old key in the cloud (safe cleanup)
Write-Host "Step 3: Revoke old keys" -ForegroundColor Yellow
Write-Host "To revoke a key, copy the keyId from the list above and run:" -ForegroundColor Cyan
Write-Host "    gcloud iam service-accounts keys delete <KEY_ID> --iam-account `$sa --quiet" -ForegroundColor Gray
Write-Host ""

$deleteKey = Read-Host "Do you want to delete an old key now? (y/n)"
if ($deleteKey -eq 'y' -or $deleteKey -eq 'Y') {
    $keyId = Read-Host "Enter the key ID to delete"
    if ($keyId) {
        Write-Host "Deleting key: $keyId" -ForegroundColor Yellow
        gcloud iam service-accounts keys delete $keyId --iam-account $sa --quiet
        Write-Host "Key deleted successfully" -ForegroundColor Green
    } else {
        Write-Host "No key ID provided, skipping deletion" -ForegroundColor Yellow
    }
}
Write-Host ""

# After revoking the old key, remove old JSON files
Write-Host "Step 4: Cleaning up old JSON files" -ForegroundColor Yellow
$oldFiles = Get-ChildItem "$mcpDir\maxadjust-website-*.json" -ErrorAction SilentlyContinue
if ($oldFiles) {
    foreach ($file in $oldFiles) {
        Write-Host "Found old file: $($file.FullName)"
        $delete = Read-Host "Delete this file? (y/n)"
        if ($delete -eq 'y' -or $delete -eq 'Y') {
            Remove-Item $file.FullName -Force
            Write-Host "Deleted: $($file.FullName)" -ForegroundColor Green
        }
    }
} else {
    Write-Host "No old files to clean up"
}
Write-Host ""

# 4) Keep and standardize the current key
Write-Host "Step 5: Standardizing key filename" -ForegroundColor Yellow
if (Test-Path $gaKeyPath) {
    Write-Host "Key file already named correctly: $gaKeyPath" -ForegroundColor Green
} else {
    Write-Host "Warning: $gaKeyPath not found" -ForegroundColor Red
}
Write-Host ""

# 5) Set env vars from the JSON (no manual copy/paste of the private key)
Write-Host "Step 6: Setting environment variables" -ForegroundColor Yellow

if (Test-Path $gaKeyPath) {
    $json = Get-Content $gaKeyPath -Raw | ConvertFrom-Json
    
    Write-Host "Extracted from $gaKeyPath:" -ForegroundColor Cyan
    Write-Host "  client_email: $($json.client_email)"
    Write-Host "  private_key: [REDACTED]"
    Write-Host ""
    
    # Set machine-level environment variables (requires admin privileges)
    Write-Host "Setting machine-level environment variables..." -ForegroundColor Yellow
    Write-Host "(This requires administrator privileges)" -ForegroundColor Gray
    
    try {
        [Environment]::SetEnvironmentVariable('GA_CLIENT_EMAIL', $json.client_email, 'Machine')
        [Environment]::SetEnvironmentVariable('GA_PRIVATE_KEY',  $json.private_key,  'Machine')
        Write-Host "Machine-level environment variables set successfully" -ForegroundColor Green
    } catch {
        Write-Host "Failed to set machine-level variables (may need admin privileges)" -ForegroundColor Red
        Write-Host "Setting user-level environment variables instead..." -ForegroundColor Yellow
        [Environment]::SetEnvironmentVariable('GA_CLIENT_EMAIL', $json.client_email, 'User')
        [Environment]::SetEnvironmentVariable('GA_PRIVATE_KEY',  $json.private_key,  'User')
        Write-Host "User-level environment variables set successfully" -ForegroundColor Green
    }
    
    # Also load into this session immediately
    $env:GA_CLIENT_EMAIL = $json.client_email
    $env:GA_PRIVATE_KEY  = $json.private_key
    
    # Quick check
    Write-Host ""
    Write-Host "Quick check:" -ForegroundColor Cyan
    Write-Host "  GA_CLIENT_EMAIL: $env:GA_CLIENT_EMAIL"
    Write-Host "  GA_PRIVATE_KEY set: $(if ($env:GA_PRIVATE_KEY) { 'true' } else { 'false' })"
} else {
    Write-Host "Error: Key file not found at $gaKeyPath" -ForegroundColor Red
}
Write-Host ""

# 6) GA4 property access (one-time UI step)
Write-Host "==================================================" -ForegroundColor Cyan
Write-Host "Step 7: GA4 Property Access (Manual UI Step)" -ForegroundColor Cyan
Write-Host "==================================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Service-account access can't be granted via gcloud; it must be in the GA UI:" -ForegroundColor Yellow
Write-Host ""
Write-Host "1. Open Google Analytics → bottom-left Admin (gear)"
Write-Host "2. At the top, select Account: MaxAdjust and Property: your GA4 property"
Write-Host "3. Under Property column → Property access management → + → Add users"
Write-Host "4. Paste the service account email: $sa"
Write-Host "5. Role: Viewer (or Analyst if you want to query more reports)"
Write-Host "6. Save"
Write-Host ""
Write-Host "If you can't find 'Property access management', you might be in the wrong" -ForegroundColor Gray
Write-Host "property. Use the Property selector at the top of Admin to switch." -ForegroundColor Gray
Write-Host ""
Write-Host "==================================================" -ForegroundColor Cyan
Write-Host "Script completed!" -ForegroundColor Green
Write-Host "==================================================" -ForegroundColor Cyan
