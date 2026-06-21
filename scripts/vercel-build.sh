#!/usr/bin/env bash
set -e

# Generate EmailJS config from Vercel environment variables
cat > assets/js/emailjs-config.js << EOF
window.EMAILJS_PUBLIC_KEY  = "${EMAILJS_PUBLIC_KEY}";
window.EMAILJS_SERVICE_ID  = "${EMAILJS_SERVICE_ID}";
window.EMAILJS_TEMPLATE_ID = "${EMAILJS_TEMPLATE_ID}";
(function() {
  var ok = window.EMAILJS_PUBLIC_KEY && window.EMAILJS_SERVICE_ID && window.EMAILJS_TEMPLATE_ID;
  console.log('EmailJS config:', ok ? 'loaded' : 'incomplete');
})();
EOF

bundle exec jekyll build
