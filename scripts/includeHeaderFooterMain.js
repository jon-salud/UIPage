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
    includeHTML('footer', 'pages/footer.html');
}

// Function to include header, sidebar, and styles
function includeHeaderFooter() {
    // Correctly fetch and include the header HTML content
    includeHTML('header', 'pages/header.html');

    // Fetch and include the CSS files separately
    const stylesheets = ['styles/header.css', 'styles/sidebar.css', 'styles/styles.css'];
    stylesheets.forEach(path => {
        fetch(path)
            .then(response => response.text())
            .then(data => {
                const style = document.createElement('style');
                style.textContent = data;
                document.head.appendChild(style);
            })
            .catch(error => console.error(`Error loading ${path}:`, error));
    });
}

// Load header and footer when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    loadHeaderFooter();
    includeHeaderFooter();
});