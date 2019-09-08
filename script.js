$(document).ready(function(){

  //creating the object
    var magic8Ball = {};
    $("#answer").hide();

//array of answers for the magic 8 ball
    magic8Ball.listOfAnswers = ["No", "Yes", "I don't think so...", "Of course!", "Indubitably", "In your dreams."];

//function to ask a question - it will generate a random answer from the above answer array
    magic8Ball.askQuestion = function(question){
        var randomNumber = Math.random();
        var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
        var randomIndex = Math.floor(randomNumberForListOfAnswers);
        var answer = this.listOfAnswers[randomIndex];

        $("#answer").text( answer );
        $("#answer").hide();
        $("#answer").fadeIn(4000);
        $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");

        console.log(question);
        console.log(answer);
    };

//this is what happens when the button is clicked
    var onClick = function() {
        var question = prompt("ASK A YES/NO QUESTION!");

        magic8Ball.askQuestion(question);
          setTimeout(function() {
            $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
        }, 0500);
        $("#8ball").effect("shake");
    };

    $("#questionButton").click( onClick );

});
