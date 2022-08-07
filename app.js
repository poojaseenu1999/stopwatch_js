window.onload = function(){

var tens = 00;
var seconds = 00;
const appendtens = document.getElementById('tens');
const appendseconds = document.getElementById('seconds');
const appendstart = document.getElementById('start');
const appendstop = document.getElementById('stop');
const appendreset = document.getElementById('reset');
var interval;

appendstart.onclick = function(){
    clearInterval(interval);
    interval = setInterval(starttime, 10);
}

appendstop.onclick = function(){
    clearInterval(interval);
}

appendreset.onclick = function(){
    clearInterval(interval);
    tens = '00';
    seconds = '00';
    appendtens.innerHTML = tens;
    appendseconds.innerHTML = seconds;
}

function starttime(){
    tens++;
    if(tens <= 9){
     
        appendtens.innerHTML = '0' + tens;
    }
    if (tens > 9){
        appendtens.innerHTML = tens;
    }

    if(tens > 99){
        seconds++;
        appendseconds.innerHTML = '0' + seconds;
        tens =0;
        appendtens.innerHTML = '0' + 0;

    }



}

}

