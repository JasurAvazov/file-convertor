import Swiper, { EffectFade, Navigation, Autoplay } from 'swiper'

export function init(){
    let intro = new Swiper(".intro-swiper", {
        modules: [Navigation, EffectFade, Autoplay],
        effect: "fade",
        loop: true,
        allowTouchMove: true,
        speed: 600,
        autoplay: {
            delay: 2500,
            disableOnInteraction: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
        },
    });
}
