// Close the navbar menu on scroll
document.addEventListener("scroll", function () {
    const navbarCollapse = document.querySelector(".navbar-collapse");
    if (navbarCollapse.classList.contains("show")) {
        const navbarToggler = document.querySelector(".navbar-toggler");
        navbarToggler.click();
    }
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
        });
    });
});

// Set the current year in the footer
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("currentYear").textContent = new Date().getFullYear();
});

// Intersection Observer for Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px"
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Reset animation by removing and re-adding it
            const element = entry.target;
            element.style.animation = 'none';
            
            // Trigger reflow to restart animation
            void element.offsetWidth;
            
            // Add animation classes based on element type
            if (element.classList.contains('card')) {
                element.style.animation = 'fadeInUp 0.6s ease-out forwards';
            } else if (element.classList.contains('timeline-item')) {
                element.style.animation = 'slideInLeft 0.6s ease-out forwards';
            } else if (element.classList.contains('img-fluid')) {
                element.style.animation = 'fadeInUp 0.8s ease-out forwards';
            } else if (element.classList.contains('mb-5')) {
                // Experience items
                element.style.animation = 'slideInLeft 0.6s ease-out forwards';
            }
        } else {
            // Reset animation when element leaves viewport
            entry.target.style.animation = 'none';
        }
    });
}, observerOptions);

// Observe elements for animation on scroll
document.addEventListener("DOMContentLoaded", function() {
    // Observe cards
    document.querySelectorAll('.card').forEach(card => {
        observer.observe(card);
    });
    
    // Observe timeline items
    document.querySelectorAll('.timeline-item').forEach(item => {
        observer.observe(item);
    });
    
    // Observe experience items (divs in experience section)
    document.querySelectorAll('#experience .mb-5').forEach(item => {
        observer.observe(item);
    });
    
    // Observe images
    document.querySelectorAll('.img-fluid, .profile, .project-img').forEach(img => {
        observer.observe(img);
    });
    
    // Observe sections
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '1';
    });
});

// Add click animation to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        // Remove existing ripples
        this.querySelectorAll('.ripple').forEach(r => r.remove());
        this.appendChild(ripple);
    });
});

// Navbar animation on scroll
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        navbar.style.boxShadow = '0px 8px 16px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.1)';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Add hover animation to all links
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
});

// Back to Top Button Functionality
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Copy to Clipboard Function
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        // Show feedback
        const button = event.target;
        const originalText = button.innerText;
        button.innerText = '✓ Copied!';
        button.classList.add('copied');
        
        setTimeout(function() {
            button.innerText = originalText;
            button.classList.remove('copied');
        }, 2000);
    }).catch(function(err) {
        console.error('Could not copy text: ', err);
    });
}

// EmailJS Contact Form Handler
let emailJSRetries = 0;
const MAX_EMAILJS_RETRIES = 100; // ~10 seconds with 100ms delays

function initializeEmailJS() {
    // Check if emailjs is available
    if (typeof emailjs === 'undefined') {
        emailJSRetries++;
        if (emailJSRetries < MAX_EMAILJS_RETRIES) {
            setTimeout(initializeEmailJS, 100);
        } else {
            console.error('EmailJS failed to load after multiple retries. Using fallback email method.');
            setupFallbackEmailForm();
        }
        return;
    }
    
    console.log('EmailJS library loaded successfully');
    setupEmailJSForm();
}

