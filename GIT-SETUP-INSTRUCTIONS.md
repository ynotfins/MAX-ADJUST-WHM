# Git Setup Instructions for MAX ADJUST Web App

## Quick Setup (Recommended)

### Step 1: Initialize Git Repository
Double-click `git-setup.bat` to:
- Initialize git repository
- Add all files
- Create initial commit

### Step 2: Create GitHub Repository
1. Go to https://github.com/new
2. Repository name: `maxadjust-web` (or your preferred name)
3. Keep it **Private** or **Public** as you prefer
4. **DO NOT** initialize with README, .gitignore, or license
5. Click "Create repository"
6. Copy the HTTPS URL (e.g., `https://github.com/ynotfins/maxadjust-web.git`)

### Step 3: Push to GitHub
Double-click `push-to-github.bat` and:
- Paste your GitHub repository URL when prompted
- Press Enter
- The script will push your code to GitHub

## Manual Setup (Alternative)

If you prefer to run commands manually, open a terminal in the project directory and run:

```bash
# Initialize git
git init

# Add all files
git add .

# Create initial commit
git commit -m "chore: initial commit (Next.js + redesign)"

# Add remote origin (replace with your URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Set main branch
git branch -M main

# Push to GitHub
git push -u origin main
```

## What's Included in the Commit

- ✅ Complete Next.js application
- ✅ Apple-inspired redesign
- ✅ Progressive Web App features
- ✅ All components and pages
- ✅ Configuration files
- ✅ Public assets and images

## Troubleshooting

### If you get a "remote origin already exists" error:
```bash
git remote remove origin
git remote add origin YOUR_URL_HERE
```

### If you need to change the commit message:
```bash
git commit --amend -m "Your new message"
```

### If you need to force push (careful!):
```bash
git push -u origin main --force
```

## Next Steps

After pushing to GitHub:
1. Your code is now safely backed up
2. You can deploy to Vercel/Netlify directly from GitHub
3. Share the repository with team members
4. Set up GitHub Actions for CI/CD if needed

---

**Created**: September 30, 2025  
**Project**: MAX ADJUST Web App Redesign
