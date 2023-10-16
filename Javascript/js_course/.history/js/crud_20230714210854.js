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
img.setAttribute("src","https://www.google.com.vn/imgres?imgurl=https%3A%2F%2Fphunugioi.com%2Fwp-content%2Fuploads%2F2020%2F02%2Fhinh-anh-ly-cafe-dep.jpg&tbnid=VtvBMFGUuDR_SM&vet=12ahUKEwinvZbhr46AAxURaN4KHREYClEQMygAegUIARC_AQ..i&imgrefurl=https%3A%2F%2Fpgdphurieng.edu.vn%2Fbo-suu-tap-hinh-anh-cafe-cuc-chat-voi-hon-999-hinh-anh-do-phan-giai-cao-4k%2F&docid=Xvg2ErdTjBBSqM&w=1600&h=1068&q=h%C3%ACnh%20%E1%BA%A3nh%20cafe&hl=vi&ved=2ahUKEwinvZbhr46AAxURaN4KHREYClEQMygAegUIARC_AQ");
img.setAttribute("alt"," ");
img.classList.add("card-image");
body.appendChild(card);
card.appendChild(img)