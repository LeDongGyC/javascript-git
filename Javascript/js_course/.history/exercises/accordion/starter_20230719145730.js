const accordionHeaders = document.querySelectorAll(".accordion-headers");
[...accordionHeaders].forEach((items) =>
  items.addEventListener("click", handleClickAccordion)
);
function handleClickAccordion(event) {
    const content = event.target
}
