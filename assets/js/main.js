// Main JavaScript file for Take Care of My Dogs website

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Take Care of My Dogs website loaded');

    // Add click event listeners to dog cards
    const dogCards = document.querySelectorAll('.dog-card');
    dogCards.forEach(card => {
        card.addEventListener('click', function() {
            // Simple animation or interaction could be added here
            this.classList.add('active');
            setTimeout(() => {
                this.classList.remove('active');
            }, 300);
        });
    });

    // Add click event listeners to supplement items
    const supplementItems = document.querySelectorAll('.supplement-item');
    supplementItems.forEach(item => {
        item.addEventListener('click', function() {
            // Simple animation or interaction could be added here
            this.classList.add('active');
            setTimeout(() => {
                this.classList.remove('active');
            }, 300);
        });
    });
});
