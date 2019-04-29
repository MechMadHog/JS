// alert() & confirm()
// alert()
alert("You are about to leave SiteName.com, are you sure?");
// This will create an instant pop-up; that MUST be closed in order to continue.

// confirm()
// A confirm() function is used when I want to ask a User a question.
// With a confirm() function "OK" ALWAYS means Yes/True and "Cancel" ALWAYS means No/False.

confirm("Do you want to exit?");
// In order for the buttons to do something; I must use a conditional statement.
var c = confirm("OK or Cancel?");
if (c) {
  alert('You pressed "OK"');
} else {
  alert('You clicked "Cancel"');
}

// prompt()
prompt("Question?", "Sample Answer.");
// The prompt() function above has two parameters.
// Parameter 1 = The Question, text.
// Parameter 2 = The Sample Answer, default value.
// Parameter 2 is the default text displayed in the input box.

//Working Example:
var p = prompt("Question?", ""); // Blank default value.
if (p) {
  alert(p + " is your Answer.");
  // This is the TRUE statement.
} else {
  alert("You did not answer my question?");
  // This is the FALSE statement.
}
