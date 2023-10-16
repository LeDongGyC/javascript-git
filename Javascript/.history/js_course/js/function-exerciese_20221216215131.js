// 1. viết hàm so sánh 2 số a, b tìm ra số lớn hơn
function compare(a,b){
    const message = "";
    if(a>b){
        message = `số lớn hơn là số ${a}`;
    } else if(a<b) {
        message = `số lớn hơn là số ${b}`;
    } else{
        message = `2 số bằng nhau`
    }
    return alert(message);
}
compare(1,2);