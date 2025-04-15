document.addEventListener('DOMContentLoaded', function() {
    // Set current date
    const currentDate = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('current-date').textContent = currentDate.toLocaleDateString('en-US', options);
    
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('nav ul');
    
    mobileMenuBtn.addEventListener('click', function() {
        navMenu.style.display = navMenu.style.display === 'block' ? 'none' : 'block';
    });
    
    // News ticker animation
    const tickerItems = document.getElementById('ticker-items');
    const tickerContent = document.querySelector('.ticker-content');
    
    function cloneTickerItems() {
        const items = tickerItems.innerHTML;
        tickerItems.innerHTML += items;
    }
    
    // Only clone if ticker exists (for pages without it)
    if (tickerItems) {
        cloneTickerItems();
        
        // Pause animation on hover
        tickerContent.addEventListener('mouseenter', function() {
            tickerItems.style.animationPlayState = 'paused';
        });
        
        tickerContent.addEventListener('mouseleave', function() {
            tickerItems.style.animationPlayState = 'running';
        });
    }
    
    // Load more button functionality
    const loadMoreBtn = document.querySelector('.load-more');
    
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            // In a real app, this would fetch more news items from an API
            alert('Loading more stories... This would fetch additional news items in a real application.');
        });
    }
    
    // Video placeholder click handler
    const videoPlaceholders = document.querySelectorAll('.video-placeholder');
    
    videoPlaceholders.forEach(placeholder => {
        placeholder.addEventListener('click', function() {
            alert('This would play the video in a real application.');
        });
    });
    
    // Newsletter form submission
    const newsletterForm = document.querySelector('.footer-section.newsletter form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            if (emailInput.value) {
                alert(`Thank you for subscribing with ${emailInput.value}!`);
                emailInput.value = '';
            } else {
                alert('Please enter your email address.');
            }
        });
    }
    
    // Update weather (simulated)
    function updateWeather() {
        const weatherElement = document.querySelector('.weather');
        if (weatherElement) {
            // In a real app, this would fetch from a weather API
            const temperatures = [26, 27, 28, 29, 30];
            const weatherIcons = ['fa-sun', 'fa-cloud', 'fa-cloud-rain', 'fa-bolt'];
            const randomTemp = temperatures[Math.floor(Math.random() * temperatures.length)];
            const randomIcon = weatherIcons[Math.floor(Math.random() * weatherIcons.length)];
            
            weatherElement.innerHTML = `${randomTemp}°C <i class="fas ${randomIcon}"></i>`;
        }
    }
    
    // Update weather every hour (simulated)
    updateWeather();
    setInterval(updateWeather, 3600000);
    
    // Responsive adjustments
    function handleResize() {
        if (window.innerWidth > 768) {
            navMenu.style.display = '';
        }
    }
    
    window.addEventListener('resize', handleResize);
});