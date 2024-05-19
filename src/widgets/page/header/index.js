import App from "../../../app/App.js";

App.install(".js-header", (header) => {
  function calcHeaderHeight() {
    const headerHeight = header.offsetHeight;
    document.body.style.setProperty("--header-height", `${headerHeight}px`);
  }

  calcHeaderHeight();
  window.addEventListener("resize", calcHeaderHeight);
});