alert("TEST");

console.log("First Question");
for (let num = 1; num <= 100; num++) {
  console.log(num);
}

console.log("Second Question");
for (let num = 1; num <= 100; num++) {
  console.log(num * 3);
}

console.log("Third Question");
for (let num = 0; num < 100; num++) {
  let string = "";
  if (num % 3 && num % 5) {
    string += "fizBuzz";
  } else if (num % 5) {
    string += "buzz";
  } else if (num % 3) {
    string += "fizz";
  }
  console.log(string);
}

console.log("Forth Question");
function increaseTemperature(temp) {
  console.log("Temperature Check");
  while (temp < 21) {
    console.log("Turn on Heat");
    console.log("Increase Temperature")
    temp ++
  }
  console.log(temp)
}
increaseTemperature(20);

console.log("Fifth Question");
function buyableBooks() {
  const bookPrice = 25;
  const budget = 85;
  let count = 0;
  while (bookPrice * count < budget - bookPrice) {
    count++;
  }
  console.log(count);
}
buyableBooks();