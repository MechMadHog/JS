//Variable Comparison:
/* Comparison Operators: */
var v = 10;
/* Equal To */ document.write(v == 10); // Output: True.
/* Not Equal To */ document.write(v != 10); // Output: False.
/* Greater Than */ document.write(v > 10); // Output: False.
/* Greater Than or Equal To */ document.write(v >= 10); // Output: True.
/* Less Than */ document.write(v < 10); // Output: False.
/* Less Than or Equal To */ document.write(v <= 10); // Output: True.

// A comparison Operator returns a Boolean: Either True or False.
// Example of a True Statement:
var Number = 20;
if (Number == 20) {
  alert("The Number Is Without Doubt " + Number + "!");
}

// Logical Operators:
var Breathing = 0;
/* ! (not) */ if (!breathing) {
  /* Output: True. */ alert("Not Breathing!");
}

var Age = 29;
var Name = "Michael";
/* && (and) */ if (Age >= 29 && Name == "Michael") {
  /* Output: True, because BOTH are True. */
  document.write("Michael is 29 or older.");
}

var Age = 30;
var Name = "Michael";
/* || (or) */ if (Age == 29 || Name == "Michael") {
  /* Output: True, because EITHER of the answers are True. */
  document.write("Michael is 29 or older.");
}
