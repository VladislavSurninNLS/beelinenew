export function openModal() {
  // Создаем оверлей
  const overlay = document.createElement("div");
  overlay.classList.add("modal-overlay");
  overlay.addEventListener("click", closeModal);

  // Создаем модальное окно
  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.innerHTML = `
			<h2 class="modal__title">Принять участие</h2>
			<form class="form" id="form">
					<div class="form__fields">
							<div class="form__line">
							<label class="form__label">
									<input
											type="text"
											id="name"
											name="name"
											class="form__input"
											placeholder="Имя"
									/>
									<span class="visually-hidden">Введите ваше имя</span>
                  <span class="form__error"></span>
							</label>
							<label class="form__label">
									<input
											type="text"
											id="email"
											name="email"
											class="form__input"
											placeholder="E-mail"
									/>
									<span class="visually-hidden">Введите ваш Email</span>
                  <span class="form__error"></span>
							</label>
							</div>
							<label class="form__label">
									<input
											type="text"
											id="organization"
											name="organization"
											class="form__input"
											placeholder="Название или ИНН организации"
									/>
									<span class="visually-hidden">Название или ИНН организации</span>
                  <span class="form__error"></span>
							</label>
							<label class="form__label">
									<input
											type="text"
											id="position"
											name="position"
											class="form__input"
											placeholder="Должность"
									/>
									<span class="visually-hidden">Должность</span>
                  <span class="form__error"></span>
							</label>
							<fieldset class="form__input-group">
									<legend class="form__legend">Формат участия</legend>
									<div class="form__radio-group">
											<input
													type="radio"
													id="online"
													name="participation-format"
													value="online"
													checked
											/>
											<label for="online" class="form__radio-label">онлайн</label>
                      <span class="form__error"></span>
									</div>
									<div class="form__radio-group">
											<input
													type="radio"
													id="offline"
													name="participation-format"
													value="offline"
											/>
											<label for="offline" class="form__radio-label">офлайн</label>
									</div>
							</fieldset>
					</div>
					<div class="form__consent-group">
							<input type="checkbox" id="consent" name="consent"/>
							<label for="consent" class="form__consent-label">
									Согласен(а) с правилами
									<a href="#" class="form__link">Политики конфиденциальности</a>
                  <span class="form__error form__error--consent"></span>
							</label>
					</div>
					<button type="submit" class="button button--form">Отправить</button>
			</form>
	`;

  // Добавляем элементы в DOM
  const closeButton = document.createElement("button");
  closeButton.classList.add("modal__close");
  closeButton.addEventListener("click", closeModal);
  modal.appendChild(closeButton);
  document.body.appendChild(overlay);
  document.body.appendChild(modal);
  document.body.classList.add("no-scroll");

  const form = modal.querySelector("#form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    let isValid = true;

    // Очистка предыдущих ошибок
    form.querySelectorAll(".form__error").forEach((errorElement) => {
      errorElement.textContent = "";
    });
    form.querySelectorAll(".form__input--error").forEach((input) => {
      input.classList.remove("form__input--error");
    });

    // Проверка имени
    const nameInput = form.querySelector("#name");
    if (!nameInput.value.trim()) {
      const errorElement = nameInput
        .closest(".form__label")
        .querySelector(".form__error");
      errorElement.textContent = "Введите ваше имя";
      nameInput.classList.add("form__input--error");
      isValid = false;
    }

    // Проверка email
    const emailInput = form.querySelector("#email");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim()) {
      const errorElement = emailInput
        .closest(".form__label")
        .querySelector(".form__error");
      errorElement.textContent = "Введите ваш Email";
      emailInput.classList.add("form__input--error");
      isValid = false;
    } else if (!emailRegex.test(emailInput.value)) {
      const errorElement = emailInput
        .closest(".form__label")
        .querySelector(".form__error");
      errorElement.textContent = "Введите корректный Email";
      emailInput.classList.add("form__input--error");
      isValid = false;
    }

    // Проверка организации
    const organizationInput = form.querySelector("#organization");
    if (!organizationInput.value.trim()) {
      const errorElement = organizationInput
        .closest(".form__label")
        .querySelector(".form__error");
      errorElement.textContent = "Введите название или ИНН организации";
      organizationInput.classList.add("form__input--error");
      isValid = false;
    }

    // Проверка должности
    const positionInput = form.querySelector("#position");
    if (!positionInput.value.trim()) {
      const errorElement = positionInput
        .closest(".form__label")
        .querySelector(".form__error");
      errorElement.textContent = "Введите вашу должность";
      positionInput.classList.add("form__input--error");
      isValid = false;
    }

    // Проверка согласия
    const consentInput = form.querySelector("#consent");
    if (!consentInput.checked) {
      const errorElement = consentInput
        .closest(".form__consent-group")
        .querySelector(".form__error");
      if (errorElement) {
        errorElement.textContent = "Вы должны согласиться с правилами";
      }
      isValid = false;
    }

    if (isValid) {
      const formData = new FormData(form);
      const data = {};
      formData.forEach((value, key) => {
        data[key] = value;
      });
      console.log("Form Data:", data);

      closeModal();
    }
  });
}

function closeModal() {
  const overlay = document.querySelector(".modal-overlay");
  const modal = document.querySelector(".modal");
  if (overlay) overlay.remove();
  if (modal) modal.remove();
  document.body.classList.remove("no-scroll");
}
