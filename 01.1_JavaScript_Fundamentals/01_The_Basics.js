// JavaScript is a Client-Side language; which means it runs in the Browser.
// JavaScript is a Scripting languages; which means it is rendered when the code is loaded.
// JavaScript is Case-Sensitive.
// It can change a webpage in real-time; hiding or showing elements.
// It can accept input and perform functions; like math or displaying time / date, etc.

// Internal & External JavaScript.
<head>
  <title>HTML Head Examplen</title>
  <script src="js/myJavaScript.js" type="text/javascript">
    my_internal_scripts
  </script>
</head>;
<body>
  <script>my_internal_scripts</script>
</body>;
/* Inside of the body it is IMPORTANT that the HTML should ALWAYS be loaded before the <script> elements.  */
// It is best practice to use External JavaScript unless I am running page specific code.
// It will also save time as this will ONLY require updating a single file.

// JavaScript Comments:
// This is a Single-Line Comment.
/* This is a
 Multi-Line
 Comment. */

// document.write() - This is my first function.
// This will allow me to display text.
document.write("Hello World!");
// Other Example:
document.write("My Name is 'Michael'");
/* Similar quotation cannot be used inside of one and other, as they will exit and re open a String. */
document.write('My Name is "Michael"');
<pre>
  <script>document.write("My Name is \"Michael\"");</script>
</pre>;
// The only way to do this is by exiting the character with a backslash i.e. "\".
