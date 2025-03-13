//Homework
//1.Difference(s) between == and ===?
let weight = 55;
let height = 1.74;
let BMI = weight / (height * height);
console.log("BMI: ", BMI);


//Calculate Simple Interest
let principal = 3000;
let rat = 0.5
let time = 15;
let interest = principal * rat * time;
console.log("Interest: ", Interest);


//Convert Currency
let money = 50000;
let local = 25000;
let currency = money * local;
console.log("Currency: ", Currency);




//Calculate Time
let now = new Date();
let hours = now.getHours.toString().padStart(2, '0');
let minutes = now.getMinutes.toString().padStart(3, '0');
let seconds =  now.getSeconds.toString().padStart(4, '0');
let time1 = `${hours}:${minutes}:${seconds}`;
console.log("time: ", now);