// bài 1: đảo ngược 1 chuỗi "My nanme is Le Dong";
function reverseString(str){
    const arrStr = str.split(" ");
    const reArrStr = arrStr.reverse();
    const result = reArrStr.join(" ");
    console.log(reArrStr);

}
reverseString("My nanme is Le Dong")