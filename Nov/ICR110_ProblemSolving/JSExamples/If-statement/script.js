alert("TEST");

// console.log("First Question");
// for (let num = 1; num <= 100; num++) {
//   console.log(num);
// }

// console.log("Second Question");
// for (let num = 1; num <= 100; num++) {
//   console.log(num * 3);
// }

// console.log("Third Question");
// for (let num = 0; num < 100; num++) {
//   let string = "";
//   if (num % 3 && num % 5) {
//     string += "fizBuzz";
//   } else if (num % 5) {
//     string += "buzz";
//   } else if (num % 3) {
//     string += "fizz";
//   }
//   console.log(string);
// }

// console.log("Forth Question");
// function increaseTemperature(temp) {
//   console.log("Temperature Check");
//   while (temp < 21) {
//     console.log("Turn on Heat");
//     console.log("Increase Temperature")
//     temp ++
//   }
//   console.log(temp)
// }
// increaseTemperature(20);

// console.log("Fifth Question");
// function buyableBooks() {
//   const bookPrice = 25;
//   const budget = 85;
//   let count = 0;
//   while (bookPrice * count < budget - bookPrice) {
//     count++;
//   }
//   console.log(count);
// }
// buyableBooks();

// function factorial () {
//   let facto = 1;
//   for (let i = 1; i < 5; i ++) {
//     facto *= i;
//   } 
//   console.log(facto);
// }
// factorial();

// var beverage = "coffee";

// if (beverage == "coffee") {
//   //print will be replaced by alert
//   alert("coffee");
// } else if (beverage == "tea") {
//   //print will be replaced by alert
//   alert("tea");
// } else {
//   alert("water");
// }

/** Questions */
// 1
const beverage = "coffee";
if (beverage === "coffee") {
  console.log("COFFEE")
} else if (beverage === "tea") {
  console.log("TEA")
} else {
  console.log("WATER")
}

// 2
let x2 = 8;
let y2 = 9;
if (x2 === 4 + 5 || x2 + y2 === 17) {
  console.log("TRUE")
} else {
  console.log("ERROR")
}

// 3
let x3 = 12;
if (x3 % 3 && x3 % 5) {
  console.log("fizzbuzz")
} else if (x3 % 3) {
  console.log("fizz")
} else if (x3 % 5) {
  console.log("buzz")
}

// 4
let x4 = 15;
if (x4 % 3 && x4 % 5) {
  console.log("fizzbuzz")
} else if (x4 % 3) {
  console.log("fizz")
} else if (x4 % 5) {
  console.log("buzz")
}

// 5
let x5 = 500;
if (x5 !== 2*250) {
  console.log("TRUE")
} else console.log("FALSE");