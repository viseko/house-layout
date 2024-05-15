const params = {
  showSelector: ".js-modal-show",
  closeSelector: ".js-modal-close",
  overlaySelector: ".js-overlay",
  bodyStateClass: "_modal-show",
  modalStateClass: "_show"
};

let isModalActive = false;
let activeModal = null;

const showElems = document.querySelectorAll(params.showSelector);
const overlay = document.querySelector(params.overlaySelector);
const closeElems = document.querySelectorAll(params.closeSelector);
const modals = document.querySelectorAll(".modal");

if (showElems.length && overlay && closeElems && modals.length) {
  initModals();
}

function initModals() {
  showElems.forEach(elem => {
    elem.addEventListener("click", function(e) {
      e.preventDefault();

      const modalId = elem.dataset.modal;
      if (!modalId) return;

      const modal = document.getElementById(modalId);

      if (!modal) {
        throw new Error(`Не найден элемент модального окна с id ${modalId}`)
      }

      showModal(modal);
    })
  });

  closeElems.forEach(elem => {
    elem.addEventListener("click", closeModal);
  });

  overlay.addEventListener("click", closeModal);
}

function showModal(elem) {
  elem.classList.add(params.modalStateClass);
  document.body.classList.add(params.bodyStateClass);

  activeModal = elem;
  isModalActive = true;
}

function closeModal() {
  if (activeModal) {
    activeModal.classList.remove(params.modalStateClass);
    document.body.classList.remove(params.bodyStateClass);
    activeModal = null;
    isModalActive = false;
  }
}

// Диалоговое окно
let dialogAction = null;

export function showDialog(options) {
  const {title, question, actionText, action} = options;

  const dialog = document.getElementById("modal-dialog");

  if (!dialog) {
    throw new Error("В разметке отсутствует диалоговое окно.")
  }

  const titleElem = dialog.querySelector("[data-role='title']");
  const questionElem = dialog.querySelector("[data-role='question']");
  const actionElem = dialog.querySelector("[data-role='action']");

  titleElem.innerHTML = title || "";
  questionElem.innerHTML = question || "";
  actionElem.innerHTML = actionText;

  if (dialogAction) {
    actionElem.removeEventListener("click", dialogAction);
  }

  dialogAction = action;
  actionElem.addEventListener("click", dialogAction);

  showModal(dialog);
}