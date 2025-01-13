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

// Load header and footer when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Determine the correct path to header.html based on current page location
    const isIndexPage = window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/');
    const headerPath = isIndexPage ? './pages/header.html' : 'header.html';

    // Load header
    fetch(headerPath)
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
            // Run any scripts that were in the header
            Array.from(document.getElementById('header').getElementsByTagName('script')).forEach(script => {
                eval(script.innerHTML);
            });
        })
        .catch(error => console.error('Error loading header:', error));

    loadHeaderFooter();
});