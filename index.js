var gamePattern = [];
var userClickedPattern = []
const buttonColors = ["red","blue","green","yellow"];
var level = -1;
function nextSequence(){
    userClickedPattern = [];
var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColors[randomNumber];
    gamePattern.push(randomChosenColour);
    let sound = new Audio("sounds/"+randomChosenColour+".mp3");
    let chosen = document.querySelector("."+randomChosenColour)
    function flash(){ 
        
        chosen.style.transition = "opacity 0.5s";
        let a = setInterval(() => {chosen.style.opacity = "0";
        sound.play();
            
        }, 1001);
        
        let b = setInterval(() => {chosen.style.opacity = "1"
            
        }, 2000);
        
        setTimeout(() => {clearInterval(clear())
            
        }, 2000);
        function clear(){
            clearInterval(a);
            clearInterval(b);
            
        }
    }
    flash();
    level++;
    document.getElementById("level-title").innerHTML = "level "+level ;
    console.log(gamePattern)
}

var clicked = document.querySelectorAll(".btn");
for(var i =0;i<clicked.length;i++){
    clicked[i].addEventListener("click",function(){
        var userChosenColour = this.id;
        userClickedPattern.push(userChosenColour);
        playSound(userChosenColour);
        animatePress(userChosenColour);
        checkAnswer();
        console.log(userClickedPattern);

    })}
function playSound(name){
 let sound = new Audio("sounds/"+name+".mp3");
    sound.play();
}
function animatePress(currentColour){
    document.getElementById(currentColour).classList.add("pressed");
    setTimeout(( ()=>{document.getElementById(currentColour).classList.remove("pressed")}),100);
}


document.addEventListener("keypress",nextSequence,{once:true});
function checkAnswer(){
    for (key in userClickedPattern){
        if(userClickedPattern[key]!==gamePattern[key]){
            let sound = new Audio("./sounds/wrong.mp3");
            sound.play();
            document.body.classList.add("gameover");
            setTimeout(()=>{document.body.classList.remove("gameover")},200);
            document.getElementById("level-title").innerHTML = "Game Over"+"<br>" +"Press any key to restart";
            var stop = true;
            gamePattern = [];
            document.addEventListener("keypress",nextSequence,{once:true});
            level = -1;
    }
    }
    if(gamePattern.length === userClickedPattern.length && !stop){
        nextSequence();
    }

   
}
