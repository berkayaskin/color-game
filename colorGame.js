var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");
// var easyBtn = document.getElementById("easy");
// var mediumBtn = document.getElementById("medium");
// var hardBtn = document.getElementById("hard");

init();

function init() {
	setUpModeButtons();
	setUpSquares();
	reset();
}

function setUpModeButtons() {
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function() {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			modeButtons[2].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3 :
			this.textContent === "Medium" ? numSquares = 6 : numSquares = 9;
			// if(this.textContent === "Easy") {
			// 	numSquares = 3;
			// } else if (this.textContent === "Medium") {
			// 	numSquares = 6;
			// } else {
			// 	numSquares = 9;
			// }
			reset();
		});
	}
}

function setUpSquares() {
	for (var i = 0; i < squares.length; i++) {
		//add click listeners to squares
	 	squares[i].addEventListener("click", function(){
	 		//grab color of clicked square
			var clickedColor = this.style.backgroundColor;
			//compare color to pickedColor
			if(clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct!";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
				resetButton.textContent = "Play Again";
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
	 	});
	}
}

function reset() {
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;

	resetButton.textContent = "New Colors"
	message.textContent = "";
	//change colors of squares
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		 } else {
			squares[i].style.display = "none";
		 }
	 }
	h1.style.backgroundColor = "steelblue";
}

// easyBtn.addEventListener("click", function() {
// 	hardBtn.classList.remove("selected");
// 	mediumBtn.classList.remove("selected");
// 	easyBtn.classList.add("selected");
// 	numSquares = 3;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i = 0; i < squares.length; i++) {
// 		squares[i].style.backgroundColor = colors[i];
// 		squares[i].style.display = "block";
// 		if(colors[i]) {
// 			squares[i].style.backgroundColor = colors[i];
// 		} else {
// 			squares[i].style.display = "none";
// 		}
// 	}
// 	h1.style.backgroundColor = "steelblue";
// });
//
// mediumBtn.addEventListener("click", function() {
// 	hardBtn.classList.remove("selected");
// 	mediumBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	numSquares = 6;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i = 0; i < squares.length; i++) {
// 		// squares[i].style.backgroundColor = colors[i];
// 		// squares[i].style.display = "block";
// 		if(colors[i]) {
// 			squares[i].style.backgroundColor = colors[i];
// 		} else {
// 			squares[i].style.display = "none";
// 		}
// 	}
// 	h1.style.backgroundColor = "steelblue";
// });
//
// hardBtn.addEventListener("click", function() {
// 	hardBtn.classList.add("selected");
// 	mediumBtn.classList.remove("selected");
// 	easyBtn.classList.remove("selected");
// 	numSquares = 9;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i = 0; i < squares.length; i++) {
// 			squares[i].style.backgroundColor = colors[i];
// 			squares[i].style.display = "block";
// 	}
// 	h1.style.backgroundColor = "steelblue";
// });

resetButton.addEventListener("click", function() {
	reset();
});

function changeColors(color) {
	//loop through all sqaures
	for (var i = 0; i < squares.length; i++) {
		//change each color to match given color
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	//make an array
	var arr = []
	//repeat num times
	for (var i = 0; i < num; i++) {
		//get random color and push into arr
		arr.push(randomColor());
	}
	//return that arr
	return arr;
}

function randomColor() {
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "red" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a "red" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
