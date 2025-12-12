// Main JavaScript file for Ninja Cat Game

// Import modules
import { initNavigation } from './navigation.js';
import { initAnimations } from './animations.js';
import { initCards } from './cards.js';

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Ninja Cat Game - Página cargada correctamente');
    
    try {
        // Initialize components
        initNavigation();
        initAnimations();
        initCards();
        
        // Add any global event listeners here
        setupEventListeners();
    } catch (error) {
        console.error('Error initializing the application:', error);
    }
});

// Global functions
function setupEventListeners() {
    console.log('Configurando event listeners globales');
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const nav = document.querySelector('.nav');
            if (nav && nav.classList.contains('active')) {
                nav.classList.remove('active');
                document.body.style.overflow = ''; // Re-enable scrolling
            }
        });
    });
    
    // Add any additional global event listeners here
}

// Call this function when the page loads
window.onload = function() {
    console.log('Página completamente cargada');
    
    // Add any onload functionality here
    // For example, you might want to check for user authentication,
    // load saved game data, etc.
};

// Make functions available globally if needed
window.NinjaCatGame = {
    // You can expose specific functions here if needed
    // For example: init: initGame
};
