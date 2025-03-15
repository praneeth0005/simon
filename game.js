var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClicked;
var level = 0;
var index = 0;
var started = false;
$(document).one("keypress", function () {
    if (started === false) {
        $("h1").text("Level " + level);
        started = true;
        nextSequence();
    }
})
function nextSequence() {
    userClicked = ''
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    level++;
    $("h1").text("Level " + level);
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}
$(".btn").click(function () {
    var userChosenColour = $(this).attr('id');
    userClicked = userChosenColour;
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer();
    if(index===gamePattern.length)setTimeout(function () {
        index=0
        nextSequence()
    }, 1000);
})
function playSound(name) {

    var audio = new Audio("./sounds/" + name + ".mp3");
    audio.play();
}
function animatePress(currentColour) {
    $("." + currentColour).addClass("pressed");
    setTimeout(function () {
        $("." + currentColour).removeClass("pressed");
    }, 100);
}
function checkAnswer() {
    if (gamePattern[index] !== userClicked) {
        $("h1").text("You Lost :(");
    }
    else{
        index+=1
    }
}

