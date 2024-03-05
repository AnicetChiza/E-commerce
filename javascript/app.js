const icon = document.querySelector('.menu');
const navItems = document.querySelector('ul');
const exitIcon = document.querySelector('.exit');

if (icon) {
    icon.addEventListener('click', () => {
        navItems.classList.add('active');
    })
}

if (exitIcon) {
    exitIcon.addEventListener('click', () => {
        navItems.classList.remove('active');
    })
}