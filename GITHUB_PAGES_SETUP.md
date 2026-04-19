# GitHub Pages Configuration - Fix Deployment Error

## Problem

Your GitHub Actions workflow failed with:
```
remote: Permission to Vinald/Vinald.github.io.git denied to github-actions[bot].
```

## Solution

You need to **enable GitHub Pages** to use GitHub Actions for deployment.

---

## ✅ Step 1: Configure GitHub Pages

1. Go to: **https://github.com/Vinald/Vinald.github.io/settings/pages**
2. Under **Build and deployment**:
   - **Source:** Change to **GitHub Actions** (if not already selected)
3. Click **Save**

This tells GitHub to use the Actions workflow for deployment instead of deploying from a branch.

---

## ✅ Step 2: Verify Secrets Are Added

Your workflow needs these 3 secrets. Go to:
**Settings** → **Secrets and variables** → **Actions**

Add or verify:

| Secret Name | Value |
| --- | --- |
| `EMAILJS_PUBLIC_KEY` | `YOXVT0uZgK5Jd_2MG` |
| `EMAILJS_SERVICE_ID` | `service_tli9fww` |
| `EMAILJS_TEMPLATE_ID` | `template_adbvzvp` |

---

## ✅ Step 3: Run the Workflow

Once GitHub Pages is configured, go to the **Actions** tab and:

1. Click **Inject Secrets and Deploy** workflow
2. Click **Run workflow** → **Run workflow**

Or make a commit and push:
```bash
git add .
git commit -m "trigger: GitHub Actions deploy"
git push
```

---

## 🎯 Expected Result

After the workflow succeeds:

1. ✅ Green checkmark in Actions tab
2. ✅ Site deployed to: https://Vinald.github.io
3. ✅ Contact form works with EmailJS secrets injected
4. ✅ Open DevTools console and verify: `window.EMAILJS_PUBLIC_KEY` shows your actual key

---

## 📋 Workflow Steps (What Happens)

```
Push to main
    ↓
GitHub Actions triggered
    ↓
Checkout your code
    ↓
Inject secrets into index.html (via sed command)
    ↓
Upload as GitHub Pages artifact
    ↓
Deploy to GitHub Pages
    ↓
✅ Live site: https://Vinald.github.io
```

---

## 🔐 How Secrets Stay Safe

- ✅ Never committed to repository
- ✅ Only injected during deployment
- ✅ Hidden from all but repository owners
- ✅ Injected into HTML at deploy-time, not in source code
- ✅ Easy to rotate without code changes

---

## ❓ Troubleshooting

| Issue | Fix |
| --- | --- |
| **Workflow still fails** | Verify GitHub Pages source is set to "GitHub Actions" |
| **Secrets not injected** | Confirm all 3 secrets are added in Settings → Secrets |
| **Site shows old content** | Wait 1-2 minutes for deployment to complete |
| **Contact form not working** | Open DevTools console and check `window.EMAILJS_*` variables |

---

## 📚 Quick Reference

**GitHub Pages Settings:**
- https://github.com/Vinald/Vinald.github.io/settings/pages

**Repository Secrets:**
- https://github.com/Vinald/Vinald.github.io/settings/secrets/actions

**Actions Workflows:**
- https://github.com/Vinald/Vinald.github.io/actions

**Live Site:**
- https://Vinald.github.io

---

## ✅ Checklist

- [ ] GitHub Pages source set to "GitHub Actions"
- [ ] All 3 EmailJS secrets added to repository
- [ ] Workflow triggered (manually or via push)
- [ ] Workflow shows ✅ green checkmark
- [ ] Deploy step succeeded
- [ ] Site loads at https://Vinald.github.io
- [ ] DevTools shows injected secrets
- [ ] Contact form sends emails successfully

Once all items are checked, your portfolio is fully deployed and functional! 🚀
