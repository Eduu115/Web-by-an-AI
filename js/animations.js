// Animation functionality for Ninja Cat Game

function initAnimations() {
    console.log('Inicializando animaciones');
    setupScrollAnimations();
    setupHoverEffects();
    animateOnLoad();
}

// Add scroll-based animations
function setupScrollAnimations() {
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animated');
            }
        });
    };
    
    // Run once on load
    animateOnScroll();
    
    // Run on scroll
    window.addEventListener('scroll', animateOnScroll);
}

// Add hover effects to interactive elements
function setupHoverEffects() {
    // Add hover effect to buttons
    const buttons = document.querySelectorAll('.btn, .card, .nav a');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
            this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });
}

// Animate elements when the page loads
function animateOnLoad() {
    // Add a class to the body to indicate JS is loaded
    document.body.classList.add('js-loaded');
    
    // Animate hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        setTimeout(() => {
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 300);
    }
    
    // Animate features
    const features = document.querySelectorAll('.feature-card');
    features.forEach((feature, index) => {
        setTimeout(() => {
            feature.style.opacity = '1';
            feature.style.transform = 'translateY(0)';
        }, 500 + (index * 100));
    });
}

// Parallax effect for hero section
function setupParallax() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        hero.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
    });
}

// Export functions for use in other modules
export { initAnimations };
