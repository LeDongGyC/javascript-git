window.addEventListener("load", function () {
  const tabItems = document.querySelectorAll(".tab-item");
  const tabList = document.querySelectorAll(".tab-list");
  const tab = document.querySelectorAll(".tab");
  const tabOffsetLeft = tab.offsetLeft;
  [...tabItems].forEach((item) =>
    item.addEventListener("click", handleTabClick)
  );
  function handleTabClick(event) {
    [...tabItems].forEach((item) => item.classList.remove("active"));
    event.target.classList.add("active");
    let leftSpacing = event.target.offsetLeft - tabOffsetLeft;
    tabList.scroll()
  }
});
