// Intersection Observer setup
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1 // Trigger when 10% of the element is visible
});

// Observe all animatable elements
document.addEventListener('DOMContentLoaded', () => {
    // Select all elements that need animations
    const animatedElements = document.querySelectorAll(
        '.fade-element, .card, .slide-element, .rotate-element'
    );
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // Parallax effect
    const parallaxBg = document.querySelector('.parallax-bg');
    if (parallaxBg) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            parallaxBg.style.transform = `translateY(${scrolled * 0.5}px)`;
        });
    }

    // Initialize cards with random delays
    document.querySelectorAll('.card').forEach(card => {
        card.style.transitionDelay = `${Math.random() * 0.5}s`;
    });

    // Snippet Toggle
    document.querySelectorAll('.snippet-toggle').forEach(button => {
        button.addEventListener('click', (e) => {
            const container = e.target.closest('.snippet-container');
            const content = container.querySelector('.snippet-content');
            content.classList.toggle('active');
            button.textContent = content.classList.contains('active') ? 'Hide Code' : 'View Code';
        });
    });

    // Copy Button
    document.querySelectorAll('.copy-button').forEach(button => {
        button.addEventListener('click', (e) => {
            const container = e.target.closest('.snippet-content');
            const code = container.querySelector('code').textContent;
            navigator.clipboard.writeText(code).then(() => {
                const originalText = button.textContent;
                button.textContent = 'Copied!';
                setTimeout(() => {
                    button.textContent = originalText;
                }, 2000);
            });
        });
    });
});

// Cleanup function
window.addEventListener('beforeunload', () => {
    observer.disconnect();
});
