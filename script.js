var presses = 0;
var bought = 0;
var value = 1;


function Reset(){
    presses = 0;
    document.getElementById("pressvalue").innerHTML = presses;
}

document.body.onkeyup = function(e){
    if(e.keyCode == 66){
        presses += value;
    }

    document.getElementById("pressvalue").innerHTML = presses;
}