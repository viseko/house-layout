import InputCode from "../../classes/input-code.js";
import ImageField from "../../classes/input-image.js";
import InputPassword from "../../classes/input-password.js";
import InputRate from "../../classes/input-rate.js";
import InputSelect from "../../classes/input-select.js";
import InputText from "../../classes/input-text.js";
import InputDate from "../../classes/input-date.js";
import InputDateSingle from "../../classes/input-date-single.js";
import SearchField from "../../classes/search-field.js";

import App from "../../../app/App.js";

// Обычные поля ввода
App.installClass(".js-input", InputText, {
  blurValidate: true,
});

// Поля ввода тел. номера
App.installClass(".js-input-phone", InputText, {
  mask: "+7 ___ ___-__-__",
  blurValidate: true,
  minLength: 16,
  errors: {
    "minlength": "Введите номер полностью"
  }
});

// Поля ввода почты
App.installClass(".js-input-email", InputText, {
  pattern: /.+@.+\..+/,
  blurValidate: true,
  errors: {
    "pattern": "Некорректный формат эл. почты"
  }
});

// Поля ввода пароля
App.installClass(".js-input-password", InputPassword, {
  required: true,
  blurValidate: true,
  minLength: 6
});

// Селекты
App.installClass(".js-input-select", InputSelect);

// Звёздочки рейтинга
App.installClass(".js-input-rate", InputRate);

// Ввод кода подтверждения
App.installClass(".js-input-code", InputCode);

// Поле загрузки фото
App.installClass(".js-image-field", ImageField);

// Выбор диапазона дат
App.installClass(".js-date-field", InputDate);

// Выбор диапазона дат
App.installClass(".js-date-field-single", InputDateSingle);

// Панели поиска
App.installClass(".js-search", SearchField);