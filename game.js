var buttonColours = ["red","blue","green","yellow"];
var gamePattern =[];
var userClickedPattern =[];
var level = 0;
var index =  0;
var started = false;
$(document).one("keypress",function (){
    if(started === false){
    $("h1").text("Level "+level);
    started = true;
    nextSequence();
    }
})


function nextSequence(){
    
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];   
    gamePattern.push(randomChosenColour);
    level++;
    $("h1").text("Level "+level);
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}
$(".btn").click(function (){
    var userChosenColour = $(this).attr('id');
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(level); 
}) 
function playSound(name){

    var audio = new Audio("./sounds/"+name+".mp3");
    audio.play();
}
function animatePress(currentColour){
    $("."+currentColour).addClass("pressed");
    setTimeout(function(){
        $("."+currentColour).removeClass("pressed");
}, 100);
}
function checkAnswer(currentLevel){
    var isComplete =false;
    for(var i=0;i<gamePattern.length;i++){
        if(gamePattern[i]==userClickedPattern[index+i]){
            isComplete=true;
            console.log("true");
        }
        else{
                console.log("fail");
                   var wrong = new Audio("./sounds/wrong.mp3");
                wrong.play();
                $("body").addClass("game-over");
                setTimeout(function() {
                    $("body").removeClass("game-over");
                }, 200);
                $("h1").text("Game Over, Press Any Key to Restart");
                startOver()
                isComplete =false;
            break;
        }
    }
    if(isComplete===true){
        index = userClickedPattern.length;
        setTimeout(function() {
            nextSequence();
        }, 1000);
    }

                
}
function startOver(){
    level =0;
    gamePattern =0;
    started = false;
}
