const accordionHeaders = document.querySelectorAll(".accordion-headers");
[...accordionHeaders].forEach((items) => items.addEventListener("click", handleClickAccordion))