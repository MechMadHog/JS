// Arithmetic - Fundamental Mathematics:
//Addition "+", Subtraction "-", Multiplication "*" and Division "/".
var firstNumber = 10;
var secondNumber = 5;
document.write(firstNumber + secondNumber);
//This will Output: 15, 5, 50 or 2.

//Modulus - This is the Remainder from doing Division:
var Ten = 10;
var Mod = 10 % 3;
alert(Mod); /* This will Alert: 1 */
// Since: 10 / 3 = 3 ; with a Remainder of 1.
// Modulus can be used for example: to change the colour of EOR(Every Other Row).

//Increment & Decrement:
var Age = 29;
Age++; // This is the SAME as var Age = 29 + 1;.
//Or
Age--; // This is the SAME as var Age = 29 - 1;.
alert(age);
// This does NOT add a new Variable; It modifies a pre-existing variable.
/* Each time I RUN either Age++; or Age--;
It will either add or remove "1" from the Age variable. */

//Working Example:
var p = prompt("What is your current age?", "");
if (p) {
  p++;
  alert("That means you will be " + p + " on your next birthday.");
} else {
  alert("Ok, nevermind then...");
} // This will "Calculate" what age you will become next year.
