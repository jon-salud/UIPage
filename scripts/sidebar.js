function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const overlay = document.querySelector(".sidebar-overlay");
    
    if (sidebar && overlay) {
        sidebar.classList.toggle("open");
        overlay.classList.toggle("open");
    } else {
        console.error("Sidebar or overlay elements not found");
    }
}

// Add event listener for the ESC key to close sidebar
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const sidebar = document.getElementById("sidebar");
        const overlay = document.querySelector(".sidebar-overlay");
        if (sidebar.classList.contains("open")) {
            sidebar.classList.remove("open");
            overlay.classList.remove("open");
        }
    }
});
