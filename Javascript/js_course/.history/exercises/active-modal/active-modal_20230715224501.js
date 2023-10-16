
const modal = document.createElement("div");
modal.classList.add("modal");
document.body.appendChild(modal);
const modalContent = document.createElement("div");
modalContent.classList.add("modal-content");
modal.appendChild(modalContent);
const modalClose = document.createElement("i");
modalClose.className = "fa fa-times modal-close";
modalContent.appendChild(modalClose);
const modalDesc = document.createElement("div");
modalDesc.classList.add("modal-desc");
modalDesc.textContent =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, corporis neque! Molestias voluptates commodi doloremque eius, aut tempore et tenetur expedita totam molestiae maxime culpa nihil sapiente quos rerum error?";
modalContent.appendChild(modalDesc);
const modalAction = document.createElement("div");
modalAction.classList.add("modal-action");
modalContent.appendChild(modalAction);
const modalSubmit = document.createElement("button");
modalSubmit.classList.add("modal-submit");
modalSubmit.textContent = "Confirm"
modalAction.appendChild(modalSubmit);
const modalCancel = document.createElement("button");
modalCancel.textContent = "Cancel"
modalSubmit.classList.add("modal-cancel");
modalAction.appendChild(modalCancel);
const modalSelector = document.querySelector(".modal");
if (modal) {
  setTimeout(function () {
    modalSelector.classList.add("is-show");
  }, 2000);
}
