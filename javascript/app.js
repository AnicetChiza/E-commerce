const icon = document.querySelector('.menu');
const navItems = document.querySelector('nav');

if (icon) {
    icon.addEventListener('click', () => {
        navItems.classList.add('active');
    })
}