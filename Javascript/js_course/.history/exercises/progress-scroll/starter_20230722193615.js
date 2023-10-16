const progress = document.querySelector(".progcess");
window.addEventListener("scroll", function () {
  const scrollTop = window.pageYOffset;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const width = (scrollTop / height) * 100;
  progress.style.width = `${width}%`;
});
