// GLOBAL VARIABLES
var userScore;
var targetNumber;
var wins;
var losses;
var counter = 0


// array for 4 crystals and their random values ( 1 - 12)
// 

//-----FUNCTIONS-----
function initializeScreen() {
    //generate a random number for the target number and display on screen
    var targetNumber = Math.floor(Math.random() * 120) + 19;
    $("#number-to-guess").text(targetNumber);

    userScore = 0; // or ""?
    wins = 0;
    losses = 0;
}

function resetGame() {
    var targetNumber = Math.floor(Math.random() * 120) + 19;
    $("#number-to-guess").text(targetNumber);
    userScore = 0
}

var valueOptions = Math.floor(Math.random() * 12) + 1;
for (var i = 0; i < valueOptions.length; i++) {  //is valueOptions.length correct? that would run 12 times

}


//-----PROCESS-----

$(document).ready(function () {

initializeScreen();

//when a crystal is clicked
$(".crystals").on("click", function () {
    console.log("crystal value:" + valueOptions);



    
    $("#your-guess").text(valueOptions)
    if (counter === targetNumber) {
        wins++
        alert("You Win!");
    } else if (counter > targetNumber) {
        losses++
        alert("Try again!");
    }

});


var userGuess = 0;
$("#user-guess").text(userGuess)


resetGame ();
});

