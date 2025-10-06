# Google Analytics Service Account Key Management

This directory contains scripts to help you manage Google Analytics service account keys securely.

## Files Created

1. **`manage-ga-keys.sh`** - Bash script for Linux/Mac
2. **`manage-ga-keys.ps1`** - PowerShell script for Windows

## What These Scripts Do

The scripts automate the following tasks:

1. **Set GCP Project**: Configure gcloud to use the `maxadjust-website` project
2. **List Service Accounts**: Display all service accounts in the project
3. **Examine Key Files**: Read and display information from your local key files
4. **List Cloud Keys**: Show all keys associated with your service account
5. **Revoke Old Keys**: Safely delete old keys from Google Cloud (interactive)
6. **Clean Up Files**: Remove old JSON key files from your local machine (interactive)
7. **Set Environment Variables**: Export service account credentials as environment variables
8. **GA4 Access Instructions**: Provide guidance for granting service account access in Google Analytics UI

## Prerequisites

### For Both Platforms

- **Google Cloud SDK** (gcloud) must be installed
  - Windows: [Install gcloud](https://cloud.google.com/sdk/docs/install)
  - Linux/Mac: [Install gcloud](https://cloud.google.com/sdk/docs/install)

- **Authentication**: You must be authenticated with gcloud
  ```bash
  gcloud auth login
  ```

### For Linux/Mac

- **jq** command-line JSON processor must be installed
  ```bash
  # Ubuntu/Debian
  sudo apt-get install jq
  
  # MacOS
  brew install jq
  ```

### For Windows

- **PowerShell 5.1 or later** (comes with Windows 10+)
- May require **Administrator privileges** to set machine-level environment variables

## Key File Location

### Windows
The scripts expect key files to be in:
```
%USERPROFILE%\.mcp\
```
Typically: `C:\Users\YourUsername\.mcp\`

### Linux/Mac
The scripts expect key files to be in:
```
$HOME/.mcp/
```
Typically: `/home/yourname/.mcp/` or `/Users/yourname/.mcp/`

## Expected Key Files

- **`ga-key.json`** - Your current/active service account key
- **`maxadjust-website-*.json`** - Old key files to be cleaned up (optional)

## Usage

### Windows (PowerShell)

1. Open PowerShell as Administrator (for machine-level environment variables)
2. Navigate to the script directory
3. Run the script:
   ```powershell
   .\manage-ga-keys.ps1
   ```

### Linux/Mac (Bash)

1. Open Terminal
2. Navigate to the script directory
3. Run the script:
   ```bash
   ./manage-ga-keys.sh
   ```

## What the Scripts Will Do

### Automatic Steps

1. Set the GCP project to `maxadjust-website`
2. List all service accounts
3. Display information from your key files
4. List all keys for the service account `mcp-ga-analytics@maxadjust-website.iam.gserviceaccount.com`

### Interactive Steps

The scripts will prompt you for confirmation before:

1. **Deleting keys from Google Cloud**
   - You'll need to provide the key ID from the list shown
   - This permanently revokes the key in Google Cloud

2. **Deleting local JSON files**
   - You'll be asked to confirm deletion of each old key file
   - This removes the file from your local system

### Environment Variables

The scripts will set the following environment variables:

- `GA_CLIENT_EMAIL` - The service account email address
- `GA_PRIVATE_KEY` - The private key for authentication

**Windows**: Set as Machine-level variables (requires admin) or User-level variables
**Linux/Mac**: Added to `~/.bashrc` for persistence

## Service Account

The scripts manage keys for:
```
mcp-ga-analytics@maxadjust-website.iam.gserviceaccount.com
```

## GA4 Property Access (Manual Step)

After running the script, you'll need to manually grant the service account access to your GA4 property:

1. Open [Google Analytics](https://analytics.google.com/)
2. Click the **Admin** gear icon (bottom-left)
3. Select:
   - **Account**: MaxAdjust
   - **Property**: Your GA4 property
4. Under the **Property** column, click **Property access management**
5. Click the **+** button (Add users)
6. Paste the service account email: `mcp-ga-analytics@maxadjust-website.iam.gserviceaccount.com`
7. Select role:
   - **Viewer** - Read-only access
   - **Analyst** - Can query more reports
8. Click **Save**

## Troubleshooting

### "gcloud: command not found"

Install the Google Cloud SDK:
- [Installation instructions](https://cloud.google.com/sdk/docs/install)

### "You do not currently have an active account selected"

Authenticate with gcloud:
```bash
gcloud auth login
```

### "Permission denied" on Linux/Mac

Make the script executable:
```bash
chmod +x manage-ga-keys.sh
```

### PowerShell execution policy error

Run PowerShell as Administrator and execute:
```powershell
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Can't set machine-level environment variables on Windows

The script will fall back to user-level variables. Alternatively:
1. Right-click PowerShell
2. Select "Run as Administrator"
3. Re-run the script

## Security Notes

⚠️ **Important Security Considerations**

1. **Key Files**: Keep your JSON key files secure and never commit them to version control
2. **Environment Variables**: The private key is stored in environment variables - be cautious about logging or displaying these values
3. **Old Keys**: Always revoke old keys in Google Cloud before deleting the local files
4. **Backup**: Keep a secure backup of your active key file before making changes

## Support

If you encounter issues:

1. Verify all prerequisites are installed
2. Check that key files are in the correct location
3. Ensure you have the necessary GCP permissions
4. Verify you're authenticated with gcloud

## Quick Reference

### Check if environment variables are set

**Windows PowerShell**:
```powershell
$env:GA_CLIENT_EMAIL
$env:GA_PRIVATE_KEY -ne $null
```

**Linux/Mac**:
```bash
echo $GA_CLIENT_EMAIL
[ -n "$GA_PRIVATE_KEY" ] && echo "Set" || echo "Not set"
```

### List gcloud accounts

```bash
gcloud auth list
```

### Switch gcloud project

```bash
gcloud config set project maxadjust-website
```

### View current project

```bash
gcloud config get-value project
```
