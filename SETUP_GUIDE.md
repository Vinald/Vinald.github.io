# Portfolio Setup Guide

## Features Added

### 1. **Contact Form with Formspree**
The portfolio now includes a fully functional contact form. To set it up:

1. Go to [formspree.io](https://formspree.io)
2. Sign up or log in with your email
3. Create a new form
4. Replace the form ID in `index.html` line ~1140:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
   Change `xyzddqnk` to your actual Formspree ID

### 2. **Back-to-Top Button**
- Automatically appears when you scroll down 300px
- Smooth scroll animation to top
- Fixed position in bottom-right corner
- Hover effects included

### 3. **Copy-to-Clipboard Functionality**
- Click "Copy Email" or "Copy Phone" buttons
- Text is copied to clipboard
- Button shows "✓ Copied!" feedback for 2 seconds

### 4. **Skill Level Indicators**
- Added proficiency levels to programming languages
- Three levels: Beginner (blue), Intermediate (yellow), Expert (green)
- Hover effects on skills section

### 5. **SEO Meta Tags**
- Added meta description
- Added keywords
- Open Graph tags for social sharing
- Twitter Card tags
- Canonical URL

### 6. **Lazy Loading (Ready to Use)**
- Images can use `data-src` attribute instead of `src` for lazy loading
- Example: `<img data-src="image.jpg" alt="..." />`
- Automatically loads when image comes into view

### 7. **Contact Section**
- Professional contact form with validation
- Quick contact options (email/phone with copy buttons)
- Styled to match portfolio theme
- Added to navigation menu

## What You Need to Do

### Required Setup:
1. **Formspree Integration** (for contact form):
   - Visit [formspree.io](https://formspree.io)
   - Create a free form
   - Copy your form ID
   - Update line 1140 in `index.html` with your ID

### Optional Enhancements:
1. **Bootstrap Icons** - Icons are referenced but you may want to add the CDN:
   ```html
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css">
   ```
   Add this to the `<head>` section if icons don't display

2. **Add More Skills** - Follow the same pattern in the skills section:
   ```html
   <span class="badge bg-warning text-dark">SkillName<span class="skill-level expert">Expert</span></span>
   ```

3. **Customize Colors** - Skill levels use custom colors in `styles.css`:
   - `.skill-level.beginner` (blue)
   - `.skill-level.intermediate` (yellow)
   - `.skill-level.expert` (green)

## File Changes Made

### HTML (`index.html`)
- Added SEO meta tags in `<head>`
- Added Contact section before footer
- Added Back-to-Top button
- Added Contact link to navigation
- Added skill level indicators

### CSS (`assets/styles.css`)
- Back-to-Top button styles
- Contact form styles
- Skill level indicator styles
- Mobile responsive adjustments

### JavaScript (`assets/script.js`)
- Back-to-Top button functionality
- Copy-to-Clipboard function
- Lazy loading implementation
- Form validation ready

## Testing Checklist

- [ ] Contact form submits to your email (via Formspree)
- [ ] Back-to-Top button appears when scrolling down
- [ ] Copy buttons work for email and phone
- [ ] Skill level badges display correctly
- [ ] Form validation works (try submitting empty form)
- [ ] All animations still work smoothly

## Future Improvements

Consider adding:
1. GitHub contribution graph widget
2. Project filtering/search
3. Blog section
4. Testimonials section
5. Dark/Light mode toggle
6. More detailed project case studies
7. Analytics tracking (Google Analytics)

## Support

If you encounter any issues:
1. Check browser console for errors (F12)
2. Verify Formspree ID is correct
3. Ensure all CSS and JS files are loading
4. Test on different browsers

---

**Last Updated:** April 19, 2026
