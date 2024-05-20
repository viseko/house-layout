// import adaptiveMove from "./modules/adaptive-move.js";
// import checkNavigator from "./modules/check-navigator.js";
import calcScrollbarWidth from "./modules/calc-scrollbar-width.js";
import calcVh from "./modules/calc-vh.js";
import fancybox from "./modules/fancybox.js";

const App = {
  modules: [
    // adaptiveMove,
    // checkNavigator,
    calcScrollbarWidth,
    calcVh,
    fancybox
  ],

  components: [],

  // Размеры для вычисления mathchMedia и брейкпойнтов
  sizes: {
    xs: 400,
    sm: 546,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400,
  },

  getMedia(size, mobileFirst = false) {
    const value = this.sizes[size];

    return (
      mobileFirst 
        ? matchMedia(`(min-width: ${value + 1}px)`)
        : matchMedia(`(max-width: ${value}px)`)
    );
  },

  // Инициализация html-элемента по селектору через класс
  installClass(selector, constructor, options = {}) {
    const elems = document.querySelectorAll(selector);
    const initializatedObjs = [];

    if (elems.length > 0) {
      elems.forEach(elem => {
        const component = initializatedObjs.push(new constructor(elem, options));
        component && this.components.push(component);
      });
    }

    return initializatedObjs;
  },

  // Инициализация html-элемента по селектору через функцию
  install(selector, func, options = {}) {
    const elems = document.querySelectorAll(selector);
    const initializatedObjs = [];

    if (elems.length > 0) {
      elems.forEach(elem => {
        initializatedObjs.push(func(elem, options));
      });
    }

    return initializatedObjs;
  },

  // Подгрузка доп. скриптов
  importVendor(options) {
    const { path, onload, onerror } = options;
    const script = document.createElement("script");
    script.src = path;

    script.addEventListener("load", onload);
    script.addEventListener("error", onerror);

    document.body.append(script);
  },

  init() {
    this.modules.forEach(module => module());
    window.App = this;
  },
};

const {
  install,
  installClass,
  getMedia,
  importVendor
} = App;

export {
  install,
  installClass,
  getMedia,
  importVendor
};

export default App;