/** Problem Solving and Analytical Thinking Mid Term Exam 
 * 
 * Multiple-choice Questions
 * 1. d
 * 2. b
 * 3. d
 * 4. a // `else` can be used only once, but `else if` can be used multiple times
 * 5. d // 
 *    start i = 1.
 *    I<10: true. i = 1. 1%2 > 0: true. print i. i ++. i = 2
 *    I<10: true. i = 2. 2%2 > 0: false. i += 3. i = 5
 *    I<10: true. i = 5. 5%2 > 0: true. print i. i ++. i = 6
 *    I<10: true. i = 6. 6%2 > 0: false. i += 3. i = 9
 *    I<10: true. i = 9. 9%2 > 0: true. print i. i ++. i = 10
 *    I<10: false. End while
 *    Result => 1, 5, 9 will be printed. And i = 10 when loop finished
 * 
*/

/********************** Q6 **********************/

/** Question 6
 * Write a pseudocode for printing non-prime numbers between 1 and 100
 * 
 * for loop VARIABLE i = 1, from i = 1 to 100, after every loop, increment i +1 // i = number
 *   // if number is 1, do nothing because 1 is not a prime number
 *   if (i === 1) continue; // continue is jump this loop
 * 
 *   let count = 0;
 *   let j = 1;
 * // concept: j cannot exceed i / 2 because we don't need to check after half of number is divisible by the number. after end of this loop, add count +1(number i)
 *   while (count < 2 && j < i)
 *     // if remainder of i divide by j is equal to 0, increment count + 1
 *     if (i % j === 0) count = count + 1;
 *     j ++;    
 *   
 *   // End while loop  
 *   // increase count + 1 with the case of j = i
 *   count = count + 1;
 * 
 *   // check count is equal to 2. And if it is true, print i
 *   if (count === 2) 
 *     print i
 * // END FOR LOOP
 */

// Q6 in code
// for (let i = 1; i <= 100; i++) {
//   if (i === 1) continue;
//   let count = 0;
//   let j = 1;
//   while (count < 2 && j < i) {
//     if (i % j === 0) count++;
//     j++;
//   }
//   count++;
//   if (count === 2) console.log(i);
// }

/********************** Q7 **********************/



/** Question 7
 * Write a pseudocode for printing all the numbers between 1 and 100 which are divisible by 3
 * 
 * for loop Variable num = 1. until num is less than or equal to 100. Increment num + 1 after every loop.
 *   check num is divisible by 3
 *   if num is divisible by 3
 *     print num 
 * // END FOR LOOP
 */

// Q7 in code
// for (let num = 1; num <= 100; num ++) {
//   if (num % 3 === 0) {
//     console.log(num); 
//   }
// }


/********************** Q8 **********************/
/** Question 8
 * Write a pseudocode for converting a binary number to its equivalent decimal
 * 
 * VARIABLE binary = given number (type is number or string)
 * VARIABLE decimal = 0
 * 
 * if typeof binary is not string, change to string so that we can iterate it
 * 
 * VARIABLE leng = (binary's length) // example: "111" is 3 so that we can iterate from end
 * VARIABLE position = 0;
 * 
 * while position is less than leng
 *   VARIABLE bToD(binary to decimal) = value of binary's position * 2 pow of (leng - position - 1)
 *   decimal = decimal + bToD;
 *   position = position + 1;
 * // END WHILE LOOP
 * print or return decimal
 */

// Q8 in code
// let binary = 1101110;
// let decimal = 0;

// if (typeof binary !== "string") binary = String(binary);
// const leng = binary.length;
// let position = 0;
// while (position < leng) {
//   let bToD = binary[position] * Math.pow(2, leng - position - 1);
//   decimal = decimal + bToD;
//   position ++
// }
// console.log(decimal)

/********************** Q9 **********************/
/** Question 9
 * Fibonacci sequence is a sequence of numbers starting with 0 and 1 which steadily increases and each number is equal to the sum of the preceding two numbers. For example, the sequence 0, 1, 1, 2, 3, 5, 8, 13, … is a Fibonacci sequence. Write a pseudocode for printing the Fibonacci sequence for numbers less than or equal to 1000.
 * 
 * SOLUTION 1
 * VARIABLE fibNumber = 0;
 * let first = 0;
 * let second = 1;
 * let index = 0;
 * while fibNumber is less than or equal to 1000
 *   if index is equal to 0
 * 
 *     fibNumber = first
 * 
 *   else if index is equal to 1
 * 
 *     fibNumber = second
 * 
 *   else
 * 
 *     fibNumber = first + second;
 * 
 *     if fibNumber is larger than 1000
 *       break;
 * 
 *     first = second
 * 
 *  index = index + 1
 * 
 * SOLUTION 2 : ARRAY
 * VARIABLE fibNumbers = [];
 * for loop VARIABLE i = 0, until (fibNumbers[i - 1] <= 1000) 
 *   OR (fibNumbers[i - 1] is undefined => handling of empty array), increment i + 1
 *   
 *   if i is less than 2 // empty array, fibNumber 0, 1
 *     insert(push) i into fibNumbers
 *   else 
 *     VARIABLE sumOfPrevTwoNums = prevNumber from current index of fibNumbers + prev-prevNumber from current index of fibNumbers
 *     if sumOfPrevTwoNums is larger than 1000
 *       end for loop
 *     
 *     insert(push) sumOfPrevTwoNums into fibNumbers
 * 
 * // END FOR LOOP
 * print fibNumbers
 */

// Q9 in code SOLUTION 1
// let fibNumber = 0;
// let first = 0;
// let second = 1;
// let count = 0;
// while (fibNumber <= 1000) {
//   if (count === 0) {
//     fibNumber = first;
//   } else if (count === 1) {
//     fibNumber = second;
//   } else {
//     fibNumber = first + second;
//     if (fibNumber > 1000) break;
//     first = second;
//     second = fibNumber;
//   }
//   count ++;
//   console.log(fibNumber)
// }

// Q9 in code SOLUTION 2 : ARRAY
// const fibNumbers = [];
// for (let i = 0; fibNumbers[i] <= 1000 || !fibNumbers[i - 1]; i ++) {
//   if (i < 2) {
//     fibNumbers.push(i);
//   } else {
//     const sumOfPrevTwoNums = fibNumbers[i - 1] + fibNumbers[i - 2];
//     if (sumOfPrevTwoNums > 1000) break;
//     fibNumbers.push(sumOfPrevTwoNums)
//   }
// }
// console.log(fibNumbers)