// GLOBAL VARIABLES
var userScore = 0;
var targetScore = 0;
var wins = 0;
var losses = 0;


//FUNTIONS
var targetNumber = 50;
$("number-to-guess").text(targetNumber);

//create on-click event for the crystals button

var counter = 0;
var numberOptions = [10, 5, 3, 7];
for (var i = 0; i < numberOptions.length; i++) {
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", "https://b.kisscc0.com/20180717/we/kisscc0-rubygems-gemstone-emerald-sapphire-round-ruby-5b4eb92c969420.9777605815318858686168.jpg");
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);
    $("#crystals").append(imageCrystal);

}
var increment = numberOptions[Math.round(Math.random())];

$(".crystal-image").on("click", function () {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += increment;
        alert("New score: " + counter);
    if (counter === targetNumber) {
        alert ("you win!");
    } else if (counter > targetNumber) {
        alert ("you lose!");
    }

});



    // create random numbers - for each crystal with a max & min value. (USE RETURN as the VALUE)

    // create the crystals - hard code four crytasl and attach a random value to each one
    // random value for the target score (.text, .html, or append it) - reset each game
    // clear out the varuables - wins, losses, and your score

    //need a way to add to the score. is your score less than or grater than target score - one function 
        //click event with one class to cover all four crystals
        //determine the value for each crystal (use .this to determine the value for what was clicked on)

    //take crystal just clicked on and add it to current score (var score = crystal value) 

    //function to reset entire game
    //loss condition - loss count++
    //win condition - 

    // create an initial function 
        //wins = 0, losses = 0, target score = random, user score = 0

    // create a reset function 
        //target score = random, user score = 0

//PROCESS

//DISPLAY
    //use jQuery to create elements in HTML

