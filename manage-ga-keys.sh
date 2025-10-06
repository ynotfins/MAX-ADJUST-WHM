#!/bin/bash

# Script to manage Google Analytics service account keys
# Linux/bash version of the PowerShell commands

set -e  # Exit on error

echo "=================================================="
echo "Google Analytics Service Account Key Management"
echo "=================================================="
echo ""

# 1) Pick the correct GCP project
echo "Step 1: Setting GCP project..."
gcloud config set project maxadjust-website
gcloud config get-value project
echo ""

# 2) See your service account(s) and keys
echo "Step 2: Listing service accounts..."
gcloud iam service-accounts list --format="table[box](email, displayName)"
echo ""

echo "Examining key files..."
# Linux equivalent of $env:USERPROFILE is $HOME
MCP_DIR="$HOME/.mcp"

# Check if directory exists
if [ ! -d "$MCP_DIR" ]; then
    echo "Error: Directory $MCP_DIR not found"
    exit 1
fi

# Find the key ID inside each JSON on disk
echo ""
echo "Contents of ga-key.json:"
if [ -f "$MCP_DIR/ga-key.json" ]; then
    jq -r '. | "client_email: \(.client_email)\nprivate_key_id: \(.private_key_id)"' "$MCP_DIR/ga-key.json"
else
    echo "File not found: $MCP_DIR/ga-key.json"
fi

echo ""
echo "Contents of maxadjust-website-*.json files:"
for file in "$MCP_DIR"/maxadjust-website-*.json; do
    if [ -f "$file" ]; then
        echo "File: $file"
        jq -r '. | "client_email: \(.client_email)\nprivate_key_id: \(.private_key_id)"' "$file"
        echo ""
    fi
done

echo ""
echo "Copy the private_key_id of the old file (if any maxadjust-website-*.json exists)"
echo ""

# Set the service account email
SA="mcp-ga-analytics@maxadjust-website.iam.gserviceaccount.com"

echo "Listing keys for service account: $SA"
gcloud iam service-accounts keys list --iam-account "$SA" --format="table[box](keyId, validBeforeTime)"
echo ""

# 3) Revoke the old key in the cloud (safe cleanup)
echo "Step 3: Revoke old keys"
echo "To revoke a key, copy the keyId from the list above and run:"
echo "    gcloud iam service-accounts keys delete <KEY_ID> --iam-account $SA --quiet"
echo ""
echo "For example, if the old key ID is abc123xyz:"
echo "    gcloud iam service-accounts keys delete abc123xyz --iam-account $SA --quiet"
echo ""
read -p "Do you want to delete an old key now? (y/n) " -n 1 -r
echo ""
if [[ $REPLY =~ ^[Yy]$ ]]; then
    read -p "Enter the key ID to delete: " KEY_ID
    if [ -n "$KEY_ID" ]; then
        echo "Deleting key: $KEY_ID"
        gcloud iam service-accounts keys delete "$KEY_ID" --iam-account "$SA" --quiet
        echo "Key deleted successfully"
    else
        echo "No key ID provided, skipping deletion"
    fi
fi
echo ""

# After revoking the old key, remove old JSON files
echo "Step 4: Cleaning up old JSON files"
for file in "$MCP_DIR"/maxadjust-website-*.json; do
    if [ -f "$file" ]; then
        echo "Found old file: $file"
        read -p "Delete this file? (y/n) " -n 1 -r
        echo ""
        if [[ $REPLY =~ ^[Yy]$ ]]; then
            rm -f "$file"
            echo "Deleted: $file"
        fi
    fi
done
echo ""

# 4) Keep and standardize the current key
echo "Step 5: Standardizing key filename"
if [ -f "$MCP_DIR/ga-key.json" ]; then
    echo "Key file already named correctly: $MCP_DIR/ga-key.json"
else
    echo "Warning: $MCP_DIR/ga-key.json not found"
fi
echo ""

# 5) Set env vars from the JSON (no manual copy/paste of the private key)
echo "Step 6: Setting environment variables"
GA_KEY_PATH="$MCP_DIR/ga-key.json"

if [ -f "$GA_KEY_PATH" ]; then
    # Extract values using jq
    GA_CLIENT_EMAIL=$(jq -r '.client_email' "$GA_KEY_PATH")
    GA_PRIVATE_KEY=$(jq -r '.private_key' "$GA_KEY_PATH")
    
    # For bash, we'll add to .bashrc or .profile
    # You can also export them to /etc/environment for system-wide access
    
    echo "Extracted from $GA_KEY_PATH:"
    echo "  client_email: $GA_CLIENT_EMAIL"
    echo "  private_key: [REDACTED]"
    echo ""
    
    # Export for current session
    export GA_CLIENT_EMAIL="$GA_CLIENT_EMAIL"
    export GA_PRIVATE_KEY="$GA_PRIVATE_KEY"
    
    # Add to ~/.bashrc for persistence
    if ! grep -q "GA_CLIENT_EMAIL" ~/.bashrc; then
        echo "" >> ~/.bashrc
        echo "# Google Analytics service account credentials" >> ~/.bashrc
        echo "export GA_CLIENT_EMAIL='$GA_CLIENT_EMAIL'" >> ~/.bashrc
        echo "export GA_PRIVATE_KEY='$GA_PRIVATE_KEY'" >> ~/.bashrc
        echo "Added environment variables to ~/.bashrc"
    else
        echo "Environment variables already exist in ~/.bashrc"
        echo "You may want to update them manually if they've changed"
    fi
    
    # Quick check
    echo ""
    echo "Quick check:"
    echo "  GA_CLIENT_EMAIL: $GA_CLIENT_EMAIL"
    echo "  GA_PRIVATE_KEY set: $([ -n "$GA_PRIVATE_KEY" ] && echo "true" || echo "false")"
else
    echo "Error: Key file not found at $GA_KEY_PATH"
fi
echo ""

# 6) GA4 property access (one-time UI step)
echo "=================================================="
echo "Step 7: GA4 Property Access (Manual UI Step)"
echo "=================================================="
echo ""
echo "Service-account access can't be granted via gcloud; it must be in the GA UI:"
echo ""
echo "1. Open Google Analytics → bottom-left Admin (gear)"
echo "2. At the top, select Account: MaxAdjust and Property: your GA4 property"
echo "3. Under Property column → Property access management → + → Add users"
echo "4. Paste the service account email: $SA"
echo "5. Role: Viewer (or Analyst if you want to query more reports)"
echo "6. Save"
echo ""
echo "If you can't find 'Property access management', you might be in the wrong"
echo "property. Use the Property selector at the top of Admin to switch."
echo ""
echo "=================================================="
echo "Script completed!"
echo "=================================================="
