// Вычисление ширины скроллбара в браузере
export default function calcScrollbarWidth() {
  let el = document.createElement("div");
  el.style.cssText = "overflow:scroll; visibility:hidden; position:absolute;";
  document.body.appendChild(el);
  let width = el.offsetWidth - el.clientWidth;
  el.remove();

  document.body.style.setProperty("--scrollbar-width", `${width}px`);
}