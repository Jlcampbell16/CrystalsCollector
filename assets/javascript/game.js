$(document).ready(function () {
    // GLOBAL VARIABLES
    var targetNumber;
    var wins = 0;
    var losses = 0;
    var counter = 0;
    
    $(".crystals").each(function (index) {
        console.log("in .each",index)
        $(this).attr("value", generateRandomValue()) //data-value
    }); 

    //-----FUNCTIONS-----
    // create a function to generate a random number between 1 and 12
    // loop through the crystal elements on the page using the jQuery .each
    // method... then, within, target each individual crystal and assign it a
    // random value
    function generateRandomValue() {
        return Math.floor(Math.random() * 12) + 1;
    }
    //function to generate random crystal value return math.floor
    
    function resetGame() {
        targetNumber = Math.floor(Math.random() * 102) + 19;
        $("#number-to-guess").text(targetNumber);
  
        counter = 0;
        generateRandomValue ();


        $(".crystals").each(function (index) {
            $(this).attr("value", generateRandomValue()) //data-value
        });
        }

    //-----PROCESS-----

    //when a crystal is clicked
    $(".crystals").on("click", function () {

        var crystalValue = ($(this).attr("value"));
        crystalValue = parseInt(crystalValue);
        counter += crystalValue;
        $("#your-guess").text(counter);
        if (counter === targetNumber) {
            alert("You won!");
            wins++;
            $("#winsText").text(wins);
            $("#your-guess").text(0)
            resetGame();
        } else if (counter >= targetNumber) {
            alert("Try again!");
            losses++;
            $("#lossesText").text(losses);
            $("#your-guess").text(0)
            resetGame();
        }

    });

    resetGame();
});

