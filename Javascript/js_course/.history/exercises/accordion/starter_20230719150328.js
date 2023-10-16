const accordionHeaders = document.querySelectorAll(".accordion-header");
[...accordionHeaders].forEach((items) =>
  items.addEventListener("click", handleClickAccordion)
);
function handleClickAccordion(event) {
  const content = event.target.nextElementSibling;
  content.style.height = `${content.scrollHeight}px`
  content.classList.toggle("is-active");
  if(!content.classList.contains("is-active")){
    content.style.height = "0px"
  }
  const icon = event.target.querySelector(".icon");
  icon.classList.toggle("fa-angle-down");
  icon.classList.toggle("fa-angle-up");
}
