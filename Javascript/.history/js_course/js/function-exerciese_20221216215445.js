// 1. viết hàm so sánh 2 số a, b tìm ra số lớn hơn
function compare(a,b){
    let message = "";
    if(a>b){
        message = `số lớn hơn là số ${a}`;
    } else if(a<b) {
        message = `số lớn hơn là số ${b}`;
    } else{
        message = `2 số bằng nhau`;
    }
    return alert(message);
}
compare(10,4);

// 2.In hoa chữ cái đầu tiên
function capitalize(name=""){
    if(name.length ===0)
    console.log("🚀 ~ file: function-exerciese.js:18 ~ capitalize ~ 0", 0)
}