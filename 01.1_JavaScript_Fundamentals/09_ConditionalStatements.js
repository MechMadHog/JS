// Conditional Statements:
// if: ALWAYS Lower-Case.
var colour = "black";
if (colour == "black") {
  document.write("I'm Batman!");
}
// Code will ONLY run "if" code is TRUE
var colour = "black";
var phobia = "bats";
if (colour == "dark grey" || phobia == "bats") {
  document.write("I'm Batman!");
}
// Code RUNS as code is still HALF TRUE.

// Else:
var FavHero = "Kyle Rayner";
if (FavHero == "Green Lantern") {
  alert("My favourite superhero is Green Lantern.");
} else {
  alert("My favourite superhero is the Green Lantern, Kyle Rayner!");
}
// If "if" statement is not TRUE, then "else" statement will RUN.

// Else... If:
var FavHero = "Kyle Rayner";
if (FavHero == "Green Lantern") {
  alert("My favourite superhero is Green Lantern.");
} else if (FavHero == "White Lantern") {
  alert("My favourite superhero is White Lantern, Kyle Rayner!");
} else {
  alert(
    "My favourite superhero is Green Lantern turned White Lantern, Kyle Rayner!"
  );
}
// If either "if" statement is not TRUE, then "else" statement will RUN.
// If either "if" statement is TRUE then they will RUN.

//or:
var Name = "Michael";
if (Name == "mechmadhog") {
  var FutureAlert = "Welcome, Mech!";
} else if (Name == "Michael") {
  var FutureAlert = "Welcome, Michael!";
} else {
  var FutureAlert = "Welcome, Guest User!";
}
alert(FutureAlert);
