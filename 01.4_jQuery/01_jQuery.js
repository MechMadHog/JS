/* What is jQuery? */
// it is a JS library similar to:
// Moo Tools, Scriptaculous, Dojo, Prototype, etc.

// jQuery was designed to RUN equally in all 5 major browsers.

//Installing jQuery: CDN (Content Delivery Network).
<a href="https://developers.google.com/speed/libraries/">CDN libraries</a>;
/* Option 1 is to download and save in Project directory.
    # Production - This is a minified copy.
    # Development - This is an uncompressed copy.
    */
//Option 2 is to add link to head:

//<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
//<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
//<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>

//Syntax: This goes in head:
$(window).ready(function() {
  alert("Loaded");
});
