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

// Ensure menuConfig.js includes icon classes
function initializeSidebarMenu(isRoot = false) {
    const sidebar = document.getElementById('sidebar');
    const basePath = isRoot ? '' : '../';
    
    const menuItems = [
        { href: basePath + 'index.html', text: 'Home', icon: 'fas fa-home' },
        { href: basePath + 'pages/hover-interaction.html', text: 'Hover Interaction', icon: 'fas fa-hand-pointer' },
        { href: basePath + 'pages/click-interaction.html', text: 'Click Interaction', icon: 'fas fa-mouse' },
        { href: basePath + 'pages/form-elements.html', text: 'Form Elements', icon: 'fas fa-wpforms' },
        { href: basePath + 'pages/navigation.html', text: 'Navigation', icon: 'fas fa-compass' },
        { href: basePath + 'pages/cards.html', text: 'Cards', icon: 'fas fa-credit-card' },
        { href: basePath + 'pages/modals.html', text: 'Modals', icon: 'fas fa-window-maximize' },
        { href: basePath + 'pages/animations.html', text: 'Animations', icon: 'fas fa-film' },
        { href: basePath + 'pages/grid-layouts.html', text: 'Grid Layouts', icon: 'fas fa-th' },
        { href: basePath + 'pages/scroll-animations.html', text: 'Scroll Animations', icon: 'fas fa-scroll' }
    ];

    menuItems.forEach(item => {
        const link = document.createElement('a');
        link.href = item.href;
        link.innerHTML = `<i class="${item.icon}"></i>${item.text}`;
        sidebar.appendChild(link);
    });
}
