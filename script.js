// Function to fetch and include header and footer
function includeHeaderFooter() {
    fetch('/header.html')
        .then(response => response.text())
        .then(data => {
            setInnerHTML('header', data);
        });
    fetch('/footer.html')
        .then(response => response.text())
        .then(data => {
            setInnerHTML('footer', data);
        });
}

// Function to set the page title
function setPageTitle(title) {
    document.title = title;
    const headerTitle = document.querySelector('header .title');
    if (headerTitle) {
        headerTitle.textContent = title;
    }
}

// Function to toggle code snippet visibility
function toggleCodeSnippet(snippetId) {
    toggleElement(snippetId);
}

// Function to copy code snippet to clipboard
function copyCodeSnippet(snippetId) {
    const snippet = document.getElementById(snippetId);
    if (snippet) {
        navigator.clipboard.writeText(snippet.textContent)
            .then(() => alert('Code copied to clipboard'))
            .catch(err => console.error('Failed to copy code: ', err));
    }
}

// Function to open sidebar navigation
function openSidebar() {
    showElement('sidebar');
}

// Function to close sidebar navigation
function closeSidebar() {
    hideElement('sidebar');
}

// Function to show an element
function showElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.style.display = 'block';
    }
}

// Function to hide an element
function hideElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.style.display = 'none';
    }
}

// Function to toggle the visibility of an element
function toggleElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        if (element.style.display === 'none' || element.style.display === '') {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    }
}

// Function to set the inner HTML of an element
function setInnerHTML(elementId, html) {
    const element = document.getElementById(elementId);
    if (element) {
        element.innerHTML = html;
    }
}

// Function to add an event listener to an element
function addEventListener(elementId, event, handler) {
    const element = document.getElementById(elementId);
    if (element) {
        element.addEventListener(event, handler);
    }
}