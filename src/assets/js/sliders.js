const DEFAULT_SLIDER_SETTINGS = {
  slidesPerView: 2,
  spaceBetween: 20,
  freeMode: true,
  navigation: {
    nextEl: ".slider__button_next",
    prevEl: ".slider__button_prev",
  },
  loop: true,
  breakpoints: {
    1440: {
      slidesPerView: 6.1,
      spaceBetween: 0,
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
    slidesPerView: "auto",
    spaceBetween: 64,
    loop: true,
    speed: 3000,
    breakpoints: {
      520: {
        spaceBetween: 64,
      },
      320: {
        spaceBetween: 32,
      },
    },
  });

  let autoScroll = true;
  let scrollInterval;

  function startAutoScroll() {
    scrollInterval = setInterval(() => {
      if (autoScroll) {
        partnersSwiper.slideNext();
      }
    }, 1000); // можно изменить скорость
  }

  function stopAutoScroll() {
    autoScroll = false;
    clearInterval(scrollInterval);
  }

  document
    .querySelector(".partnersSwiper")
    .addEventListener("click", stopAutoScroll);

  startAutoScroll();
}
