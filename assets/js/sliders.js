const DEFAULT_SLIDER_SETTINGS = {
  slidesPerView: 2,
  spaceBetween: 20,
  navigation: {
    nextEl: ".slider__button_next",
    prevEl: ".slider__button_prev",
  },
  loop: true,
  breakpoints: {
    1440: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: -55,
    },
    520: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    320: {
      slidesPerView: 1.4285,
      spaceBetween: 0,
    },
  },
};

export function slidersInit() {
  const expertsSwiper = new Swiper(".expertsSwiper", DEFAULT_SLIDER_SETTINGS);
  const membersSwiper = new Swiper(".membersSwiper", DEFAULT_SLIDER_SETTINGS);
  const winnersSwiper = new Swiper(".winnersSwiper", DEFAULT_SLIDER_SETTINGS);

  const partnersSwiper = new Swiper(".partnersSwiper", {
    slidesPerView: 6,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      reverseDirection: true,
    },
    speed: 3000,
    breakpoints: {
      520: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });
}
