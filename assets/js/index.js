import { slidersInit } from "./sliders.js";
import { stagesInit } from './stages.js';
import { openModal } from "./modal.js";
import { openVideo } from './video.js';

slidersInit();
stagesInit();

document.querySelectorAll('.button--external').forEach(button => {
  button.addEventListener('click', openModal);
});

document.querySelectorAll('.nominations__button').forEach(button => {
  button.addEventListener('click', openModal);
});

document.querySelector('.video__player').addEventListener('click', openVideo);
