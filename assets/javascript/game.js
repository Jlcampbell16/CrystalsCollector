$(document).ready(function () {
    // GLOBAL VARIABLES
    var targetNumber;
    var wins = 0;
    var losses = 0;
    var counter = 0;
    // var crystal1 = Math.floor(Math.random() * 12) + 1;
    // var crystal2 = Math.floor(Math.random() * 12) + 1;
    // var crystal3 = Math.floor(Math.random() * 12) + 1;
    // var crystal4 = Math.floor(Math.random() * 12) + 1;

    // array for 4 crystals and their random values ( 1 - 12)
    // 

    //-----FUNCTIONS-----
    function initializeScreen() {
        //generate a random number for the target number and display on screen
        targetNumber = Math.floor(Math.random() * 120) + 19;
        $("#number-to-guess").text(targetNumber);

        userScore = 0; // or ""?
        wins = 0;
        losses = 0;
    }

    function resetGame() {
        targetNumber = Math.floor(Math.random() * 120) + 19;
        $("#number-to-guess").text(targetNumber);
        console.log("target #: " + targetNumber)
        // userScore = 0;
        counter = 0;

        //function to generate random crystal value return math.floor
        $(".crystal").each(function(index){
        $(this).attr("value", generateRandomValue()) //data-value
        })


        crystal1 = Math.floor(Math.random() * 12) + 1;
        crystal2 = Math.floor(Math.random() * 12) + 1;
        crystal3 = Math.floor(Math.random() * 12) + 1;
        crystal4 = Math.floor(Math.random() * 12) + 1;
        $("#crystal1").attr("value", crystal1);
        $("#crystal2").attr("value", crystal2);
        $("#crystal3").attr("value", crystal3);
        $("#crystal4").attr("value", crystal4);
        console.log ( $("#crystal4").attr("value"));
    }

    //-----PROCESS-----

    //when a crystal is clicked
    $(".crystals").on("click",  function () {
    
        var crystalValue = ($(this).attr("value"));
        crystalValue = parseInt(crystalValue);
        counter += crystalValue;
        $("#your-guess").text(counter); 
        console.log("this is the counter " + counter);
        console.log("crystal value " + crystalValue)
        if (counter === targetNumber) {
            alert("You won!");
            wins++;
            $("#winsText").text(wins);
            resetGame();
        } else if (counter >= targetNumber) {
            alert("Try again!");
            losses++;
            $("#lossesText").text(losses);
            resetGame();
        }

    });

    initializeScreen();
    resetGame();
});

