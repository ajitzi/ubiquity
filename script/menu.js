const toggleMenu = document.querySelector('.toggle-menu');
const menu = document.querySelector('.main-nav');

toggleMenu.addEventListener('click', function() {
    const open = JSON.parse(toggleMenu.getAttribute('aria-expanded'));
    toggleMenu.setAttribute('aria-expanded', !open);
    menu.hidden = !menu.hidden;
});