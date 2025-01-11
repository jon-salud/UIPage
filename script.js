// Function to fetch and include header and footer
function includeHeaderFooter() {
    fetch('header.html')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            setInnerHTML('header', data);
        })
        .catch(error => console.error('Error fetching header:', error));

    fetch('footer.html')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            setInnerHTML('footer', data);
        })
        .catch(error => console.error('Error fetching footer:', error));
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
    const snippet = document.getElementById(snippetId);
    if (snippet.style.display === 'none' || snippet.style.display === '') {
        snippet.style.display = 'block';
    } else {
        snippet.style.display = 'none';
    }
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
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");
    sidebar.classList.remove("open");
    overlay.classList.remove("show");
}

// Function to toggle the sidebar
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");
    sidebar.classList.toggle("open"); // Toggle the 'open' class
    overlay.classList.toggle("show"); // Toggle the 'show' class
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
        console.log(`Set innerHTML for ${elementId}`);
    } else {
        console.error(`Element with ID ${elementId} not found`);
    }
}

// Function to add an event listener to an element
function addEventListener(elementId, event, handler) {
    const element = document.getElementById(elementId);
    if (element) {
        element.addEventListener(event, handler);
        console.log(`Added event listener for ${event} on ${elementId}`);
    } else {
        console.error(`Element with ID ${elementId} not found`);
    }
}

// Function to open sidebar navigation
function openNav() {
    document.getElementById("mySidebar").classList.add("open");
}

// Function to close sidebar navigation
function closeNav() {
    document.getElementById("mySidebar").classList.remove("open");
}

function openOverlayNav() {
    document.getElementById("myOverlayNav").classList.add("open");
}

function closeOverlayNav() {
    document.getElementById("myOverlayNav").classList.remove("open");
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    includeHeaderFooter();

    // Add event listener to close sidebar when clicking outside of it
    const overlay = document.getElementById("overlay");
    overlay.addEventListener("click", closeNav);

    // Add event listener to close overlay navigation when clicking outside of it
    const overlayNav = document.getElementById("myOverlayNav");
    overlayNav.addEventListener("click", (event) => {
        if (event.target === overlayNav) {
            closeOverlayNav();
        }
    });
});