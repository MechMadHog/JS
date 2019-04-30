// GeoLocation:

var userLoc = document.getElementById("coordinates");
function getUsersLocation(params) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    userLoc.innerHTML = "Geolocation is not supported by this browser.";
  }
}
function showPosition(position) {
  userLoc.innerHTML =
    "Latitude: " +
    position.coordinates.latitude +
    "<br />Longitude: " +
    position.coordinates.longitude;
}
