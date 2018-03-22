var id = function(_val) {
    return document.getElementById(_val);
}

var cl = function(_val){
    return document.getElementsByClassName(_val);
}

var square = document.getElementsByClassName("square");
var new_color = document.getElementById("new_color");
var nav_items = document.querySelectorAll(".flex_container .flex .hard_easy a");
var colorToGuess = document.getElementById("colorToGuess");
var reaction = document.getElementById("reaction");
var opt = document.getElementsByClassName("opt");
var btn = document.querySelectorAll("button");
var dif = true;

square_guess_hard();

id("easy").onclick = function(){
    this.classList.add("background_active");
    id("hard").classList.remove("background_active");
    dif = false;
    for (var i = 0; i < cl("inv").length; i++) {
        cl("inv")[i].style.display = "none";
    }
    square_guess_easy();
}

id("hard").onclick = function(){
    this.classList.add("background_active");
    id("easy").classList.remove("background_active");
    dif = true;
    for (var i = 0; i < cl("inv").length; i++) {
        cl("inv")[i].style.display = "block";
    }
    square_guess_hard();
}

id("new_color").onclick = function(){
    if(dif){
        square_guess_hard();
        this.textContent = "New Colors";
    } else {
        square_guess_easy();
        this.textContent = "New Colors";
    }
}

function rnd(){
    return Math.floor(Math.random() * 256 + 1);
}

function rnd_color(){
    return "rgb(" + rnd() + ", " + rnd() + ", " + rnd() + ")";
}

function square_guess_hard(){
    for(var i = 0; i < square.length; i++){
        square[i].style.backgroundColor = rnd_color();
        //get a random color from one of the 6 quares and gives it to random_color_header for later compare
        var random_color_header = square[Math.floor(Math.random() * square.length)].style.backgroundColor;
        colorToGuess.textContent = random_color_header;
        square[i].addEventListener("click", function(){
            if(this.style.backgroundColor == random_color_header){
                reaction.innerHTML = "<b><u>Correct</u></b>";
                reaction.style.color = this.style.backgroundColor;
                id("nav_header").style.backgroundColor = this.style.backgroundColor;
                id("new_color").textContent = "Play Again?";
                id("hard").disabled = "true";
                id("easy").disabled = "true";
                for (var j = 0; j < square.length; j++) {
                    square[j].classList.add("fadeIn");
                    square[j].style.backgroundColor = this.style.backgroundColor;
                }
            } else {
                this.classList.add("fade");
                reaction.innerHTML = "<b>Try again</b>";
            }
        })
    }
}

function square_guess_easy() {
    for(var i = 0; i < opt.length; i++){
        opt[i].style.backgroundColor = rnd_color();
        //get a random color from one of the 6 quares and gives it to random_color_header for later compare
        var random_color_header = opt[Math.floor(Math.random() * opt.length)].style.backgroundColor;
        colorToGuess.textContent = random_color_header;
        opt[i].addEventListener("click", function(){
            if(this.style.backgroundColor == random_color_header){
                reaction.innerHTML = "<b><u>Correct</u></b>";
                reaction.style.color = this.style.backgroundColor;
                id("nav_header").style.backgroundColor = this.style.backgroundColor;
                id("hard").disabled = "true";
                id("easy").disabled = "true";
                for (var j = 0; j < opt.length; j++) {
                    opt[j].classList.add("fadeIn");
                    opt[j].style.backgroundColor = this.style.backgroundColor;
                }
            } else {
                this.classList.add("fade");
                reaction.innerHTML = "<b>Try again</b>";
            }
        })
    }
}
