// Импорт функций для инициализации слайдеров, этапов, модального окна и видео
import { slidersInit } from "./sliders.js";
import { stagesInit } from './stages.js';
import { openModal } from "./modal.js";
import { openVideo } from './video.js';
import { burgerInit } from "./burger.js";

// Инициализация слайдеров
slidersInit();

// Инициализация этапов
stagesInit();

// Инициализация бургера
burgerInit();

// Добавление обработчиков событий для кнопок с классом "button--external"
// При клике открывается модальное окно
document.querySelectorAll('.button--external').forEach(button => {
  button.addEventListener('click', openModal);
});

// Добавление обработчиков событий для кнопок с классом "nominations__button"
// При клике открывается модальное окно
document.querySelectorAll('.nominations__button').forEach(button => {
  button.addEventListener('click', openModal);
});

// Добавление обработчика события для элемента с классом "video__player"
// При клике запускается функция открытия видео
document.querySelector('.video__player').addEventListener('click', openVideo);
