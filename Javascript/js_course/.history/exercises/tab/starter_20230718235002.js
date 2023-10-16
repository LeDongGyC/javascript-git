const tabs = document.querySelectorAll(".tab-item");
const tabsContent = document.querySelectorAll(".tab-content");
[...tabs].forEach((items) => items.addEventListener("click", handleTabClick));
function handleTabClick(event) {
  [...tabs].forEach((items) => items.classList.remove("active"));
  event.target.classList.add("active");
  const tabId = parseInt(event.target.dataset.tab);
  [...tabsContent].forEach((items) => {
    items.classList.remove("active");
    if(event.<div class="container">
        <div class="row">
            <div class="col-4">
                First Column
            </div>
            <div class="col-4">
                Second Column
            </div>
            
        </div>
    </div>)
  });

  [...tabsContent][tabId - 1].classList.add("active");
}
