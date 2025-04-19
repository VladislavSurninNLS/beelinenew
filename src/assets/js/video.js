export function openVideo() {
  const overlay = document.createElement("div");
  overlay.classList.add("modal-overlay");
  overlay.addEventListener("click", closeVideo);

  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.innerHTML = `
			<h2 class="modal__title">Видео проекта</h2>

			<video controls autoplay class="modal__video">
    		<source src="./assets/video/water.mp4" type="video/mp4">
    		Ваш браузер не поддерживает видео. Пожалуйста, обновите браузер.
			</video>
	`;

  // Добавляем элементы в DOM
  const closeButton = document.createElement("button");
  closeButton.classList.add("modal__close");
  closeButton.addEventListener("click", closeVideo);
  modal.appendChild(closeButton);
  document.body.appendChild(overlay);
  document.body.appendChild(modal);
  document.body.classList.add("no-scroll");
}

function closeVideo() {
  const overlay = document.querySelector(".modal-overlay");
  const modal = document.querySelector(".modal");
  if (overlay) overlay.remove();
  if (modal) modal.remove();
  document.body.classList.remove("no-scroll");
}
