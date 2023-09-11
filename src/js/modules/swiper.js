import Swiper, { EffectFade, Navigation, Autoplay } from 'swiper'

export function init() {
    let intro = new Swiper(".intro-swiper", {
        modules: [Navigation, EffectFade, Autoplay],
        effect: "fade",
        loop: true,
        allowTouchMove: true,
        speed: 600,
        autoplay: {
            delay: 4000,
            disableOnInteraction: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
        },
        slidesPerView: 1,
        spaceBetween: 25,
    });
}
