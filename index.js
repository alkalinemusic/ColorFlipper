function colorChange() {
  let newHex = hexGenerator();
  document.getElementById("background-color-header").innerHTML =
    "Background Color: " + newHex;
  document.body.style.backgroundColor = newHex;
  document.getElementById("background-color-header").style.color = newHex;
}

function hexGenerator() {
  var hex = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
}
