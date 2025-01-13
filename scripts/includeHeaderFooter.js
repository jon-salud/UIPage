// Function to include HTML content
async function includeHTML(elementId, filePath) {
    try {
        const response = await fetch(filePath);
        const content = await response.text();
        document.getElementById(elementId).innerHTML = content;
    } catch (error) {
        console.error(`Error loading ${filePath}: ${error}`);
    }
}

// Load header and footer when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // First load required stylesheets
    const stylesheets = [
        '../styles/header.css',
        '../styles/sidebar.css',
        '../styles/footer.css',
        '../styles/styles.css'
    ];

    // Create a promise for each stylesheet
    const stylePromises = stylesheets.map(path => {
        return new Promise((resolve, reject) => {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = path;
            link.onload = () => resolve();
            link.onerror = () => reject(`Failed to load ${path}`);
            document.head.appendChild(link);
        });
    });

    // After all styles are loaded, then load the components
    Promise.all(stylePromises)
        .then(() => {
            return Promise.all([
                fetch('../components/header-pages.html').then(response => response.text()),
                fetch('../pages/footer.html').then(response => response.text())
            ]);
        })
        .then(([headerContent, footerContent]) => {
            document.getElementById('header').innerHTML = headerContent;
            document.getElementById('footer').innerHTML = footerContent;
            if (typeof initializeSidebarMenu === 'function') {
                initializeSidebarMenu(false);
            }
        })
        .catch(error => console.error('Error:', error));
});