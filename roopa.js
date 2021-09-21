var anju = require('lodash');

var array = [1,2,3,4,5,6];
console.log('answer',anju.without(array,3));

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("kempu");

function setGradient(){
	body.style.background = "linear-gradient(to right, " + color1.value + " , " + color2.value + ")";
}


color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
