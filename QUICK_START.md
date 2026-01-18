# Quick Start - Deploy to craftedmusichouse.com

Your site is ready! Follow these steps to go live.

## ✅ What's Already Done

- ✅ GitHub repository created
- ✅ GitHub Actions workflow configured
- ✅ Vite config updated for custom domain
- ✅ CNAME file created
- ✅ Code pushed to GitHub

## 🚀 Next Steps (Do These Now - 30 minutes)

### 1. Enable GitHub Pages (2 minutes)

Visit: https://github.com/mdisturbed/crafted-music-house-website/settings/pages

1. Under **Source**, select: **GitHub Actions**
2. Under **Custom domain**, enter: `craftedmusichouse.com`
3. Click **Save**
4. (Don't enable "Enforce HTTPS" yet - wait until after DNS is configured)

### 2. Add API Secret (1 minute) - Optional

If your build needs it:

Visit: https://github.com/mdisturbed/crafted-music-house-website/settings/secrets/actions

1. Click **New repository secret**
2. Name: `GEMINI_API_KEY`
3. Value: (copy from your `.env.local` file)
4. Click **Add secret**

### 3. Update DNS at Hostinger (10 minutes)

1. Log in to Hostinger: https://hpanel.hostinger.com/
2. Go to **Domains** → **craftedmusichouse.com** → **DNS / Name Servers**
3. Delete existing A records pointing to `34.120.137.41`
4. Add these 4 A records:

```
Type: A    Name: @    Points to: 185.199.108.153    TTL: 3600
Type: A    Name: @    Points to: 185.199.109.153    TTL: 3600
Type: A    Name: @    Points to: 185.199.110.153    TTL: 3600
Type: A    Name: @    Points to: 185.199.111.153    TTL: 3600
```

5. Add CNAME for www:

```
Type: CNAME    Name: www    Points to: mdisturbed.github.io    TTL: 3600
```

6. Save changes

### 4. Wait for DNS Propagation (15-60 minutes)

Check status with:
```bash
dig craftedmusichouse.com +short
```

Should return the 4 GitHub IPs.

Or check online: https://www.whatsmydns.net/#A/craftedmusichouse.com

### 5. Enable HTTPS (After DNS Propagates)

Once DNS shows the new IPs:

1. Go back to: https://github.com/mdisturbed/crafted-music-house-website/settings/pages
2. Check that **DNS check successful** appears
3. Enable: ✅ **Enforce HTTPS**
4. Click **Save**

### 6. Verify Deployment

Visit: https://craftedmusichouse.com

Your new React site should be live!

## 📚 Full Documentation

- **DNS Setup Guide:** `DNS_SETUP_GUIDE.md` (detailed troubleshooting)
- **Deployment Guide:** `DEPLOYMENT_SETUP.md`
- **How to Edit:** `HOW_TO_EDIT.md`

## 🔄 Making Updates Later

```bash
cd /Users/jay/Documents/Crafted-Music-House/site

# Make your changes
npm run dev  # Test locally

# Deploy
git add .
git commit -m "Your changes"
git push origin main

# GitHub Actions deploys automatically in ~2 minutes
```

## 🆘 Troubleshooting

**DNS not propagating?**
- Wait up to 48 hours (usually 15-30 min)
- Check https://www.whatsmydns.net/
- Clear browser cache

**Site shows 404?**
- Check GitHub Actions completed: https://github.com/mdisturbed/crafted-music-house-website/actions
- Verify CNAME file exists in repo
- Wait 2-3 minutes after deployment

**Need help?**
- Read `DNS_SETUP_GUIDE.md` for detailed troubleshooting
- Check GitHub Actions logs for build errors

---

**You're almost there! Just configure GitHub Pages and update DNS.** 🎉
