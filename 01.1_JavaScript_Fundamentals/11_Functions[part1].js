// Functions:
/* Functions can be written ONCE but used MULTIPLE times: and
will ONLY be executed when it is TOLD to run. */
// Functions are called by an "event trigger".
// Function Syntax:
function tunaScrew(/* Parameters go here */) {
  alert("Kel put the screw in the tuna!");
}
tunaScrew(); // This is what is used to execute the function.

// Parameters:
function Robin(robin1, robin2) {
  alert(robin1 + " was the first Robin.\n" + robin2 + " was the second Robin.");
} // \n will add a new line.
Robin("Dick Grayson", "Jason Todd");
/* This will alert:
Dick Grayson was the first Robin
Jason Todd was the second Robin.
*/

// Undefined:
function Robin(robin1, robin2) {
  if (robin1 == undefined || robin2 == undefined) {
    var message = "You ONLY named one Robin?";
  } else {
    var message = robin1 + " was a Robin.\n" + robin2 + " was also a Robin.";
  }
  alert(message);
}
Robin("Tim Drake");
/* undefined is not a String and does NOT have a value. */
