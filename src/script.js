const menuBtn = document.querySelector('.menu-btn'),
menuCloseBtn = document.querySelector('.menu-btn-close'),
navMenu = document.querySelector('.nav__menu'),
navLinks = document.querySelectorAll('.nav__menu li');

menuBtn.addEventListener('click', () => {
    navMenu.classList.add('active');
})

menuCloseBtn.addEventListener('click', () => {
    navMenu.classList.remove('active');
})

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});

$('.carousel').flickity({
    initialIndex: 1
});