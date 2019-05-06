// Functions: Return values are variables that have been modified in someway.

function addThis(num1, num2) {
  var total = num1 + num2;
  return total;
  // this will RETURN the completed sum.
}

alert("addThis(5,5)");
// This will alert: 10, the total of 5 + 5.

document.write("addThis(5,5)");
// This will write: 10, the total of 5 + 5.

var T = addThis(8, 8);
document.write(T);
// This will write: 16, the total of 8 + 8.

// return can either be an: integer, float, string or boolean.
// Boolean: true / false, yes / no, and  1 / 0.

//After return is executed, the function code will be completed.

function exampleReturn(value) {
  alert(value);
  return true;
  alert("This will not RUN after return has been executed.");
}

// return can also RUN arithmetic but not concatenation:
function NameOrAge(type, value) {
  type = type.toLowerCase();
  if (type == "age") {
    return value + value;
  } else if (type == "name") {
    var newString = "Your name is " + value;
    return newString;
  } else {
    return 'Your description(type) doesn\'t match "age" or "name"';
  }
}
//Example:
alert(NameOrAge("age", "29")); //Output: 58.
alert(NameOrAge("name", "Michael"));
alert(NameOrAge("Sample Description", "Sample Value"));
