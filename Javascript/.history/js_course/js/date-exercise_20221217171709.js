// Bài tập:
// 1. Viết chương trình nhập vào năm sinh và in ra số tuổi - dễ
// 2. Viết chương trình đếm ngược thời gian theo từng giây(countdown) dựa vào thời gian đầu vào. Ví dụ thời gian làm bài là 30 phút nếu chạy về 0 thì thông báo đã hết thời gian - trung bình
// 3. Viết chương trình có tên là timeSince, đầu vào là thời gian và tính thời gian đầu vào so với thời gian hiện tại, ví dụ: bạn đang chat với 1 bạn A, sau đó bạn A offline và sau đó vài phút thì hiển thị bạn A vừa online `3 phút trước`, `3 ngày trước`, `2 tháng trước`, `30 giây trước`, `1 năm trước` - khó
// function countdown(minutes = 1) {
//   let seconds = minutes * 60;
//   let counter = 0;
//   const timer = setInterval(function () {
//     counter += 1;
//     console.log(counter);
//     if (counter == seconds) {

//         clearInterval(timer);
//         alert("TIME OUT!!!");
//     }
//   }, 1000);
// }
// countdown(1);
// bài 2:
// function countdown(minutes) {
//   let seconds = minutes * 60;
//   let counter = 0;
//   const timer = setInterval(function () {
//     counter += 1;
//     console.log(counter);
//     if (counter == seconds) {
//       clearInterval(timer);
//       alert("GET OUT");
//     }
//   }, 1000);
// }
// countdown(1);

// bài 3:
function timeSince(date) {
  const now = new Date();
  const yourDate = new Date(date);
  const seconds = Math.floor((now.getTime() - yourDate.getTime()) / 1000);
  let timer = seconds / 31536000;
  if(timer>1){
    console.log()
    console.log("🚀 ~ file: date-exercise.js:42 ~ timeSince ~ console.log()", console.log())
  }
}
