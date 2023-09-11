export function init() {
    const burgerOpenBtn = document.querySelector('.nav__open');
    const burgerExitBtn = document.querySelector('.nav__exit');
    const burgerMenu = document.querySelector('.header__nav');
    const filter = document.querySelector('.filter');
    const body = document.querySelector('body');

    burgerOpenBtn.addEventListener('click', () => {
        burgerMenu.classList.add('active');
        filter.classList.add('active');
        body.classList.add('active');
    })
    burgerExitBtn.addEventListener('click', () => {
        burgerMenu.classList.remove('active');
        filter.classList.remove('active');
        body.classList.remove('active');
    })
    filter.addEventListener('click', () => {
        burgerMenu.classList.remove('active');
        filter.classList.remove('active');
        body.classList.remove('active');
    })
}