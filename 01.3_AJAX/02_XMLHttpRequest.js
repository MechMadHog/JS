// XMLHttpRequest Function:
// Head:
function newAjax() {
  var ajax;
  if (wondow.XMLHttpRequest) {
    ajax = new XMLHttpRequest();
  } else {
    ajax = new ActiveXObject("Microsoft.XMLHTTP");
  }
  return ajax;
}

function LoadMe() {
  var ajaxHandler = newAjax();
  ajaxHandler.onreadystatechange = function() {
    if (ajaxHandler.readyState == 4 && ajaxHandler.status == 200) {
      document.getElementById("loadMe").innerHTML = ajaxHandler.responseText;
    }
  };
  ajaxHandler.open("GET", "mypage.html", true);
  ajaxHandler.send();
}

//Body:
/*
<div id='loadMe'>&nbsp;</div>
<button onClick-'LoadMe();'>Ajax My Page</button>
*/
