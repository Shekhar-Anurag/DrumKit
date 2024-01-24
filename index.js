

const wAudio = new Audio("./sounds/tom-1.mp3");
const aAudio = new Audio("./sounds/tom-2.mp3");
const sAudio = new Audio("./sounds/tom-3.mp3");
const dAudio = new Audio("./sounds/tom-4.mp3");
const jAudio = new Audio("./sounds/kick-bass.mp3");
const kAudio = new Audio("./sounds/crash.mp3");
const lAudio = new Audio("./sounds/snare.mp3");

var len = document.querySelectorAll(".drum").length;

for(var i =0;i<len;i++){

    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        playAudio(this.innerHTML);
        buttonAnimation(this.innerHTML);
        
    });
}

document.addEventListener("keypress",function(event){
    playAudio(event.key);
    buttonAnimation(this.innerHTML);
});

function playAudio(key){
    switch(key){
        case "w": wAudio.currentTime = 0; wAudio.play();
        break;

        case "a": aAudio.currentTime = 0; aAudio.play();
        break;

        case "s": sAudio.currentTime = 0; sAudio.play();
        break;

        case "d": dAudio.currentTime = 0; dAudio.play();
        break;

        case "j": jAudio.currentTime = 0; jAudio.play();
        break;

        case "k": kAudio.currentTime = 0; kAudio.play();
        break;

        case "l": lAudio.currentTime = 0; lAudio.play();
        break;

        default : console.log(this.innerHTML);
    }
}

function buttonAnimation (key){
    document.querySelector("."+key).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+key).classList.remove("pressed");
    },250)
    
}



