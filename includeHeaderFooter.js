async function includeHTML(elementId, filePath) {
    try {
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const content = await response.text();
        const element = document.getElementById(elementId);
        if (element) {
            element.innerHTML = content;
        } else {
            throw new Error(`Element with id '${elementId}' not found`);
        }
    } catch (error) {
        console.log(`Error loading ${filePath}:`, error);
    }
}

async function loadHeaderFooter() {
    await includeHTML('header', './header.html');
    await includeHTML('footer', './footer.html');
}

// Update CSS paths
const cssFiles = [
    './styles/styles.css',
    './styles/header.css',
    './styles/sidebar.css'
];

document.addEventListener('DOMContentLoaded', () => {
    loadHeaderFooter();
    cssFiles.forEach(file => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = file;
        document.head.appendChild(link);
    });
});
