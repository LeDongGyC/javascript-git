window.addEventListener("load", function () {
  const togglePassword = document.querySelector(".toggle");
  togglePassword.addEventListener("click", function () {
    togglePassword.classList.add("fa fa-eye-slash")
    togglePassword.classList.remove("fa fa-eye")
    const input = this.previousElementSibling;
    const inputType = input.getAttribute("type");
    if (inputType === "password") {
      input.setAttribute("type", "text");
    } else {
      input.setAttribute("type", "password");
    }
  });
});
