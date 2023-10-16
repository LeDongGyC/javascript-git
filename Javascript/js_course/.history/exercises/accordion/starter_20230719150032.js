const accordionHeaders = document.querySelectorAll(".accordion-header");
[...accordionHeaders].forEach((items) =>
  items.addEventListener("click", handleClickAccordion)
);
function handleClickAccordion(event) {
  const content = event.target.nextElementSibling;
  content.classList.toggle("is-active");
  const icon = event.target.qure
}
