$(document).ready(function () {


    // GLOBAL VARIABLES
    var userGuess = 0;
    var targetNumber;
    var wins = 0;
    var losses = 0;
    var counter = 0;
    var crystal1 = Math.floor(Math.random() * 12) + 1;
    var crystal2 = Math.floor(Math.random() * 12) + 1;
    var crystal3 = Math.floor(Math.random() * 12) + 1;
    var crystal4 = Math.floor(Math.random() * 12) + 1;

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
        // userScore = 0;
        counter = 0;
        crystal1 = Math.floor(Math.random() * 12) + 1;
        crystal2 = Math.floor(Math.random() * 12) + 1;
        crystal3 = Math.floor(Math.random() * 12) + 1;
        crystal4 = Math.floor(Math.random() * 12) + 1;
        $("#crystal1").attr("value", crystal1);
        $("#crystal2").attr("value", crystal2);
        $("#crystal3").attr("value", crystal3);
        $("#crystal4").attr("value", crystal4);
    }



    //-----PROCESS-----


    initializeScreen();

    //when a crystal is clicked
    $(".crystals").on("click", function () {
        counter = counter + parseInt($(this).attr("value"));
        $("#your-guess").text(counter) // these values need to add together
        if (counter === targetNumber) {
            wins++
            $("#winsText").text(wins)
            resetGame();
        } else if (counter > targetNumber) {
            losses++
            alert("Try again!");
            $("#winsText").text(wins)
            resetGame();
        }

    });





    resetGame();
});

