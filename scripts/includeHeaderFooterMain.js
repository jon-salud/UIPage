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

// Load header when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // First load required stylesheets
    const stylesheets = [
        'styles/header.css',
        'styles/sidebar.css',
        'styles/footer.css',
        'styles/styles.css'
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

    // After all styles are loaded, then load the header
    Promise.all(stylePromises)
        .then(() => {
            // Load header from components folder
            fetch('components/header-root.html')
                .then(response => response.text())
                .then(data => {
                    document.getElementById('header').innerHTML = data;
                    // Initialize menu immediately since menuConfig.js is already loaded
                    initializeSidebarMenu(true);
                })
                .catch(error => console.error('Error loading header:', error));
        })
        .catch(error => console.error('Error loading stylesheets:', error));
});