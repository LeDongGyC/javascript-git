const tabs = document.querySelectorAll(".tab-items");
const tabsContent = document.querySelectorAll(".tab-content");
[...tabs].forEach((items) => items.addEventListener("click", handleTabClick));
function handleTabClick(event) {
  [...tabs].forEach((items) => items.classList.remove("active"));
  event.target.classList.add("active");
  console.log("🚀 ~ file: starter.js:7 ~ handleTabClick ~ classList:", classList)
}