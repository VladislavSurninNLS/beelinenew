export function openModal() {
	// Создаем оверлей
	const overlay = document.createElement('div');
	overlay.classList.add('modal-overlay');
	overlay.addEventListener('click', closeModal);

	// Создаем модальное окно
	const modal = document.createElement('div');
	modal.classList.add('modal');
	modal.innerHTML = `
			<h2 class="modal__title">Принять участие</h2>
			<form class="form">
					<div class="form__fields">
							<div class="form__line">
							<label class="form__label">
									<input
											type="text"
											id="name"
											name="name"
											class="form__input"
											placeholder="Имя"
											required
									/>
									<span class="visually-hidden">Введите ваше имя</span>
							</label>
							<label class="form__label">
									<input
											type="email"
											id="email"
											name="email"
											class="form__input"
											placeholder="E-mail"
											required
									/>
									<span class="visually-hidden">Введите ваш Email</span>
							</label>
							</div>
							<label class="form__label">
									<input
											type="text"
											id="organization"
											name="organization"
											class="form__input"
											placeholder="Название или ИНН организации"
											required
									/>
									<span class="visually-hidden">Название или ИНН организации</span>
							</label>
							<label class="form__label">
									<input
											type="text"
											id="position"
											name="position"
											class="form__input"
											placeholder="Должность"
											required
									/>
									<span class="visually-hidden">Должность</span>
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
							<input type="checkbox" id="consent" name="consent" required />
							<label for="consent" class="form__consent-label">
									Согласен(а) с правилами 
									<a href="#" class="form__link">Политики конфиденциальности</a>
							</label>
					</div>
					<button type="submit" class="button button--form">Отправить</button>
			</form>
	`;

	// Добавляем элементы в DOM
	const closeButton = document.createElement('button');
	closeButton.classList.add('modal__close');
	closeButton.addEventListener('click', closeModal);
	modal.appendChild(closeButton);
	document.body.appendChild(overlay);
	document.body.appendChild(modal);
	document.body.classList.add('no-scroll');

	const form = modal.querySelector('#participation-form');
	form.addEventListener('submit', (event) => {
			event.preventDefault();

			const formData = new FormData(form);
			const data = {};
			formData.forEach((value, key) => {
					data[key] = value;
			});
			console.log('Form Data:', data);

			closeModal();
	});
}

function closeModal() {
	const overlay = document.querySelector('.modal-overlay');
	const modal = document.querySelector('.modal');
	if (overlay) overlay.remove();
	if (modal) modal.remove();
	document.body.classList.remove('no-scroll');
}