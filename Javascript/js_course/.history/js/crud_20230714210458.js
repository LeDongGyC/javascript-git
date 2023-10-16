// // const h1 = document.createElement("div");
// // const h2 = document.createElement("div")
// h1.textContent = "Hello"
// // h1 = "Hello";
const body = document.body;
// body.appendChild(h1)
// h1.appendChild(h2)
const card = document.createElement("div")
card.className("card")
const img = document.createElement("img");
img.setAttribute("src","img.com");
img.className("card-image");
body.appendChild(card)