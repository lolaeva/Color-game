
var numSquares = 6;
var colors = generateRandColors(numSquares); //var for random colors
var squares = document.querySelectorAll('.square');
//var pickedColor = colors[5]; //this was for a particular color
var pickedColor = pickRandColor(); //pick random color from array
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetButton = document.getElementById('reset');
var modeButtons = document.querySelectorAll('.mode');

for(var i=0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener('click', function(){
        modeButtons[0].classList.remove('selected');
        modeButtons[1].classList.remove('selected');
        this.classList.add('selected');
        //figure out how many squares to show
        //ternary operator instead of if statement
        this.textContent === 'Easy' ? numSquares = 3: numSquares = 6;
        reset();
    });
}

function reset(){
    //pick new colors
    //pick a new pickedColor
    //udpdate page to reflect changes
    colors = generateRandColors(numSquares);
    pickedColor = pickRandColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = 'New Colors'
    messageDisplay.textContent = '';
    //hide 3 squares in easy mode and show all in hard mode
    for(var i=0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.display = 'block';
            squares[i].style.backgroundColor = colors[i];
        } else{
            squares[i].style.display = 'none';
        }
    }
    h1.style.backgroundColor = 'palevioletred';
}

colorDisplay.textContent = pickedColor;

resetButton.addEventListener('click', function(){
    reset();
});

for(var i=0; i<squares.length; i++){
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    //add click listeners to squares
    squares[i].addEventListener('click', function(){
        //grab color of clicked square
        var clickedColor = this.style.backgroundColor;

        //compare color to pickedColor
        //console.log(pickedColor, clickedColor);
        if(clickedColor === pickedColor){
            messageDisplay.textContent = 'Correct!';
            resetButton.textContent = 'Play Again?'
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        } else {
            this.style.backgroundColor = window.getComputedStyle( document.body ,null).getPropertyValue('background-color');
            messageDisplay.textContent = 'Try Again';
        }
    });
}

//change all squares colors when picked a correct square
function changeColors(x) {
    //loop through squares
    for(var i=0; i<squares.length; i++){
        //change each color to match given color
        squares[i].style.backgroundColor = x;
    }
}

function pickRandColor(){
    //pick a random number from array
    var random = Math.floor(Math.random() * colors.length);
    //use that number to acces a color in array and return it
    return colors[random];
}

//function to generate an array of random colors
function generateRandColors(num){
    var arr = []
    //repeat num times
    for(var i = 0; i<num; i++){
        //get random color and push into arr
        arr.push(randomColor());
    }
    return arr;
}

//function to get a random color
function randomColor(){
    //pick a red/green/blue from 0 to 255
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return 'rgb(' + r + ', ' + g + ', ' + b + ')'
}

javascript:var crn=[20127,20332,21557,20444,20091,24867];for(var i=0;i<crn.length;i++){var d=document.getElementById("crn_id"+(i+1));d.value=crn[i];}void(0);