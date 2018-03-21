var square = document.getElementsByClassName("square");
var new_color = document.getElementById("new_color");

rnd_colors();

function rnd(){
    return Math.floor(Math.random() * 255 + 1);
}

function rnd_colors(){
    for(var i = 0; i < square.length; i++){
        square[i].style.backgroundColor = "rgb(" + rnd() + ", " + rnd() + ", " + rnd() + ")";
    }
}

new_color.addEventListener("click", rnd_colors);
