const expertsSwiper = new Swiper(".expertsSwiper", {
  slidesPerView: 6,
  spaceBetween: 20,
  navigation: {
    nextEl: ".slider__button_next",
    prevEl: ".slider__button_prev",
  },
  loop: true,
});

const membersSwiper = new Swiper(".membersSwiper", {
  slidesPerView: 6,
  spaceBetween: 20,
  navigation: {
    nextEl: ".slider__button_next",
    prevEl: ".slider__button_prev",
  },
  loop: true,
});

const winnersSwiper = new Swiper(".winnersSwiper", {
  slidesPerView: 6,
  spaceBetween: 20,
  navigation: {
    nextEl: ".slider__button_next",
    prevEl: ".slider__button_prev",
  },
  loop: true,
});

const partnersSwiper = new Swiper(".partnersSwiper", {
  slidesPerView: 6, // Автоматическая ширина слайдов
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 0, // Убираем задержку между прокрутками
    disableOnInteraction: false,
    reverseDirection: true, // Скролл влево
  },
  speed: 3000, // Уменьшаем скорость для плавности
});
