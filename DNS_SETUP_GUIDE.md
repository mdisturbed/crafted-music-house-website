# DNS Setup Guide - craftedmusichouse.com to GitHub Pages

This guide will help you migrate your domain from Hostinger Website Builder to GitHub Pages.

## 📋 Overview

- **Current:** Hostinger Website Builder (placeholder site)
- **New:** GitHub Pages (React site)
- **Domain:** craftedmusichouse.com
- **Downtime:** ~5-15 minutes during DNS propagation

---

## 🚀 Step-by-Step Setup

### Phase 1: Configure GitHub Pages (Do This First)

#### 1.1 Enable GitHub Pages

1. Go to your repository settings:
   - **https://github.com/mdisturbed/crafted-music-house-website/settings/pages**

2. Under **Source**, select:
   - **Source:** `GitHub Actions`

3. Click **Save**

#### 1.2 Add Custom Domain in GitHub

1. Still in **Settings** → **Pages**

2. Under **Custom domain**, enter:
   ```
   craftedmusichouse.com
   ```

3. Click **Save**

4. **Wait** for DNS check (it will show a warning initially - that's normal)

5. Once DNS is configured (next phase), check:
   - ✅ **Enforce HTTPS** (do this after DNS propagates)

#### 1.3 Add API Secret (Optional)

If you need the Gemini API for build:

1. Go to **Settings** → **Secrets and variables** → **Actions**
   - **https://github.com/mdisturbed/crafted-music-house-website/settings/secrets/actions**

2. Click **New repository secret**
   - **Name:** `GEMINI_API_KEY`
   - **Value:** Your API key from `.env.local`

3. Click **Add secret**

---

### Phase 2: Update DNS at Hostinger

#### 2.1 Access Hostinger DNS Settings

1. Log in to Hostinger: **https://hpanel.hostinger.com/**

2. Go to **Domains** → **craftedmusichouse.com** → **DNS / Name Servers**

#### 2.2 Remove Old Records

Delete or disable these records if they exist:
- Any **A records** pointing to `34.120.137.41`
- Any **CNAME records** pointing to Hostinger/Zyro

#### 2.3 Add GitHub Pages DNS Records

Add these **A records** (all pointing to GitHub's IPs):

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | 185.199.108.153 | 3600 |
| A | @ | 185.199.109.153 | 3600 |
| A | @ | 185.199.110.153 | 3600 |
| A | @ | 185.199.111.153 | 3600 |

Add this **CNAME record** (for www subdomain):

| Type | Name | Value | TTL |
|------|------|-------|-----|
| CNAME | www | mdisturbed.github.io | 3600 |

#### 2.4 Exact Steps in Hostinger

1. In DNS Zone editor:
   - Click **Add Record**

2. For each A record:
   - **Type:** A
   - **Name:** @ (or leave blank)
   - **Points to:** [One of the four IPs above]
   - **TTL:** 3600
   - Click **Add Record**
   - Repeat for all 4 IPs

3. For CNAME record:
   - **Type:** CNAME
   - **Name:** www
   - **Points to:** mdisturbed.github.io
   - **TTL:** 3600
   - Click **Add Record**

4. Click **Save** or **Apply Changes**

---

### Phase 3: Verification & Testing

#### 3.1 Wait for DNS Propagation

DNS changes can take **5 minutes to 48 hours** (usually 15-30 minutes).

Check propagation status:
```bash
# Check from terminal
dig craftedmusichouse.com +short

# Should show:
# 185.199.108.153
# 185.199.109.153
# 185.199.110.153
# 185.199.111.153
```

Or use online tool: **https://www.whatsmydns.net/#A/craftedmusichouse.com**

#### 3.2 Verify GitHub Pages DNS Check

1. Go back to **Settings** → **Pages** in GitHub

2. Under **Custom domain**, you should see:
   - ✅ **DNS check successful**

3. Now enable:
   - ✅ **Enforce HTTPS**

4. Click **Save**

#### 3.3 Test Your Site

1. Visit **https://craftedmusichouse.com**
2. Visit **https://www.craftedmusichouse.com** (should redirect)
3. Check that assets load correctly
4. Test on mobile

---

## 🔧 Troubleshooting

### DNS Check Fails in GitHub

**Symptoms:** GitHub shows "DNS check unsuccessful" or "Improperly configured"

**Solutions:**
1. Wait longer - DNS can take up to 48 hours
2. Verify all 4 A records are added correctly
3. Check for typos in IP addresses
4. Ensure CNAME record points to `mdisturbed.github.io` (not the full URL)
5. Clear browser cache and try incognito mode

### Site Shows 404

**Solutions:**
1. Ensure GitHub Actions deployment completed successfully
2. Check **Actions** tab for any errors
3. Verify CNAME file exists in your repository at `public/CNAME`
4. Wait 2-3 minutes after deployment

### Mixed Content Errors

**Symptoms:** Some assets don't load, browser shows security warnings

**Solutions:**
1. Ensure "Enforce HTTPS" is enabled in GitHub Pages settings
2. Check that all asset URLs in your code use HTTPS or relative paths
3. Wait for SSL certificate to provision (can take 10 minutes)

### Old Site Still Showing

**Solutions:**
1. Clear browser cache (Cmd+Shift+R on Mac)
2. Try incognito/private browsing
3. Check DNS propagation is complete
4. Flush DNS cache:
   ```bash
   sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder
   ```

---

## 📊 Verification Checklist

After setup, verify:

- [ ] `craftedmusichouse.com` loads the new React site
- [ ] `www.craftedmusichouse.com` redirects to main domain
- [ ] HTTPS works (green padlock in browser)
- [ ] All images and assets load correctly
- [ ] Music player works
- [ ] Navigation works
- [ ] Mobile responsive design displays correctly
- [ ] No console errors in browser DevTools

---

## 🔄 Deployment Process (After Setup)

Once DNS is configured, future updates are automatic:

```bash
# Make changes to your site
cd /Users/jay/Documents/Crafted-Music-House/site

# Test locally
npm run dev

# Commit and push
git add .
git commit -m "Update description"
git push origin main

# GitHub Actions automatically:
# 1. Builds your site
# 2. Deploys to GitHub Pages
# 3. Updates craftedmusichouse.com
# 4. Usually live in 2-3 minutes
```

---

## 🌐 Expected Timeline

| Step | Time |
|------|------|
| Configure GitHub Pages | 2 minutes |
| Update DNS records | 5 minutes |
| DNS propagation | 15-60 minutes |
| SSL certificate | 5-10 minutes |
| **Total** | **~30-90 minutes** |

---

## 📞 Quick Reference

### GitHub Pages IPs (A Records)
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

### CNAME Target
```
mdisturbed.github.io
```

### Domain
```
craftedmusichouse.com
```

---

## 🎯 Post-Setup Optimizations

After your site is live, consider:

1. **Performance:**
   - Add Google Analytics
   - Set up Cloudflare for CDN (optional)
   - Optimize images

2. **SEO:**
   - Add `sitemap.xml`
   - Configure `robots.txt`
   - Set up Google Search Console

3. **Monitoring:**
   - Set up Uptime monitoring
   - Enable GitHub Actions notifications

---

## 🆘 Need Help?

**DNS Issues:**
- Hostinger Support: https://www.hostinger.com/support
- Check DNS propagation: https://www.whatsmydns.net/

**GitHub Pages Issues:**
- GitHub Pages Docs: https://docs.github.com/en/pages
- GitHub Status: https://www.githubstatus.com/

**Test DNS from Terminal:**
```bash
# Check A records
dig craftedmusichouse.com

# Check CNAME
dig www.craftedmusichouse.com

# Trace DNS path
dig craftedmusichouse.com +trace
```

---

**Your React site will replace the Hostinger placeholder once DNS propagates!** 🎉
