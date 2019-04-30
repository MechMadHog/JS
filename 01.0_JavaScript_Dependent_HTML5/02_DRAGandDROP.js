// Drag & Drop:

function allowDrop(e) {
  e.preventDefault();
  // This prevents an object from being put back in it's initial position.
}
function drag(e) {
  e.dataTransfer.setData("Text", e.target.id);
  // This allows the object to be dragged i.e. moved with mouse.
}
function drop(e) {
  e.preventDefault();
  d = e.dataTransfer.getData("Text"); // d = data
  e.target.appendChild(document.getElementById(d));
  //This allows the object to be dropped i.e. placed with mouse.
}
