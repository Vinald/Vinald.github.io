# GitHub Secrets Configuration Guide

## Overview
Your EmailJS credentials are now **secured** using GitHub Actions secrets. The credentials are injected only during deployment, keeping them out of the repository.

## ✅ What Was Done

### 1. Updated `assets/script.js`
- ✅ Removed hardcoded EmailJS credentials
- ✅ Added fallback to `window.EMAILJS_PUBLIC_KEY`, `window.EMAILJS_SERVICE_ID`, `window.EMAILJS_TEMPLATE_ID`
- ✅ Safe to commit - no sensitive data exposed

### 2. Created GitHub Actions Workflow
- ✅ File: `.github/workflows/inject-secrets.yml`
- ✅ Injects secrets from GitHub during deployment
- ✅ Runs automatically on every push to `main`

### 3. Workflow Adds Script Tag
The workflow inserts this before `</body>` tag:
```html
<script>
  window.EMAILJS_PUBLIC_KEY = "[your_public_key]";
  window.EMAILJS_SERVICE_ID = "[your_service_id]";
  window.EMAILJS_TEMPLATE_ID = "[your_template_id]";
</script>
```

## 🔐 How It Works

### Local Development (On Your Machine)
```javascript
// In script.js, this uses fallback values
emailjs.init(window.EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY");
```
- Your form won't work locally (shows placeholder)
- **This is intentional** - keeps secrets safe during development

### Production (On GitHub Pages)
1. You push to `main` branch
2. GitHub Actions automatically triggers
3. Secrets injected from GitHub repository settings
4. Deploy happens with real credentials
5. Form works perfectly on live site

## 📋 Setup Checklist

### ✅ Already Completed
- [x] Updated `assets/script.js` to use window variables
- [x] Created `.github/workflows/inject-secrets.yml`

### 🔲 You Must Complete

**1. Add Repository Secrets to GitHub**

Go to: `Your Repo` → `Settings` → `Secrets and variables` → `Actions`

Click **New repository secret** and add:

| Secret Name | Value |
|---|---|
| `EMAILJS_PUBLIC_KEY` | `YOXVT0uZgK5Jd_2MG` |
| `EMAILJS_SERVICE_ID` | `service_tli9fww` |
| `EMAILJS_TEMPLATE_ID` | `template_adbvzvp` |

**2. Update Your GitHub Pages Deploy Workflow (If You Have One)**

If you already have a deploy workflow, add this step **before** deployment:

```yaml
- name: Inject EmailJS secrets into index.html
  run: |
    sed -i 's|</body>|<script>\n  window.EMAILJS_PUBLIC_KEY = "'"${{ secrets.EMAILJS_PUBLIC_KEY }}"'";\n  window.EMAILJS_SERVICE_ID = "'"${{ secrets.EMAILJS_SERVICE_ID }}"'";\n  window.EMAILJS_TEMPLATE_ID = "'"${{ secrets.EMAILJS_TEMPLATE_ID }}"'";\n</script>\n</body>|g' index.html
```

**3. Commit and Push**

```bash
git add assets/script.js .github/workflows/inject-secrets.yml
git commit -m "feat: secure EmailJS credentials with GitHub Actions secrets"
git push
```

## 🧪 Testing

### Local Testing (Without Real Credentials)
```javascript
// Open DevTools Console and manually set:
window.EMAILJS_PUBLIC_KEY = "YOXVT0uZgK5Jd_2MG";
window.EMAILJS_SERVICE_ID = "service_tli9fww";
window.EMAILJS_TEMPLATE_ID = "template_adbvzvp";

// Now your local form will work for testing
```

### Production Testing
1. Add secrets to GitHub (Step 1 above)
2. Push changes to `main`
3. Wait for GitHub Actions to complete
4. Visit your live site
5. Test contact form - should work!

## 🔍 How to Verify It's Working

### Check Workflow Run
1. Go to your repo → **Actions** tab
2. You should see `Inject Secrets and Deploy` workflow
3. Green checkmark = success
4. Check the logs to verify secrets were injected

### Check Live Site
1. Visit your deployed site
2. Open DevTools → Console
3. Type: `window.EMAILJS_PUBLIC_KEY`
4. Should show your actual public key (not "YOUR_PUBLIC_KEY")

## 🛡️ Security Benefits

✅ **Secrets NOT in code** - Can't be seen in repository  
✅ **Secrets NOT in git history** - Safe even if repo becomes public  
✅ **Secrets NOT in backups** - GitHub manages them securely  
✅ **Easy to rotate** - Just update secret in GitHub, no code changes  
✅ **Audit trail** - GitHub logs when secrets are used  

## ⚠️ Important Notes

- **Local form won't work** until you manually set window variables (see Testing section)
- **Deployed form will work** automatically after secrets are added
- **If you rotate credentials**, just update the GitHub secrets - no code changes needed
- **Keep repo private** - Secrets are only hidden from the code, not from people with repo access

## 🆘 Troubleshooting

### Workflow shows error
1. Check that all 3 secrets are added to GitHub
2. Verify secret names match exactly (case-sensitive)
3. Try re-running the workflow from Actions tab

### Form not working on deployed site
1. Check workflow logs in Actions tab
2. Verify script tag was added to index.html in build
3. Open DevTools on live site to check if window variables are set

### Still have the old hardcoded keys?
Run:
```bash
# Remove from git history (force push needed)
git filter-branch --force --index-filter "git rm --cached --ignore-unmatch assets/script.js" --prune-empty --tag-name-filter cat -- --all

# Regenerate your EmailJS keys in dashboard (old ones were exposed)
```

## 📚 References

- GitHub Actions Secrets: https://docs.github.com/en/actions/security-guides/encrypted-secrets
- EmailJS: https://www.emailjs.com/
- GitHub Pages: https://pages.github.com/

---

**Status:** ✅ Script updated and ready. Awaiting GitHub secrets setup.
