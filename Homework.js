//Homework
//1.Difference(s) between == and ===?
// == là so sánh giá trị nhưng không so sánh dữ liệu vd: console.log(5 == "5") => true(vì "5" này được chuyển thành dữ liệu trước đó)
// === là so sánh giá trị và cả dữ liệu vd: console.log(5 === "5") => false(vì "5" là chuỗi khác số)
//Use variables and operators to:
//Calculate BMI (Body Mass Index= chi so co the)
const weight = 55;
const height = 1.74;
const BMI = weight / (height * height);
console.log("BMI: ", BMI);


//Calculate Simple Interest (principal=so tien gui * rate= lai xuat * time)
let principal = 3000;
let rat = 0.5
const time = 15;
const Interest = principal * rat * time;
console.log("Interest: ", Interest);


//Convert Currency (USD to local currency= chuyen doi tien te)
let money = 50000;
const local = 25000;
const Currency = money * local;
console.log("Currency: ", Currency);




//Calculate Time (hours:minutes:seconds=tinh thoi gian)
let now = new Date();
let hours = now.getHours.toString().padStart(2, '0');
let minutes = now.getMinutes.toString().padStart(3, '0');
let seconds =  now.getSeconds.toString().padStart(4, '0');
let time1 = `${hours}:${minutes}:${seconds}`;
console.log("Time1: ", now);