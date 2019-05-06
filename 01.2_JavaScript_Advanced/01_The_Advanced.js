//Parts of a Value - split & substr:
/* split() */
//The split() function has 2 optional parameters: "separator" and "limit".
//"separator" - in this case = exampleString.split(" ");
// meaning each word(" ") rather than character("") or entire string().
//"limit" - is the maximum number of split()'s

//split() is a function that can SPLIT a string up into an ARRAY.
var exampleString = "The quick brown fox jumps over the lazy dog";
var splitExample = exampleString.split(" ");
document.write("Here is the array: <br />");
for (index in splitExample) {
  document.write(splitExample[index] + ", ");
}
/* Output: Here is the array:
The, quick, brown, fox, jumps, over, the, lazy, dog,
*/

/* substr() */
// How to Extract part of a string based on character POSITION.
//Example 1:
var sampleString = "I love Web Development!";
document.write(sampleString.substr(0, 7) + "javascript!");
//Output: I love javascript!
// "0" is the starting point and "7" is as far as it goes: ("I"," ","l","o","v","e"," ").
//Example 2:
var sampleString = "I love JavaScript!";
document.write("Nothing is better than " + sampleString.substr(7));
//Output: Nothing is better that JavaScript!
// The substr will begin at "7".
