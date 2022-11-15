# Algorithm 2
* Problem Solving
```
1. Identify the issues
=> Be clear about what is working and what isn't

2. Keep focused on your goals

3. Experiment with you

4. If you are stuck, walk away

5. Consult a web browser

6. Rememver there are no wrong decisions
```

* Example
```
Farmer transfer Fox, Goose, and Corn with a boat.
Fox and Goose are hungry. If there is no Farmer, Fox will eat Goose, OR Goose will eat Corn.
The boat can have two seats, one for farmer and the other for others.
How Farmer can move all to the far side?

1. Farmer and Goose
=> Fox will not eat Corn

2. Farmer and Fox
=> Corn on near shore, Goose on far shore

3. Farmer back with Goose
=> Corn on near shore, Fox on far shore, Goose on boat

4. Farmer and Corn
=> Goose on near shore, Fox on far shore, Corn on boat

5. Farmer back alone
=> Goose on near shore, Fox and Corn on far shore

6. Farmer and Goose
=> Fox and Corn on far shore, Goose on boat

End
=> Fox, Goose, Corn, and Farmer on far shore
```

## If/else
```js
// Odd => 1, 3, 5, 7, 9 ....
// Even => 0, 2, 4, 6, 8, 10, ....
const isOdd = (num) => {
  return num % 2 === 1;
}

const calc = (A, B) => {
  if (isOdd(A) && isOdd(B)) {
    console.log(A * B)
  } else if (!isOdd(A) && !isOdd(B)) {
    console.log(A / B)
  } else if (isOdd(A) && !isOdd(B)) {
    console.log(A + B)
  } else if (!isOdd(A) && isOdd(B)) {
    console.log(A - B)
  } else {
    console.log("ERROR")
  }
}

calc(5, 7) // 35
calc(12, 2) // 6
calc(5, 6) // 11
calc(12, 3) // 9
```

```js
let drinkCoffee = true;
let drinkTea = true;

if (drinkCoffee) {
  console.log("Drink Coffee")
} else if (drinkTea) {
  console.log("Drink Tea")
} else {
  console.log("Drink Water")
}
```

```js
// 1
let beverage = "coffee";
if (beverage === "coffee" || beverage === "tea") {
  console.log(beverage)
} else {
  console.log("water")
}
// Result: "coffee"

// 2
let x = 8;
let y = 9;
if (x === (4 + 5) || (x + y) === 17) {
  console.log("true")
} else {
  console.log("ERROR")
}
// Result: "true"



// 3
let x = 12;
let string = "";
if (x % 3 === 0) {
  string += "fizz"
}
if (x % 5 === 0) {
  string += "buzz"
}
console.log(string)
// Result: "fizz"



// 4
let x = 15;
let string = "";
if (x % 3 === 0 && x % 5 === 0) {
  string += "fizzbuzz"
}
if (x % 3 === 0) {
  string += "fizz"
}
if (x % 5 === 0) {
  string += "buzz"
}
console.log(string)
// Result: "fizzbuzzfizzbuzz"


// 5
let x = 500;
let string = "";
if (x !== (2 * 500)) {
  console.log("TRUE")
} else {
  console.log("FALSE")
}
// Result: "FALSE"
```

