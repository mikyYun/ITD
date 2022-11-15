* Booleans
* Pseudo code
* If statement
* loops
* while
* for
* Arithmatic Operators

## How do you come to school?
```js
// while oncoming bus is not 23
  // wait
  // check while then if false, go next
// print "take bus"
// while bus is not at Skytrain St
  // keep on a bus
  // check while then, if false, go next
// print "get off bus"
// go skytrain Station
// while Skytrain is not for Waterfront
  // wait
  // check while then if false, go next
// take skytrain
// leftStationCount = 8
// for leftStationCount !== 0
  // keep on a skytrain
  // leftStationCount --
// get off skytrain
// go to school
// if school is open
  // go to school
// else
  // its weekend. go home
```

## Assignment
1. write a for loop that prints all the numbers from 1 - 100
```js
// pseudo
// for num = 1, increase num up to 100
// print num  
  for (let num = 1; num <= 100; num ++) {
    console.log(num)
  }
```
2. write a for loop that prints the multiples of 3 up to 100
```js
  // pseudo
  // for num = 1, increase num up to 100 by 1
  // if num divisible by 3, print num 
  for (let num = 1; num <= 100; num ++) {
    if (num % 3 === 0) console.log(num);
  }
  // while
  // while num is less than 100,
  //  if num is divisible by 3, print num
  //  increase num by 1
  let num = 1;
  while (num < 100) {
    if (num % 3 === 0) console.log(num);
    num ++;
  }

```

3. write a for loop to 100 that prints out:
```
fizz if its a multiple of 3
buzz if its a multiple of 5
fizzbuzz if its a multiple of 3 and 5
```
```js
// num starts from 0
// increase by 1 up to 1000
// make a variable string with empty string
// if num is divisible by 3 AND 5, string is "fizBuzz"
// else if num is divisible by 3, string is "fizz"
// else if num is divisible by 5, string is "buzz"
  // print string
  for (let num = 0; num < 100; num ++) {
    let string = "";
    if (num % 3 && num % 5) {
      string += "fizBuzz"
    } else if (num % 5) {
      string += "buzz";
    } else if (num % 3) {
      string += "fizz";
    }
    console.log(string)
  }
```

4. make a while loop that runs while temperature is below 21 degrees and increases the heat in the room
```js
// while temperature is less then 21
// increase temperature
while (temperature < 21) {
  temperature ++;
}
```

5. make a variable for book price make a variable for budget book price is 25$, budget is 85$. Use a while loop that can determine how many books you can buy
```js
// book price is 25
// budget is 85
// total count starts from 0
// while book price * count is less than budget - book price
  // count ++
// print count

const bookPrice = 25
const budget = 85
let count = 0;
while (bookPrice * count < budget - bookPrice) {
  count ++;
}
console.log(count);
```