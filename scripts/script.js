// Function to fetch and include header and footer
function includeHeaderFooter() {
    const basePath = window.location.pathname.includes('/pages/') ? '../' : '';

    fetch(`${basePath}pages/header.html`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then((data) => {
            setInnerHTML("header", data);
        })
        .catch((error) => console.error("Error fetching header:", error));

    fetch(`${basePath}pages/footer.html`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then((data) => {
            setInnerHTML("footer", data);
        })
        .catch((error) => console.error("Error fetching footer:", error));

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `${basePath}styles/sidebar.css`; // Ensure this path is correct
    document.head.appendChild(link);
}

// Function to set the page title
function setPageTitle(title) {
    document.title = title;
    const headerTitle = document.querySelector("header .title");
    if (headerTitle) {
        headerTitle.textContent = title;
    }
}

// Function to toggle code snippet visibility
function toggleCodeSnippet(snippetId) {
    const snippet = document.getElementById(snippetId);
    if (snippet.style.display === "none" || snippet.style.display === "") {
        snippet.style.display = "block";
    } else {
        snippet.style.display = "none";
    }
}

// Function to copy code snippet to clipboard
function copyCodeSnippet(snippetId) {
    const snippet = document.getElementById(snippetId);
    if (snippet) {
        navigator.clipboard
            .writeText(snippet.textContent)
            .then(() => alert("Code copied to clipboard"))
            .catch((err) => console.error("Failed to copy code: ", err));
    }
}

// Function to open sidebar navigation
function openSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    sidebar.classList.add('open');
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Function to close sidebar navigation
function closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    sidebar.classList.remove('open');
    overlay.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Function to toggle the sidebar
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.querySelector('.sidebar-overlay');
    
    if (sidebar.style.width === '250px') {
        sidebar.style.width = '0';
        overlay.style.display = 'none';
        document.body.style.marginRight = '0';  // Changed from marginLeft
    } else {
        sidebar.style.width = '250px';
        overlay.style.display = 'block';
        document.body.style.marginRight = '0';  // Changed from marginLeft
    }
}

// Function to show an element
function showElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.style.display = "block";
    }
}

// Function to hide an element
function hideElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.style.display = "none";
    }
}

// Function to toggle the visibility of an element
function toggleElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        if (element.style.display === "none" || element.style.display === "") {
            element.style.display = "block";
        } else {
            element.style.display = "none";
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

// Function to open sidebar navigation
function openNav() {
    document.getElementById("mySidebar").classList.add("open");
}

// Function to close sidebar navigation
function closeNav() {
    const sidebar = document.getElementById("mySidebar");
    if (sidebar) {
        sidebar.classList.remove("open");
    }
}

function openOverlayNav() {
    document.getElementById("myOverlayNav").classList.add("open");
}

function closeOverlayNav() {
    const overlayNav = document.getElementById("myOverlayNav");
    if (overlayNav) {
        overlayNav.classList.remove("open");
    }
}

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    const overlay = document.getElementById(`overlay-${modalId}`);

    if (modal.classList.contains("slide-in")) {
        overlay.classList.add("show");
        modal.classList.add("show");
    } else {
        modal.style.display = "flex";
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    const overlay = document.getElementById(`overlay-${modalId}`);

    if (modal.classList.contains("slide-in")) {
        overlay.classList.remove("show");
        modal.classList.remove("show");
    } else {
        modal.style.display = "none";
    }
}

// Navigation demo functions
function openNavDemo() {
    document.getElementById("navDemoSidebar").classList.add("open");
    document.getElementById("overlay").style.display = "block";
}

function closeNavDemo() {
    document.getElementById("navDemoSidebar").classList.remove("open");
    document.getElementById("overlay").style.display = "none";
}

function openOverlayNavDemo() {
    const overlay = document.getElementById("navDemoOverlay");
    overlay.style.display = "flex";
    requestAnimationFrame(() => {
        overlay.classList.add("open");
    });

    // Add event listener to close when clicking outside the links
    document.addEventListener("click", closeOverlayNavDemoOnClick);
}

function closeOverlayNavDemo(event) {
    const overlay = document.getElementById("navDemoOverlay");
    overlay.classList.remove("open");
    setTimeout(() => {
        overlay.style.display = "none";
    }, 300);

    // Remove the event listener after closing
    document.removeEventListener("click", closeOverlayNavDemoOnClick);
}

function closeOverlayNavDemoOnClick(event) {
    const overlay = document.getElementById("navDemoOverlay");
    const overlayContent = document.querySelector(".overlay-content");
    if (!overlayContent.contains(event.target)) {
        closeOverlayNavDemo();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");
    includeHeaderFooter();

    // Add event listener to close sidebar when clicking outside of it
    const overlay = document.getElementById("overlay");
    if (overlay) {
        overlay.addEventListener("click", closeNavDemo);
    }

    // Add event listener to close overlay navigation when clicking outside of it
    const overlayNav = document.getElementById("navDemoOverlay");
    if (overlayNav) {
        overlayNav.addEventListener("click", (event) => {
            closeOverlayNavDemo(event);
        });
    }

    // Add event listener to close modal when clicking outside of it
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => {
        window.addEventListener("click", (event) => {
            if (event.target === modal) {
                closeModal(modal.id);
            }
        });
    });

    // Update modal overlay click handling
    const modalOverlays = document.querySelectorAll(".modal-overlay");
    modalOverlays.forEach((overlay) => {
        overlay.addEventListener("click", (event) => {
            if (event.target === overlay) {
                const modalId = overlay.getAttribute("id").replace("overlay-", "");
                closeModal(modalId);
            }
        });
    });

    // Ensure the element with ID 'click' exists before adding the event listener
    const clickElement = document.getElementById("click");
    if (clickElement) {
        clickElement.addEventListener("click", () => {
            console.log("Element with ID 'click' was clicked.");
        });
    }

    document.addEventListener("click", (event) => {
        const sidebar = document.getElementById("sidebar");
        if (sidebar.classList.contains("open") && !sidebar.contains(event.target) && !event.target.closest(".hamburger")) {
            closeSidebar();
        }
    });

    document.addEventListener("keydown", (event) => {
        const sidebar = document.getElementById("sidebar");
        if (event.key === "Escape" && sidebar.classList.contains("open")) {
            closeSidebar();
        }
    });

    // Breadcrumb generation
    const breadcrumbs = document.getElementById("breadcrumbs");
    if (breadcrumbs) {
        const path = window.location.pathname.split("/").filter(Boolean);
        let breadcrumbHTML = '<a href="../index.html">Home</a>';
        let currentPath = "";

        path.forEach((segment, index) => {
            currentPath += `/${segment}`;
            if (index < path.length - 1) {
                breadcrumbHTML += ` / <a href="${currentPath}">${segment.replace(".html", "").replace(/-/g, " ")}</a>`;
            } else {
                breadcrumbHTML += ` / ${segment.replace(".html", "").replace(/-/g, " ")}`;
            }
        });

        breadcrumbs.innerHTML = breadcrumbHTML;
    }

    // Initialize sidebar state
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
        sidebar.style.width = '0';
    }
});
