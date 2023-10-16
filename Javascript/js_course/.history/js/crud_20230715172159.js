// // const h1 = document.createElement("div");
// // const h2 = document.createElement("div")
// h1.textContent = "Hello"
// // h1 = "Hello";
const body = document.body;
// body.appendChild(h1)
// h1.appendChild(h2)
const card = document.createElement("div")
card.classList.add("card")
const img = document.createElement("img");
// img.setAttribute("src","https://haycafe.vn/wp-content/uploads/2021/12/Hinh-anh-cafe-da.jpg");
img.setAttribute("alt","");
img.classList.add("card-image");
body.appendChild(card);
card.appendChild(img)
const textNote = document.textNote("")