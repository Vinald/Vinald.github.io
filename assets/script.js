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
