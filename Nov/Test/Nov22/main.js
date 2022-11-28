// decimal to binary
/** Write algorithm to covert decimal to binary
 * 
 * EXAMPLE
 * D : 11
 * B : ""
 * D % 2 = 1
 * B = "1"
 * D = 11 / 2 - 11 % 2 = 5.5 - 0.5 = 5
 *   D % 2 = 1
 *   B = "1" + "1" = "11"
 *   D = 5 / 2 - 5 % 2 = 2.5 - 0.5 = 2
 *     D % 2 = 0
 *     B = "11" + "0" = "110"
 *     D = 2 / 2 - 2 % 2 = 1 - 0 = 1
 *       D % 2 = 1
 *       B = "110" + "1"
 *       D = 1 / 2 - 1 % 2 = 0.5 - 0.5 = 0
 *       is D larger than 0 ? false 
 *         => END
 * 
 * given decimal(input)
 * Variable binary(String)
 * While decimal larger than 0
 *   if remainder of decimal divide by 2 equal to 1
 *     binary = "1" + binary;
 *   else (remainder equal to 0)
 *     binary = "0" + binary;
 *   
 *   decimal = decimal / 2
 * 
 */

function decimalToBinary(decimal) {
  
  let binary = "";
  while (decimal > 0) {
    const remainder = decimal % 2;
    if (remainder > 0) {
      binary = "1" + binary;
    } else {
      binary = "0" + binary;
    }
    decimal = Math.floor(decimal / 2); // = decimal / 2 - decimal % 2
  }
  return binary;
}
console.log(decimalToBinary(75757));