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

//Changing image source
const mainImage = document.querySelector('.main-image');
const smallImage = document.querySelectorAll('.small-image');

smallImage.forEach((smallImage, index) => {
    smallImage.onclick = function() {
        mainImage.src = smallImage.src;
    };
});