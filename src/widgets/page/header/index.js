import App from "../../../app/App.js";

App.install(".js-header", (header) => {
  let scrolled = false;

  function calcHeaderHeight() {
    const headerHeight = header.offsetHeight;
    document.body.style.setProperty("--header-height", `${headerHeight}px`);
  }

  function scrollWatch() {
    if (window.scrollY > 10) {
      scrolled = true;
      header.classList.add("_scrolled");
    } else {
      scrolled = false;
      header.classList.remove("_scrolled");
    }
  }

  calcHeaderHeight();
  scrollWatch();
  window.addEventListener("resize", calcHeaderHeight);
  window.addEventListener("scroll", scrollWatch);
});