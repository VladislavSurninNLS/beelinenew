const expertsSwiper = new Swiper(".expertsSwiper", {
  slidesPerView: 6,
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
  }
});

const membersSwiper = new Swiper(".membersSwiper", {
  slidesPerView: 6,
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
  }
});

const winnersSwiper = new Swiper(".winnersSwiper", {
  slidesPerView: 6,
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
  }
});

const partnersSwiper = new Swiper(".partnersSwiper", {
  slidesPerView: 6, // Автоматическая ширина слайдов
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    reverseDirection: true,
  },
  speed: 3000,
});

document.addEventListener("DOMContentLoaded", () => {
  const stages = document.querySelectorAll(".stage");

  stages.forEach((stage) => {
    stage.addEventListener("click", () => {
      const activeStage = document.querySelector(".stage--active");

      if (activeStage && activeStage !== stage) {
        // Убираем класс у активного элемента
        activeStage.classList.remove("stage--active");

        // Ждём 0.2 секунды перед добавлением нового класса
        setTimeout(() => {
          stage.classList.add("stage--active");
        }, 800);
      } else if (!activeStage) {
        // Если активного элемента нет, просто добавляем класс
        stage.classList.add("stage--active");
      }
    });
  });
});
