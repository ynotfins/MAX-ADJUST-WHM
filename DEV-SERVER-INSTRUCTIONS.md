# Development Server Instructions

## Quick Start Options

### Option 1: Clean Start (Recommended)
**Use this when you want a fresh start or are experiencing issues**

Double-click: `start-dev-clean.bat`

This will:
- Delete the `.next` build folder
- Install/update all dependencies
- Start the dev server on port 3000

### Option 2: Quick Start
**Use this for fast startup when everything is already working**

Double-click: `quick-start.bat`

This will:
- Start the dev server immediately on port 3000

### Option 3: VS Code Tasks
1. Press `Ctrl+Shift+P`
2. Type "Tasks: Run Task"
3. Select either:
   - "Clean Start Dev Server" (full clean start)
   - "Quick Dev Server" (fast start)

### Option 4: Manual Commands
Open terminal in project directory and run:

```bash
# Clean start
rm -rf .next
npm install
npm run dev

# Quick start
npm run dev
```

## Server Details

- **URL**: http://localhost:3000
- **Port**: 3000 (configured in package.json)
- **Hot Reload**: Enabled (changes appear instantly)
- **Stop Server**: Press `Ctrl+C` in the terminal

## Troubleshooting

### If the server won't start:
1. Make sure no other process is using port 3000
2. Run the clean start script
3. Check that Node.js is installed: `node --version`

### If you see module errors:
1. Delete `node_modules` folder
2. Delete `package-lock.json` 
3. Run `start-dev-clean.bat`

### To change the port:
Edit `package.json` and change the port number in:
```json
"dev": "next dev -p 3000"
```

## Features Available in Dev Mode

- ✅ Hot Module Replacement (HMR)
- ✅ Error overlay
- ✅ Fast refresh
- ✅ TypeScript checking
- ✅ PWA features (service worker, offline mode)
- ✅ All routes and pages

---

**Project**: MAX ADJUST Web App  
**Framework**: Next.js 15.1.6  
**Created**: September 30, 2025
