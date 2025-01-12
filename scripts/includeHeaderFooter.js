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
    includeHTML('header', 'header.html');
    includeHTML('footer', 'footer.html');
}

// Load header and footer when DOM is fully loaded
document.addEventListener('DOMContentLoaded', loadHeaderFooter);