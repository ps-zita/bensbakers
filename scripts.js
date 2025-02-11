const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menu li');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
});

// Optional: Close menu when clicking a menu item
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.remove('active');
        menu.classList.remove('active');
    });
});