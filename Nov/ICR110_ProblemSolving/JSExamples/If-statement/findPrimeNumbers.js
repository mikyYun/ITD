// QUESTION : Find Number from 1 to 100

/** Loop from 1 to 100
 * for (i = 1; i <= 100, i ++)
 * 
 *   VARIABLE isPrime = true
 *   
 *   // Remove 1
 *   if (i > 1)
 *     // ANOTHER FOR LOOP
 *     for (num = 2; num < i; num ++)
 *       
 *       // find is i dividable by num
 *       if (i % num === 0)
 *         isPrime = false; 
 *         // stop second for loop
 *         break;
 *       
 *     // check isPrime is still trye after second for loop end
 *     if (isPrime)
 *       console.log(`${i} is Prime number`) // Print message
 */
// FOR LOOP
for (let i = 2; i <= 100; i++) {
  let isPrime = true;
  // with for loop
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(`${i} is Prime Number`);
  }
}

/** WHILE LOOP
 * VARIABLE givenNumber 1
 * while (givenNumber is equal or less than 100)
 *   VARIABLE isPrime = true
 *   if (givenNumber > 1) // because 1 is not Prime Number
 *     VARIABLE denominator = 2 // to check remainder of givenNumber
 *     
 *     while (isPrime AND denominator < givenNumber) // denominator !== givenNumber
 *       if (givenNumber % denominator === 0)
 *         isPrime = false // givenNumber is divisible by denominator with remainder 0. which means the givenNumber is NOT Prime Number
 *         denominator ++
 *     
 *     // check still isPrime is True
 *     if (isPrime)
 *       console.log(`The number ${givenNumber} is Prime Number`)
 */

// WHILE LOOP
let givenNumber = 1;
while (givenNumber <= 100) {
  let isPrime = true;
  if (givenNumber > 1) {

    let denominator = 2;

    while (isPrime && denominator < givenNumber) {
      if (givenNumber % denominator === 0) isPrime = false;
      denominator++;
    }

    if (isPrime) console.log(`${givenNumber} is Prime Number`);
  }
  givenNumber++;
}


