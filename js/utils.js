// Utility functions for Ninja Cat Game

// Debounce function to limit how often a function can be called
function debounce(func, wait = 100) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

// Throttle function to limit how often a function can be called
function throttle(func, limit = 100) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Check if element is in viewport
function isInViewport(element) {
    if (!element) return false;
    
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Add class to element with a delay
function addClassWithDelay(element, className, delay) {
    setTimeout(() => {
        element.classList.add(className);
    }, delay);
}

// Remove class from element with a delay
function removeClassWithDelay(element, className, delay) {
    setTimeout(() => {
        element.classList.remove(className);
    }, delay);
}

// Toggle class on element with a delay
function toggleClassWithDelay(element, className, delay) {
    setTimeout(() => {
        element.classList.toggle(className);
    }, delay);
}

// Export utility functions
export {
    debounce,
    throttle,
    isInViewport,
    addClassWithDelay,
    removeClassWithDelay,
    toggleClassWithDelay
};
