function debounceFn(func, wait, immediate) {
  let timeout;
  return function () {
    let context = this,
      args = arguments;
    let later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
const header = document.querySelector(".header");
const headerHeight = header.offsetHeight;
window.addEventListener("scroll", debounceFn(function(event){
    const scrollY = window.pageYOffset;
    if(scrollY >= headerHeight){
        header.classList.add("")
    }
}))