# Portfolio Deployment Guide

## GitHub Deployment

### Option 1: GitHub Desktop (Easiest)

1. Download [GitHub Desktop](https://desktop.github.com/)
2. Sign in with your GitHub account
3. Click "Add" → "Add Existing Repository"
4. Select folder: `d:\reactjs\myportfolio24`
5. Publish repository with name `myportfolio24`
6. Choose "Public" visibility → Click "Publish"

### Option 2: Command Line (If Git is installed)

```bash
cd d:\reactjs\myportfolio24

git init
git add .
git commit -m "Initial portfolio commit"

git remote add origin https://github.com/YOUR_USERNAME/myportfolio24.git
git branch -M main
git push -u origin main
```

### Option 3: Manual Upload

1. Create repo at [github.com/new](https://github.com/new) (name: `myportfolio24`, Public)
2. On your repo page, click "Add file" → "Upload files"
3. Drag and drop all files from `d:\reactjs\myportfolio24` **except**:
   - `node_modules/` folder
   - `dist/` folder
   - Any `.env` files

---

## Render Deployment (Free Hosting)

### Step 1: Connect GitHub Repo

1. Go to [render.com](https://render.com) and sign up (use GitHub login)
2. Click "New +" → "Static Site"
3. Connect your GitHub account
4. Select your `myportfolio24` repository
5. Click "Connect"

### Step 2: Configure Build Settings

| Setting | Value |
|---------|-------|
| **Name** | myportfolio24 |
| **Branch** | main |
| **Build Command** | `npm install && npm run build` |
| **Publish Directory** | `dist` |

### Step 3: Environment Variables (if needed)

If you add any API keys later, add them in Render Dashboard → Environment

### Step 4: Deploy

Click "Create Static Site"

Render will:
1. Install dependencies
2. Run `npm run build` (creates `dist/` folder)
3. Deploy the `dist/` contents
4. Give you a free URL: `https://myportfolio24.onrender.com`

---

## Troubleshooting

### Build Fails on Render?
- Check that `vite.config.js` has proper base path
- Verify `package.json` has `"build": "vite build"`

### Large Files?
- All your assets are under 60 KB total - you're good!
- If adding images in future, keep them under 500 KB each
- Use [TinyPNG](https://tinypng.com/) to compress images

### Git Push Rejected?
- If repo exists: `git pull origin main` first, then push
- Or force push: `git push origin main --force` (⚠️ overwrites remote)

---

## Custom Domain (Optional)

1. Buy domain from Namecheap/GoDaddy
2. In Render dashboard: Settings → Custom Domain
3. Add your domain and follow DNS instructions

## Automatic Deploys

Every time you push to GitHub `main` branch, Render automatically redeploys!
