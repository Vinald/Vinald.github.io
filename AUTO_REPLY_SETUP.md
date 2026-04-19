# Auto-Reply Email Setup Guide

## Overview
This guide shows you how to set up an automated auto-reply email that sends to users who contact you through your portfolio contact form.

## Prerequisites
- ✅ EmailJS account set up (from EMAILJS_SETUP.md)
- ✅ Email service configured in EmailJS
- ✅ Main contact template created

## Step-by-Step Setup

### Step 1: Copy the Auto-Reply Template
The file `AUTO_REPLY_EMAIL_TEMPLATE.html` contains your professional auto-reply email design.

**Template Variables:**
- `{{from_name}}` - Automatically replaced with the visitor's name
- `{{subject}}` - Automatically replaced with their message subject
- Your contact details are already populated

### Step 2: Create the Auto-Reply Template in EmailJS

1. **Log in to EmailJS** → Go to **Email Templates**

2. **Click "Create New Template"**

3. **Fill in the template details:**
   - **Template Name:** `auto_reply_template` (or similar)
   - **Subject:** `✓ We Received Your Message - {{from_name}}`
   - **Content Type:** HTML

4. **Copy the HTML Content:**
   - Open `AUTO_REPLY_EMAIL_TEMPLATE.html` in a text editor
   - Copy ALL the content (from `<div>` to `</div>`)
   - Paste it into the EmailJS template content area

5. **Click Save Template**

### Step 3: Update Your Contact Form to Send Auto-Reply

The auto-reply is triggered automatically by creating a second EmailJS send in your form handler.

**In `assets/script.js`, update the success handler:**

```javascript
// After successful contact form submission
emailjs.send(
    "YOUR_SERVICE_ID",
    "YOUR_AUTO_REPLY_TEMPLATE_ID",  // NEW - Use the auto-reply template ID
    {
        to_email: document.getElementById('email').value,  // Send TO the user
        from_name: document.getElementById('name').value,
        subject: document.getElementById('subject').value
    }
).then(function() {
    console.log('Auto-reply sent successfully!');
}).catch(function(error) {
    console.error('Auto-reply failed:', error);
    // Don't show error to user - auto-reply failure shouldn't block their message
});
```

### Step 4: Get Your Auto-Reply Template ID

1. In EmailJS → **Email Templates**
2. Click on your auto-reply template
3. Copy the **Template ID** (top of template)
4. Update `assets/script.js` with this ID

## Complete Code Example

Here's what your full form submission handler should look like:

```javascript
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const submitBtn = document.getElementById('submitBtn');
    const formStatus = document.getElementById('formStatus');
    
    // Disable button and show loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm mr-2"></span>Sending...';
    
    const templateParams = {
        to_email: "okiror1vinald@gmail.com",
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    // Send main message
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams)
        .then(function() {
            // Send auto-reply to user
            emailjs.send(
                "YOUR_SERVICE_ID",
                "YOUR_AUTO_REPLY_TEMPLATE_ID",
                {
                    to_email: templateParams.from_email,
                    from_name: templateParams.from_name,
                    subject: templateParams.subject
                }
            ).catch(err => console.error('Auto-reply failed:', err));
            
            // Show success message
            formStatus.innerHTML = '<div class="alert alert-success">✓ Message sent successfully! Check your email for our auto-reply.</div>';
            document.getElementById('contactForm').reset();
            submitBtn.disabled = false;
            submitBtn.innerHTML = 'Send Message';
        })
        .catch(function(error) {
            formStatus.innerHTML = '<div class="alert alert-danger">✗ Failed to send message: ' + error.message + '</div>';
            submitBtn.disabled = false;
            submitBtn.innerHTML = 'Send Message';
        });
});
```

## Customizing the Auto-Reply Template

You can edit the auto-reply template anytime in EmailJS:

**Things you can customize:**
- ✏️ Response time ("24-48 hours" → your preferred timeframe)
- ✏️ Contact information (email/phone already populated)
- ✏️ Signature
- ✏️ Color scheme (change `#ffc107` for different accent color)
- ✏️ Welcome message
- ✏️ Additional information or instructions

**Don't change these variables:**
- `{{from_name}}` - User's name
- `{{subject}}` - Their message subject

## Testing

1. **Fill out your contact form** with test data
2. **Submit the form**
3. **Check two emails:**
   - ✅ Your inbox (okiror1vinald@gmail.com) → Your message
   - ✅ User's email → Auto-reply

## Troubleshooting

| Issue | Solution |
|-------|----------|
| **Auto-reply not sending** | Check Template ID is correct in script.js |
| **User's email not in auto-reply** | Make sure `to_email: templateParams.from_email` is set |
| **Template not appearing** | Verify HTML content copied correctly from file |
| **Styling looks broken** | EmailJS supports most inline styles; some email clients have limits |

## Quick Reference

| Item | Where to Find |
|------|---------------|
| **Auto-reply template file** | `AUTO_REPLY_EMAIL_TEMPLATE.html` |
| **Setup code** | `assets/script.js` (lines ~200+) |
| **Template ID** | EmailJS → Email Templates → Click template → Copy Template ID |
| **Service ID** | EmailJS → Email Services (same as contact form) |

## Email Frequency

- **Contact form submission** → 1 email to you + 1 auto-reply to user = **2 emails per submission**
- EmailJS free tier = **200 emails/month** = **~67 form submissions/month**

## Tips & Best Practices

✅ **DO:**
- Test with multiple email providers (Gmail, Outlook, Yahoo)
- Keep response time realistic
- Update auto-reply if you'll be unavailable
- Monitor form submissions regularly

❌ **DON'T:**
- Send marketing messages in auto-reply
- Make auto-reply too long
- Change template variable names (`{{from_name}}`, etc.)
- Forget to update Template ID after creating new template

## Next Steps

1. ✅ Create auto-reply template in EmailJS
2. ✅ Get Template ID
3. ✅ Update `assets/script.js`
4. ✅ Test with sample submission
5. ✅ Deploy changes (`git push`)
6. ✅ Monitor submissions

---

**Need Help?**
- EmailJS Docs: https://www.emailjs.com/docs/
- Common Issues: See Troubleshooting section above
- Contact: Your own portfolio contact form! 😉
