// bài 1: đảo ngược 1 chuỗi "My nanme is Le Dong";
// function reverseString(str){
//     const arrStr = str.split(" ");
//     const reArrStr = arrStr.reverse().join(" ");
//     console.log(reArrStr)
//     // const result = reArrStr.join(" ");
//     // console.log(result);

// }
// reverseString("My nanme is Le Dong")
// bài 2: dảo ngược 1 chuỗi bao gồm các kí tự i love -> evol i
function reverseWord(str){
    const arrStr = str.split("").reverse().join("");
    console.log(arrStr);
}
reverseWord("i love")
// 3. In hoa chữ cái đầu trong chuỗi ví dụ: "my name is evondev" -> "My Name Is Evondev"
function capitalizeWord(word = ""){
    let newWord = word.charAt(0).toUpperCase();
    let otherWord = word.slice(1).toLowerCase()
}