/**
     <div class="modal">
        <div class="modal-content">
            <i class="fa fa-times modal-close"></i>
            <div class="modal-desc">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
                iure veniam reiciendis, accusamus dolorum exercitationem voluptates?
                Eos a recusandae consectetur non eveniet quam, id atque? Atque ex
                impedit quam eveniet!
            </div>
            <div class="modal-action">
                <button class="modal-submit">Confirm</button>
                <button class="modal-cancel">Cancel</button>
            </div>
        </div>
    </div>
 */
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
modalDesc
// const modal = document.querySelector(".modal");
// if (modal) {
//   setTimeout(function () {
//     modal.classList.add("is-show");
//   }, 2000);
// }
