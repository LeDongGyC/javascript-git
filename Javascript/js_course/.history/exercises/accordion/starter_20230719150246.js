const accordionHeaders = document.querySelectorAll(".accordion-header");
[...accordionHeaders].forEach((items) =>
  items.addEventListener("click", handleClickAccordion)
);
function handleClickAccordion(event) {
  const content = event.target.nextElementSibling;
  content.classList.toggle("is-active");
  content.style.height = `${content.scrollHeight}px`
  if(!content.classList.contains("is-active")){
    content.style.height = ""
  }
  const icon = event.target.querySelector(".icon");
  icon.classList.toggle("fa-angle-down");
  icon.classList.toggle("fa-angle-up");
}
