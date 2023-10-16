// 1. viết hàm so sánh 2 số a, b tìm ra số lớn hơn
function compare(a, b) {
  let message = "";
  if (a > b) {
    message = `số lớn hơn là số ${a}`;
  } else if (a < b) {
    message = `số lớn hơn là số ${b}`;
  } else {
    message = `2 số bằng nhau`;
  }
  return (message);
}
// compare(10, 4);

// 2.In hoa chữ cái đầu tiên
// function capitalize(name = "") {
//   if (name.length === 0) {
//     return null;
//   }
//   let newName = name.trim().toUpperCase().charAt(0).toUpperCase();
//   let otherName = name.slice(1);
//   let fullName = `${newName}${otherName}`;
//   function getName(){
//      console.log(fullName);
//   }
//   return getName;
// }
// let a = capitalize("dong");
// a();
function useCallback(a,b,callback){
    let max = compare(a,b);
    callback(max)
}
console.log(useCallback(1,2))
function capitalize(name=""){
    if(name.length===0){
        return null;
    }
    let firstChar= name.trim().toLowerCase().charAt(0).toUpperCase();
    let otherName = name.slice(1);
    let fullName = `${firstChar}${otherName}`;
    function getName(){
        console.log(fullName);
    }
    return getName;
}
let a = capitalize("dong");
a();
