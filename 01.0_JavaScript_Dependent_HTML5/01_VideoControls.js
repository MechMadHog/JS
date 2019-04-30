// Custom Video Controls:
var videoTitle = document.getElementById("videoTitle");

function playORpause() {
  if (videoTitle.paused) {
    videoTitle.play();
  } else {
    videoTitle.pause();
  }
}

function normalSCREEN() {
  videoTitle.width = 500;
}

function bigSCREEN() {
  videoTitle.width = 800;
}
