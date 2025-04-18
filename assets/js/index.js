const expertsSwiper = new Swiper(".expertsSwiper", {
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
      slidesPerView: 1.5,
      spaceBetween: 20,
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
    520: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    320: {
      slidesPerView: 1.5,
      spaceBetween: 20,
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
    520: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    320: {
      slidesPerView: 1.5,
      spaceBetween: 20,
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

        const delay = window.matchMedia("(min-width: 520px)").matches ? 800 : 0;

        setTimeout(() => {
          stage.classList.add("stage--active");
        }, delay);
      } else if (!activeStage) {
        // Если активного элемента нет, просто добавляем класс
        stage.classList.add("stage--active");
      }
    });
  });
});
