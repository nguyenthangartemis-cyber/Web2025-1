document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav ul');
    
    mobileMenuToggle.addEventListener('click', function() {
        mainNav.classList.toggle('active');
        this.classList.toggle('active');
    });
    
    // Game card hover effect
    document.querySelectorAll('.game-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Category filter functionality
    document.querySelectorAll('.category').forEach(category => {
        category.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all categories
            document.querySelectorAll('.category').forEach(c => {
                c.classList.remove('active');
            });
            
            // Add active class to clicked category
            this.classList.add('active');
            
            // In a real implementation, this would filter the games
            console.log(`Filtering by: ${this.textContent}`);
        });
    });
    
    // Sorting functionality
    const sortSelect = document.querySelector('.game-sorting select');
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            console.log(`Sorting by: ${this.value}`);
            // In a real implementation, this would sort the games
        });
    }
    
    // Search functionality
    const searchBar = document.querySelector('.search-bar');
    if (searchBar) {
        const searchInput = searchBar.querySelector('input');
        const searchButton = searchBar.querySelector('button');
        
        searchButton.addEventListener('click', function() {
            if (searchInput.value.trim() !== '') {
                alert(`Searching for: ${searchInput.value}`);
                // In a real implementation, this would search for games
            }
        });
        
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' && searchInput.value.trim() !== '') {
                alert(`Searching for: ${searchInput.value}`);
                // In a real implementation, this would search for games
            }
        });
    }
    
    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            if (emailInput.value) {
                alert('Thank you for subscribing to our newsletter!');
                emailInput.value = '';
            }
        });
    }
    
    // Pagination navigation
    document.querySelectorAll('.page-nav:not(.disabled)').forEach(nav => {
        nav.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Navigating to another page');
            // In a real implementation, this would load another page of games
        });
    });
    
    document.querySelectorAll('.page-number').forEach(page => {
        page.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all page numbers
            document.querySelectorAll('.page-number').forEach(p => {
                p.classList.remove('active');
            });
            
            // Add active class to clicked page number
            this.classList.add('active');
            
            console.log(`Loading page ${this.textContent}`);
            // In a real implementation, this would load the selected page
        });
    });
});