// Setup EmailJS contact form
function setupEmailJSForm() {
    // Get credentials from window object or use fallback
    const publicKey = window.EMAILJS_PUBLIC_KEY || localStorage.getItem('emailjs_public_key');
    
    if (!publicKey) {
        console.warn('EmailJS Public Key not configured. Using fallback email method.');
        setupFallbackEmailForm();
        return;
    }
    
    // Initialize EmailJS with public key
    try {
        emailjs.init(publicKey);
        console.log('EmailJS initialized successfully');
    } catch (error) {
        console.error('Failed to initialize EmailJS:', error);
        setupFallbackEmailForm();
        return;
    }
    
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
    const submitBtn = document.getElementById('submitBtn');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get credentials
            const serviceId = window.EMAILJS_SERVICE_ID || localStorage.getItem('emailjs_service_id');
            const templateId = window.EMAILJS_TEMPLATE_ID || localStorage.getItem('emailjs_template_id');
            
            if (!serviceId || !templateId) {
                formStatus.innerHTML = '<div class="alert alert-warning alert-dismissible fade show" role="alert"><i class="bi bi-exclamation-triangle"></i> Email service is not properly configured. Please use the email option below.<button type="button" class="btn-close" data-bs-dismiss="alert"></button></div>';
                console.error('EmailJS credentials not found. Service ID:', serviceId, 'Template ID:', templateId);
                return;
            }
            
            // Disable button during submission
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Sending...';
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Basic validation
            if (!name || !email || !subject || !message) {
                formStatus.innerHTML = '<div class="alert alert-danger alert-dismissible fade show" role="alert"><i class="bi bi-exclamation-triangle"></i> Please fill in all fields.<button type="button" class="btn-close" data-bs-dismiss="alert"></button></div>';
                submitBtn.disabled = false;
                submitBtn.innerHTML = 'Send Message';
                return;
            }
            
            // Prepare template parameters
            const templateParams = {
                from_name: name,
                from_email: email,
                subject: subject,
                message: message,
                to_email: "okiror1vinald@gmail.com"
            };
            
            // Send email using EmailJS
            emailjs.send(serviceId, templateId, templateParams)
                .then(function(response) {
                    // Success
                    console.log('Email sent successfully:', response);
                    formStatus.innerHTML = '<div class="alert alert-success alert-dismissible fade show" role="alert"><i class="bi bi-check-circle"></i> Message sent successfully! I\'ll get back to you soon.<button type="button" class="btn-close" data-bs-dismiss="alert"></button></div>';
                    contactForm.reset();
                    
                    // Re-enable button
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = 'Send Message';
                })
                .catch(function(error) {
                    // Error
                    console.error('EmailJS Error:', error);
                    formStatus.innerHTML = '<div class="alert alert-danger alert-dismissible fade show" role="alert"><i class="bi bi-exclamation-triangle"></i> Failed to send message. Please try again or contact directly at okiror1vinald@gmail.com.<button type="button" class="btn-close" data-bs-dismiss="alert"></button></div>';
                    
                    // Re-enable button
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = 'Send Message';
                });
        });
    } else {
        console.error('Contact form not found in DOM');
    }
}

// Fallback email form - manual email display
function setupFallbackEmailForm() {
    console.log('Setting up fallback email method');
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
    const submitBtn = document.getElementById('submitBtn');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Validation
            if (!name || !email || !subject || !message) {
                formStatus.innerHTML = '<div class="alert alert-danger alert-dismissible fade show" role="alert"><i class="bi bi-exclamation-triangle"></i> Please fill in all fields.<button type="button" class="btn-close" data-bs-dismiss="alert"></button></div>';
                return;
            }
            
            // Show success message with email instructions
            const emailBody = `From: ${name} (${email})\n\n${message}`;
            const encodedBody = encodeURIComponent(emailBody);
            const encodedSubject = encodeURIComponent(subject);
            
            formStatus.innerHTML = `
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <div class="mb-3">
                        <i class="bi bi-check-circle"></i> <strong>Message ready to send!</strong>
                    </div>
                    <p class="mb-3">Your message has been prepared. Please copy it and send it to:</p>
                    <div class="bg-light p-3 rounded mb-3">
                        <strong>Email:</strong> okiror1vinald@gmail.com<br>
                        <strong>Subject:</strong> ${subject}
                        <hr class="my-2">
                        <strong>Message:</strong><br>
                        <small style="white-space: pre-wrap;">${name} (${email})\n\n${message}</small>
                    </div>
                    <div class="d-flex gap-2">
                        <a href="mailto:okiror1vinald@gmail.com?subject=${encodedSubject}&body=${encodedBody}" class="btn btn-success btn-sm">
                            <i class="bi bi-envelope"></i> Send via Email Client
                        </a>
                        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                    </div>
                </div>
            `;
            
            // Reset form after a delay
            setTimeout(() => {
                contactForm.reset();
            }, 5000);
        });
    }
}

// Lazy Loading for Images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// GitHub Actions will inject EmailJS secrets here during deployment
// The secrets are injected by the GitHub Actions workflow into a separate file
// Make sure window.EMAILJS_PUBLIC_KEY, window.EMAILJS_SERVICE_ID, and window.EMAILJS_TEMPLATE_ID are available
