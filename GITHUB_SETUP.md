# GitHub Setup and Hosting Guide

## Step 1: Initialize Git Repository

```bash
# Navigate to the project directory
cd "C:\Users\mahes\Desktop\Kiz\create-anything\_\apps\kana-dojo-main\kana-dojo-main"

# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: NihonPath - Japanese learning platform"
```

## Step 2: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **"+"** icon in the top right corner
3. Select **"New repository"**
4. Fill in the details:
   - **Repository name**: `nihonpath` (or your preferred name)
   - **Description**: "NihonPath - Aesthetic, minimalist platform for learning Japanese"
   - **Visibility**: Choose Public or Private
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
5. Click **"Create repository"**

## Step 3: Connect Local Repository to GitHub

After creating the repository, GitHub will show you commands. Use these:

```bash
# Add the remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/nihonpath.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

## Step 4: Host on Vercel (Recommended for Next.js)

Vercel is the easiest way to host Next.js applications:

1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with your GitHub account
3. Click **"Add New Project"**
4. Import your GitHub repository (`nihonpath`)
5. Vercel will auto-detect Next.js settings
6. Configure:
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (or leave default)
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)
7. Click **"Deploy"**
8. Your site will be live at: `https://your-project-name.vercel.app`

### Environment Variables (if needed)
If you have any environment variables, add them in Vercel dashboard:
- Go to Project Settings → Environment Variables
- Add any required variables

## Alternative: Host on Netlify

1. Go to [netlify.com](https://netlify.com)
2. Sign up/Login with GitHub
3. Click **"Add new site"** → **"Import an existing project"**
4. Select your GitHub repository
5. Configure:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
6. Click **"Deploy site"**

## Alternative: Host on GitHub Pages (Requires Static Export)

For GitHub Pages, you need to configure Next.js for static export:

1. Update `next.config.ts` to enable static export
2. Build and deploy using GitHub Actions

## Useful Git Commands for Future Updates

```bash
# Check status
git status

# Add changes
git add .

# Commit changes
git commit -m "Your commit message"

# Push to GitHub
git push

# Pull latest changes
git pull
```

## Troubleshooting

### If you get authentication errors:
- Use GitHub Personal Access Token instead of password
- Or use SSH keys for authentication

### If build fails on Vercel:
- Check build logs in Vercel dashboard
- Ensure all dependencies are in package.json
- Check Node.js version compatibility

