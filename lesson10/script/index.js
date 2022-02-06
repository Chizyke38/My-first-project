let ourResult;
let grandTotal;
let userpercentYear = 5;
let clientYear = 365;
let monthBet = 60;
let yourPercent = 100;

grandTotal = prompt(" сумма грошей : ");
ourResult =
  (grandTotal * userpercentYear * monthBet) / clientYear / yourPercent;
alert(`ви отримаєте : ${ourResult}`);

let userTry = 2 && 0 && 3;
console.log("userTry");

let userSecond = 2 || 0 || 3;

console.log("userSecond");

let userThird = (2 && 0) || 3;
console.log("userThird");
