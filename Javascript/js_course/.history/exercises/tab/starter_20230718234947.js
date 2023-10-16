const tabs = document.querySelectorAll(".tab-item");
const tabsContent = document.querySelectorAll(".tab-content");
[...tabs].forEach((items) => items.addEventListener("click", handleTabClick));
function handleTabClick(event) {
  [...tabs].forEach((items) => items.classList.remove("active"));
  event.target.classList.add("active");
  const tabId = parseInt(event.target.dataset.tab);
  [...tabsContent].forEach((items) => {
    items.classList.remove("active");
    if
  });

  [...tabsContent][tabId - 1].classList.add("active");
}
