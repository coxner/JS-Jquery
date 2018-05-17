var colors = ["white", "blue", "green"];

var arrayOne = document.getElementById("arrayOne");
arrayOne.innerHTML = colors[1];

colors[1] = "red";

var arrayTwo = document.getElementById("arrayTwo");
arrayTwo.innerHTML = colors[1];
