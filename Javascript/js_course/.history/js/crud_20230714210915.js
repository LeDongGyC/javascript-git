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
img.setAttribute("src","https://www.google.com.vn/imgres?imgurl=https%3A%2F%2Fanhdepfree.com%2Fwp-content%2Fuploads%2F2019%2F07%2Fhinh-anh-ly-cafe-dep-1.jpeg&tbnid=ZUHogDh1LTWZgM&vet=12ahUKEwinvZbhr46AAxURaN4KHREYClEQMygBegUIARDBAQ..i&imgrefurl=https%3A%2F%2Fanhdepfree.com%2Ftong-hop-hinh-anh-ly-cafe-dep-nhat%2F&docid=9Jvf-QFp6VbCXM&w=600&h=600&q=h%C3%ACnh%20%E1%BA%A3nh%20cafe&hl=vi&ved=2ahUKEwinvZbhr46AAxURaN4KHREYClEQMygBegUIARDBAQ");
img.setAttribute("alt"," ");
img.classList.add("card-image");
body.appendChild(card);
card.appendChild(img)