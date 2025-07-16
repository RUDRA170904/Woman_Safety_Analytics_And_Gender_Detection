document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menuButton');
    const menu = document.getElementById('menu');
    const closeButton = document.getElementById('closeButton');
    const overlay = document.getElementById('overlay');

    const openMenu = () => {
        menu.style.left = '0'; // Slide in from the left side
        // overlay.style.opacity = '1'; // Show overlay
        overlay.style.pointerEvents = 'auto'; // Enable overlay click
        menuButton.style.opacity = '0'; // Hide the menu button
    };

    const closeMenu = () => {
        menu.style.left = '-100%'; // Slide out to the left side
        overlay.style.opacity = '0'; // Hide overlay
        overlay.style.pointerEvents = 'none'; // Disable overlay click
        menuButton.style.opacity = '1'; // Show the menu button
    };

    menuButton.addEventListener('click', openMenu);
    closeButton.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);
});
