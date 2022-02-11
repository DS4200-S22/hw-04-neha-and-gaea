function button1Clicked() { 

var circleSelector = document.getElementsByClassName("text1");

var myClickFunction = function() {
  var previousNumber = +this.innerHTML || 0;
  this.innerHTML = previousNumber + 1;
};

for (var i = 0; i < circleSelector.length; i++) {
  circleSelector[i].addEventListener('click', myClickFunction, false);
}
}