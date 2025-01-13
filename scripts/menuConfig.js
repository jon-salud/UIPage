const menuItems = [
    { id: 'home', label: 'Home', path: 'index.html', icon: 'fas fa-house' },
    { id: 'hover', label: 'Hover Interaction', path: 'pages/hover-interaction.html', icon: 'fas fa-hand-pointer' },
    { id: 'click', label: 'Click Interaction', path: 'pages/click-interaction.html', icon: 'fas fa-mouse-pointer' },
    { id: 'form', label: 'Form Elements', path: 'pages/form-elements.html', icon: 'fas fa-wpforms' },
    { id: 'nav', label: 'Navigation', path: 'pages/navigation.html', icon: 'fas fa-compass' },
    { id: 'cards', label: 'Cards', path: 'pages/cards.html', icon: 'fas fa-table-cells' },
    { id: 'modals', label: 'Modals', path: 'pages/modals.html', icon: 'fas fa-window-maximize' },
    { id: 'animations', label: 'Animations', path: 'pages/animations.html', icon: 'fas fa-film' },
    { id: 'grid', label: 'Grid Layouts', path: 'pages/grid-layouts.html', icon: 'fas fa-table-cells-large' },
    { id: 'scroll', label: 'Scroll Animations', path: 'pages/scroll-animations.html', icon: 'fas fa-arrow-down-long' }
];

function generateMenuLinks(isRoot = true) {
    const prefix = isRoot ? '' : '../';
    return menuItems.map(item => {
        const href = item.id === 'home' 
            ? (isRoot ? 'index.html' : '../index.html')
            : (isRoot ? item.path : item.path.replace('pages/', ''));
        return `<a href="${href}"><i class="${item.icon}"></i> ${item.label}</a>`;
    }).join('\n    ');
}

function initializeSidebarMenu(isRoot = true) {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
        // Generate menu HTML
        const menuHtml = generateMenuLinks(isRoot);
        
        // Insert menu items after the close button
        const closeBtn = sidebar.querySelector('.closebtn');
        if (closeBtn) {
            closeBtn.insertAdjacentHTML('afterend', menuHtml);
        }
        
        // Ensure initial state
        sidebar.style.width = '0';
        document.querySelector('.sidebar-overlay').style.display = 'none';
    }
}
