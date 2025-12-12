// Card functionality for Ninja Cat Game

function initCards() {
    console.log('Inicializando cartas interactivas');
    setupCardHoverEffects();
    setupCardClickEvents();
    initializeCardDeck();
}

// Add hover effects to cards
function setupCardHoverEffects() {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const angleX = (y - centerY) / 20;
            const angleY = (centerX - x) / 20;
            
            this.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.05)`;
            this.style.boxShadow = `${-angleY}px ${angleX}px 20px rgba(0, 0, 0, 0.2)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
            this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
        });
    });
}

// Handle card click events
function setupCardClickEvents() {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('click', function() {
            // Remove active class from all cards
            cards.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked card
            this.classList.add('active');
            
            // Scroll to card if it's not fully visible
            this.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
            
            // Optional: Show card details in a modal or expanded view
            // showCardDetails(this);
        });
    });
}

// Initialize the card deck with sample data
function initializeCardDeck() {
    // This is a placeholder for actual card data
    // In a real application, you would fetch this from an API or data file
    const cardTypes = ['strike', 'shield', 'ability'];
    const cardContainer = document.querySelector('.card-deck');
    
    if (!cardContainer) return;
    
    // Clear existing cards
    cardContainer.innerHTML = '';
    
    // Add sample cards
    cardTypes.forEach((type, index) => {
        const card = createCard(type, index + 1);
        cardContainer.appendChild(card);
    });
}

// Create a card element
function createCard(type, id) {
    const card = document.createElement('div');
    card.className = `card ${type}-card`;
    card.setAttribute('data-card-type', type);
    card.setAttribute('data-card-id', id);
    
    // Card content based on type
    let title, description, stats;
    
    switch(type) {
        case 'strike':
            title = 'Ataque Rápido';
            description = 'Un ataque rápido que inflige daño al oponente.';
            stats = { atk: 5, def: 2, cost: 2 };
            break;
        case 'shield':
            title = 'Escudo Protector';
            description = 'Añade protección contra el próximo ataque.';
            stats = { atk: 1, def: 6, cost: 3 };
            break;
        case 'ability':
            title = 'Habilidad Especial';
            description = 'Activa un poder especial único.';
            stats = { atk: 3, def: 3, cost: 4 };
            break;
    }
    
    card.innerHTML = `
        <div class="card-header">
            <h4>${title}</h4>
            <span class="card-type-badge">${type.toUpperCase()}</span>
        </div>
        <div class="card-image">
            <img src="mockup/${type}_0${id}.png" alt="${title}" onerror="this.src='mockup/placeholder.png'">
        </div>
        <div class="card-description">
            <p>${description}</p>
        </div>
        <div class="card-stats">
            <span>ATK: ${stats.atk}</span>
            <span>DEF: ${stats.def}</span>
            <span>COST: ${stats.cost} ⚡</span>
        </div>
    `;
    
    return card;
}

// Show card details in a modal or expanded view
function showCardDetails(cardElement) {
    // This would show a detailed view of the card
    console.log('Mostrando detalles de la carta:', cardElement);
    
    // In a real implementation, you might:
    // 1. Create a modal
    // 2. Fill it with card details
    // 3. Show it to the user
}

// Export functions for use in other modules
export { initCards };
