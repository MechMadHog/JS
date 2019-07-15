// Terrible Security Example:

/* How to check a Password:
NOT based on Case but Length */
var p = prompt("Please Enter Your Password.", " ");
if (p.toLowerCase() == "password" && p.length == 8) {
  alert("Access Granted!");
} else {
  alert(p.toUpperCase() + " is NOT the correct Password.");
}
// As long as password is spelled Correctly,
// I would be Granted Access.
