window.onload = function() {

var bGroundArray = ['bground6.jpeg', 'bground12.jpeg', 'bground17.jpeg', 'bground20.jpeg'];

var randomBground = Math.floor(Math.random() * bGroundArray.length);

document.body.style.backgroundImage = "url(" + bGroundArray[randomBground] + ")";

}