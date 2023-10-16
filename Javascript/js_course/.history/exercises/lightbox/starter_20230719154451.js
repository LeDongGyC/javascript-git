const images = document.querySelectorAll(".content img");
[...images].forEach((items) => items.addEventListener("click", handleZoomImage));
function handleZoomImage(event) {
    const image = event.target.getAttribute("src");
    const template = `
   <div class="lightbox">
     <div class="lightbox-content">
       <i class="fa fa-angle-left lightbox-prev"></i>
       <img
         src="${image}"
         alt=""
         class="lightbox-image"
       />
       <i class="fa fa-angle-right lightbox-next"></i>
     </div>
   </div>`;
  document.body.insertAdjacentHTML("beforeend", template);
}
let index = 0;
document.addEventListener("click", function(event){
    const lightImage = document.querySelector(".lightbox-image");
    let ligthSrc = lightImage.getAttribute("src");
    index = [...images].findIndex(
        (item) => item.getAttribute("src") === lightSrc
      );
    if(event.target.matches(".lightbox")) {
        event.target.parentNode.removeChild(event.target);
    }
})
