import App from "../../../app/App.js";

App.install(".js-menu-button", (button) => {
  let isMenuOpened = false;
  const stateClass = "_menu-open";

  button.addEventListener("click", () => {
    document.body.classList.toggle(stateClass);
    isMenuOpened = !isMenuOpened;
  });

  document.addEventListener("keydown", (event) => {
    if (isMenuOpened && event.key === "Escape") {
      document.body.classList.remove(stateClass);
    isMenuOpened = false;
    }
  });
});