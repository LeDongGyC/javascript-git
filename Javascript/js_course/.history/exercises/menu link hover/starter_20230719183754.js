window.addEventListener("load", function () {
  const links = [...document.querySelectorAll(".menu-link")];
  links.forEach((items) =>
    items.addEventListener("mouseenter", handleHoverLink)
  );
  const line  = this.document.createElement("div");
  document.body.appendChild(line);
});
