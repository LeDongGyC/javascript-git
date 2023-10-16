const colors = [
  "#ffa400",
  "#00aefd",
  "#ff6bcb",
  "#07a787",
  "#2979ff",
  "#e74c3c",
  "#3D6EF7",
];
function handleChanging() {
  const index = colorsMath.floor(Math.random * colors.length);
  document.body.style.backgroundColor = index;
}
document.querySelector(".change").addEventListener("click",handleChanging)
