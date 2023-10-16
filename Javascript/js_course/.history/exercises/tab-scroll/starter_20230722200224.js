window.addEventListener("load", function () {
  const tabItems = document.querySelectorAll(".tab-items");
  const tabList = document.querySelectorAll(".tab-list");
  const tab = document.querySelectorAll(".tab");
  const tabOffsetLeft = tab.offsetLeft;
  [...tabItems].forEach(
    (items) => items.addEventListener("click"),
    handleTabClick
  );
  function handleTabClick(event) {
    [...tabItems].forEach((item) => item.classList.remove("active"));
    e.target.classList.add("active");
    let leftSpacing = e.target.offsetLeft - tabOffsetLeft;
    
  }
});
