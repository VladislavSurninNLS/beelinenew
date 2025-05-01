export function burgerInit() {
  const button = document.querySelector(".button_menu");
  const headerWrapper = document.querySelector(".header__wrapper");
  const navLinks = document.querySelectorAll(".nav__item a");

  const closeMenu = (event) => {
    if (!event.composedPath().includes(headerWrapper)) {
      headerWrapper.classList.remove("header__wrapper--open");
    }
  };

  button.addEventListener("click", () => {
    headerWrapper.classList.toggle("header__wrapper--open");
  });

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      headerWrapper.classList.remove("header__wrapper--open");
    });
  });

  document.addEventListener("click", closeMenu);
}
