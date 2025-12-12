// Navigation functionality for Ninja Cat Game

function initNavigation() {
    console.log('Inicializando navegación');
    setupMobileMenu();
    setupSmoothScrolling();
    highlightActiveLink();
}

// Mobile menu functionality
function setupMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');
    
    // Create menu toggle button for mobile if it doesn't exist
    if (!menuToggle && nav) {
        const newMenuToggle = document.createElement('button');
        newMenuToggle.className = 'menu-toggle';
        newMenuToggle.innerHTML = '☰';
        newMenuToggle.setAttribute('aria-label', 'Toggle menu');
        
        // Insert the menu toggle button before the nav
        nav.parentNode.insertBefore(newMenuToggle, nav);
        
        // Add click event to the new menu toggle
        newMenuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInside = nav.contains(event.target) || newMenuToggle.contains(event.target);
            if (!isClickInside && nav.classList.contains('active')) {
                nav.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
}

// Smooth scrolling for anchor links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Highlight active navigation link based on scroll position
function highlightActiveLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav a');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Export functions for use in other modules
export { initNavigation };
