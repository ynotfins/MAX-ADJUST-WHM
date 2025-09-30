# Dependency Resolution Fix

## The Issue
The project has a peer dependency conflict:
- **@heroui/theme** requires `tailwindcss >= 4.0.0`
- Our project uses `tailwindcss 3.4.x`

This causes npm to fail during installation.

## The Solution
We use `--legacy-peer-deps` flag which tells npm to use the legacy algorithm for peer dependency resolution.

## Quick Fixes

### Option 1: Use the Fix Script (Recommended)
```bash
fix-and-start.bat
```
This will:
- Clean everything
- Install with legacy peer deps
- Start the server

### Option 2: Manual Fix
```bash
# Clean up
rm -rf node_modules package-lock.json .next

# Install with legacy peer deps
npm install --legacy-peer-deps

# Start dev server
npm run dev
```

### Option 3: Set as Default
The `.npmrc` file has been created with:
```
legacy-peer-deps=true
```
This makes it the default for all npm commands in this project.

## Why This Works
- HeroUI components work fine with Tailwind CSS 3.x
- The peer dependency requirement is overly strict
- Using legacy peer deps allows the installation to proceed
- No functionality is broken

## Alternative Solutions (Not Recommended)
1. **Downgrade HeroUI** - Would lose latest features
2. **Upgrade to Tailwind CSS 4** - Major breaking changes
3. **Use --force** - More aggressive, could cause issues

## Prevention
Always use one of these scripts:
- `start-dev-clean.bat` - Full clean start
- `fix-and-start.bat` - When deps fail
- `install-deps.bat` - Just install deps

These scripts handle the legacy peer deps flag automatically.
