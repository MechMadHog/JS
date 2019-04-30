// Session Storage Counter:

function counter() {
  if (typeof Storage !== "undefined") {
    if (sessionStorage.counter) {
      sessionStorage.counter = Number(sessionStorage.counter) + 1;
    }
  } else {
    sessionStorage.counter = 1;
  }
  document.getElementById("number").innerHTML = sessionStorage.counter;
  if (sessionStorage.counter > 1) {
    document.getElementById("number").innerHTML += "<p>Refresh the page</p>";
  } else {
    document.getElementById("number").innerHTML +=
      "Sorry, your browser does not " + "support web storage...";
  }
}

// HTML5 for this Script
/*
<html>
  <head>
    <!-- Script Goes in here. -->
  </head>
  <body>
    <button onclick="counter()" type="button">Keep Counting!</button>
    <div id="number"></div>
  </body>
</html>
*/
