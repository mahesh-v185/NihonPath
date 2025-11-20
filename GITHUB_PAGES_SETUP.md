# GitHub Pages Setup Guide

## Overview

This guide will help you deploy your NihonPath Next.js application to GitHub Pages.

## Prerequisites

- Your repository is already on GitHub
- You have push access to the repository

## Step 1: Enable GitHub Pages

1. Go to your repository on GitHub: https://github.com/mahesh-v185/NihonPath
2. Click on **Settings** (top menu)
3. Scroll down to **Pages** in the left sidebar
4. Under **Build and deployment**, select:
   - **Source**: `GitHub Actions`
5. The workflow will automatically appear after you push the changes

## Step 2: Configuration Already Done

The following has been configured for you:

✅ **Next.js Static Export** - `next.config.ts` is configured for static export
✅ **GitHub Actions Workflow** - `.github/workflows/pages.yml` is ready
✅ **Build Output** - Configured to output to `out` directory

## Step 3: Push and Deploy

The workflow will automatically run when you push to the `main` branch:

```bash
git add .
git commit -m "Configure GitHub Pages deployment"
git push origin main
```

## Step 4: Monitor Deployment

1. Go to your repository on GitHub
2. Click on the **Actions** tab
3. You'll see the "Deploy to GitHub Pages" workflow running
4. Wait for it to complete (usually 2-5 minutes)

## Step 5: Access Your Site

Once deployment is complete, your site will be available at:
- **URL**: `https://mahesh-v185.github.io/NihonPath/`

**Note:** If you want a custom domain, you can configure it in:
- Repository Settings → Pages → Custom domain

## Important Notes

### Base Path Configuration

If you want to use a custom domain or deploy to the root of GitHub Pages:
- The app is currently configured for root deployment
- If you need a subdirectory (e.g., `/NihonPath`), update `next.config.ts`:

```typescript
const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/NihonPath', // Add this if deploying to subdirectory
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};
```

### Automatic Deployments

- Every push to `main` branch will trigger a new deployment
- You can also manually trigger from the Actions tab

### Troubleshooting

If the deployment fails:
1. Check the Actions tab for error messages
2. Ensure `npm run build` works locally
3. Verify all dependencies are in `package.json`
4. Check that `out` directory is generated after build

## Alternative: Deploy to Root Domain

If you want to deploy to `https://mahesh-v185.github.io` (without `/NihonPath`):
1. Rename your repository to match your GitHub username (e.g., `mahesh-v185.github.io`)
2. The workflow will automatically deploy to the root

## Next Steps

After deployment:
- Your site will be live at the GitHub Pages URL
- Updates will auto-deploy on every push to `main`
- You can add a custom domain in repository settings

