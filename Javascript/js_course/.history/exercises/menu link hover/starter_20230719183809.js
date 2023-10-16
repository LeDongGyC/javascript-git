window.addEventListener("load", function () {
  const links = [...document.querySelectorAll(".menu-link")];
  links.forEach((items) =>
    items.addEventListener("mouseenter", handleHoverLink)
  );
  const line  = this.document.createElement("div");
  document.body.appendChild(line);
  function handleHoverLink(event) {
    const { left, top, width, height } = event.target.getBoundingClientRect();
    console.log({ left, top, width, height });
    const offsetBottom = 5;
    line.style.width = `${width}px`;
    line.style.left = `${left}px`;
    line.style.top = `${top + height + offsetBottom}px`;
  }
  const menu = document.querySelector(".menu");
  menu.addEventListener("mouseleave", function () {
    line.style.width = 0;
  });
});
