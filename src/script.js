const menuBtn = document.querySelector('.menu-btn'),
menuCloseBtn = document.querySelector('.menu-btn-close'),
navMenu = document.querySelector('.nav__menu');

menuBtn.addEventListener('click', () => {
    console.log('hi')
    navMenu.classList.add('menu-show');
})

menuCloseBtn.addEventListener('click', () => {
    navMenu.classList.remove('menu-show');
})

$('.carousel').flickity({
    initialIndex: 1
});