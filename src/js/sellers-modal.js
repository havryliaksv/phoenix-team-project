const MODAL_ACTIVE_CLASS_NAME = "modal-active";

const formModal = document.querySelector("#buy-now-modal");
const successModal = document.querySelector("#thank-you-modal");
const form = document.querySelector("#hero-modal__form");

const openFormModalBtn = document.querySelector("#sellers-btn-buy");
const launchBtn = document.querySelector("#hero-modal-submit");
const closeBtns = document.querySelectorAll(".hero-modal-close");

openFormModalBtn.addEventListener("click", () => {
  formModal.classList.add(MODAL_ACTIVE_CLASS_NAME);
});

const closeFormModal = () => {
  formModal.classList.remove(MODAL_ACTIVE_CLASS_NAME);
};

const closeSuccessModal = () => {
  successModal.classList.remove(MODAL_ACTIVE_CLASS_NAME);
};

const openSuccessModal = () => {
  successModal.classList.add(MODAL_ACTIVE_CLASS_NAME);
};

closeBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    closeFormModal();
    closeSuccessModal();
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  closeFormModal();
  setTimeout(openSuccessModal, 250);
  setTimeout(closeSuccessModal, 0);
});
