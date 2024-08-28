function melek() {
    var x = document.getElementById("ab");
    var y = document.getElementById("bgr");
    if (x.style.display === "block") {
      x.style.display = "none";
      y.style.background = "rgb(255, 255, 255, 0)";
    } else {
      x.style.display = "block";
      y.style.background = "rgb(255, 255, 255, .2)";
    }
  }