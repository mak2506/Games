var character=document.getElementById("character");
var block=document.getElementById("block");


function jump(){
    if(character.classList != "animate")
    {
    character.classList.add("animate");
       
    
    }
    setTimeout(function(){
        character.classList.remove("animate");
    }, 500);
}
var checkDead = setInterval(function(){
    var characterTop=parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft=parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    
    if(blockLeft < 20 && blockLeft > 0 && characterTop>=130){
        block.style.animation = "none";
        block.style.display = "none";
        alert("You lost");
    }
    
},10);


var i=50;
var ask = setInterval(function(){
    var ans = prompt("What is the color of sky?");
    
    if (ans !== "blue") {
      document.getElementsByClassName("animate").style.animation= `jump ${500+i}ms`;
      i=i+50;
      
    }
}, 5000);
