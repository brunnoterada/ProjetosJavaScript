var slider = document.getElementById("myRange");
var slider2 = document.getElementById("myRange2");
var output = document.getElementById("demo");

slider.oninput = function () {
  var a = parseInt(this.value);
  var c = parseInt(slider2.value) + a;
  output.innerHTML = `${c}`;
};

slider2.oninput = function () {
  var a = parseInt(this.value);
  var c = parseInt(slider.value) + a;
  output.innerHTML = `${c}`;
};
