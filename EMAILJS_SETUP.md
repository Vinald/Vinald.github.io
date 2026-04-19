# EmailJS Setup Guide - Easy Email Form Without Backend

## What is EmailJS? 📧

EmailJS is a FREE service that lets you send emails directly from your website without needing a backend server or complicated SMTP configuration. It's perfect for contact forms!

**Cost:** Completely FREE for up to 200 emails/month (more than enough for a portfolio)

---

## Step-by-Step Setup (5 minutes)

### **Step 1: Create EmailJS Account**

1. Go to: https://www.emailjs.com/
2. Click **"Sign Up"** (top right)
3. Sign up with your email or Google/GitHub account
4. Verify your email if needed

### **Step 2: Create an Email Service**

1. After login, go to **"Email Services"** (left sidebar)
2. Click **"Create New Service"**
3. Choose **"Gmail"** (or your email provider)
4. Click **"Connect Account"**
5. A popup will open - grant permission to EmailJS
6. Give your service a name (e.g., "Gmail")
7. Copy your **Service ID** (looks like: `service_abc123`)

### **Step 3: Create an Email Template**

1. Go to **"Email Templates"** (left sidebar)
2. Click **"Create New Template"**
3. Set up the template like this:

**Template Name:** Contact Form (or anything you like)

**To Email:** `okiror1vinald@gmail.com` (your email)

**Subject:** `New message from {{from_name}}`

**Email Content (HTML):**
```html
<h2>New Contact Form Submission</h2>
<p><strong>From:</strong> {{from_name}} ({{from_email}})</p>
<p><strong>Subject:</strong> {{subject}}</p>
<p><strong>Message:</strong></p>
<p>{{message}}</p>
```

4. Click **"Save"**
5. Copy your **Template ID** (looks like: `template_abc123`)

### **Step 4: Get Your Public Key**

1. Go to **"Account"** (left sidebar, bottom)
2. Look for **"Public Key"** section
3. Copy your **Public Key** (looks like: `xyz_publickey123`)

### **Step 5: Update Your Code**

1. Open `assets/script.js` in your editor
2. Find these lines (around line 167):
   ```javascript
   emailjs.init("YOUR_PUBLIC_KEY");
   ```
3. Replace `YOUR_PUBLIC_KEY` with your actual public key

4. Find these lines (around line 190-191):
   ```javascript
   emailjs.send(
       "YOUR_SERVICE_ID",
       "YOUR_TEMPLATE_ID",
   ```

5. Replace:
   - `YOUR_SERVICE_ID` with your Service ID from Step 2
   - `YOUR_TEMPLATE_ID` with your Template ID from Step 3

6. **Save the file**

### **Example (After Replacing):**

```javascript
emailjs.init("abc_xyz_your_public_key_here");

emailjs.send(
    "service_abc123def",
    "template_xyz456",
    templateParams
)
```

---

## Testing the Form 🧪

1. Go to your portfolio
2. Scroll to the **Contact** section
3. Fill out the form with:
   - Name: Your name
   - Email: Your email
   - Subject: Test message
   - Message: Testing EmailJS

4. Click **"Send Message"**
5. You should see a **success message**
6. Check your email inbox - you should receive the message!

---

## Troubleshooting 🔧

### **"Failed to send message" error:**

**Possible causes:**
1. Public key is incorrect - double-check it
2. Service ID is incorrect - double-check it
3. Template ID is incorrect - double-check it
4. Email service not connected - go to Email Services and reconnect

**Solution:**
- Check browser console (F12 > Console tab)
- Look for error messages
- Verify all three IDs match exactly

### **"Email not received":**

1. Check **spam/junk folder**
2. Make sure your **email service is connected** in EmailJS
3. Test sending a test email from EmailJS dashboard itself

### **"Cannot read property 'init' of undefined":**

This means EmailJS library didn't load. Make sure:
1. You're connected to the internet
2. The CDN link is correct in `index.html`
3. Wait a few seconds for the script to load

---

## Security Notes 🔒

- **Public Key:** It's safe to share (it's called "public" for a reason)
- **Service/Template IDs:** Also safe to share
- **Your Email:** Is visible in the JavaScript (normal for contact forms)
- **Your Data:** Emails go through EmailJS secure servers
- **No passwords stored:** Your email password never touches your website

---

## Email Quota ✉️

**Free Plan Limits:**
- 200 emails/month
- 1 email service
- 2 email templates

This is **MORE than enough** for a portfolio contact form!

**If you need more:**
- Upgrade to Pro: $10/month for unlimited emails

---

## Free Alternatives (if needed)

### **Option 1: Google Forms** (Even simpler!)
- No code needed
- Just embed a Google Form
- All responses in your Google Drive
- See GOOGLE_FORMS_GUIDE.md

### **Option 2: Basin** (Similar to EmailJS)
- Free, no setup needed
- Just change the form action

### **Option 3: Webhook.cool** (Very simple)
- Free webhooks
- Minimal setup

---

## Complete Checklist

- [ ] Created EmailJS account at emailjs.com
- [ ] Created Email Service (Gmail or other)
- [ ] Created Email Template with the HTML provided
- [ ] Copied Public Key
- [ ] Copied Service ID
- [ ] Copied Template ID
- [ ] Updated `assets/script.js` with all three IDs
- [ ] Saved the file
- [ ] Tested the contact form
- [ ] Received test email successfully

---

## What You Get

✅ **No backend server needed** - Everything runs in the browser
✅ **No SMTP configuration** - EmailJS handles everything
✅ **FREE** - 200 emails/month at no cost
✅ **Secure** - Your email is encrypted
✅ **Fast setup** - Takes about 5 minutes
✅ **Professional** - No "Powered by" link required

---

## Support

**EmailJS Support:**
- https://www.emailjs.com/docs/
- https://www.emailjs.com/faq/

**Common Questions:**
- Q: Is it really free?
  A: Yes! 200 emails/month is free forever

- Q: Can I use my own email?
  A: Yes! Works with Gmail, Outlook, custom domains, etc.

- Q: Is my email safe?
  A: Yes! It's only used for sending emails through their service

- Q: Can I change the sender email?
  A: Yes, you configure this when setting up the service

---

## Next Steps

1. Complete the 5-minute setup above
2. Test the form
3. Check your email
4. You're done! 🎉

**Questions?** Check the official docs at https://www.emailjs.com/docs/

---

**Last Updated:** April 19, 2026

Your portfolio contact form is now ready to receive messages! 🚀
