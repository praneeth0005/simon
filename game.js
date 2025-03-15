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
    checkAnswer(); 
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
function checkAnswer(){
    var iscomplete = false;
//    if(gamePattern.length===1){
//     if(gamePattern[0]===userClickedPattern[0]){
//         console.log("success");
//         setTimeout(function(){
//             nextSequence()
//     }, 1000);
//     }
//     else{
//         console.log("failure");
        
//     }
//    }
//    else{
   for(var i=0;i<gamePattern.length;i++){
     if(gamePattern[i]===userClickedPattern[index]){
        console.log("true");
        console.log(userClickedPattern);
        console.log(gamePattern);
        iscomplete= true;
        index++;
        
     }
     else{
        console.log("fail");
        console.log(userClickedPattern);
        console.log(gamePattern);
        iscomplete = false;
        break;
     }
   }
   if(iscomplete===true){
    index = userClickedPattern.length;
    console.log(index);
    setTimeout(function(){
        nextSequence()
}, 1000);
   }
}
// }
    