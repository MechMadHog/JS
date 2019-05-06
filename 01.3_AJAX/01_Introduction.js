/* AJAX - Asynchronous JavaScript and XML */
// A group of client-side techniques that can be used to create asynchronous(in the background.) applications.

//data can be retrieved using the XMLHttpRequest object and or JSON.
// i.e. Javascript can LOAD other pages INSIDE of the current page.

/* How to execute AJAX */
// Executing AJAX can be written as a Function which can be RUN as many times as necessary.

var ajax;
if (window.XMLHttpRequest) {
  // This is for Internet Explorer 7(Upwards), chrome, Safari and Firefox.
  ajax = new XMLHttpRequest();
} else {
  // This is for Internet Explorer 5 & 6.
  ajax = new ActiveXObject("Microsoft.XMLHTTP");
}
/* Microsoft likes to do things their own way; This can make coding difficult, sometimes. */
ajax.onreadystatechange = function() {
  if (ajax.readyState == 4 && ajax.status == 200) {
    // Execute when requested page has fully loaded.
    // Use ajax.responseText as the object that holds the page information.
    document.getElementById("myDiv").innerHTML = ajax.responseText;
  }
};
ajax.open("GET", "mypage.html", true);
ajax.send();

// information is NOT preloaded and will ONLY be loaded as is necessary.
