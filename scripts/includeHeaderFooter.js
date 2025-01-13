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

// Function to load header and footer
function loadHeaderFooter() {
    includeHTML('footer', 'footer.html');
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

    // After all styles are loaded, then load the header and footer
    Promise.all(stylePromises)
        .then(() => {
            // Load header
            fetch('../components/header-pages.html')
                .then(response => response.text())
                .then(data => {
                    document.getElementById('header').innerHTML = data;
                    // Initialize menu immediately since menuConfig.js is already loaded
                    initializeSidebarMenu(false);
                })
                .catch(error => console.error('Error loading header:', error));

            // Load footer
            fetch('../components/footer.html')
                .then(response => {
                    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                    return response.text();
                })
                .then(data => {
                    document.getElementById('footer').innerHTML = data;
                })
                .catch(error => console.error('Error loading footer:', error));
        })
        .catch(error => console.error('Error loading stylesheets:', error));
});