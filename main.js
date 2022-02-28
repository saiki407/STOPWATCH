let display = document.getElementById("display")
let start = document.getElementById("start")
let stop = document.getElementById("stop")
let reset = document.getElementById("reset")

let hours = 0;
let minutes = 0;
let seconds = 0;

let interval;
let status = "stop";

function stopWatch() {
 seconds++;
 if(seconds / 60==1) {
   minutes++
   seconds = 0;
   
   if(minutes / 60 == 1) {
   hours++
   minutes = 0;
 } 
 }
 
display.innerHTML = hours+":"+minutes+":"+seconds;
}

start.addEventListener("click",function(){
status == "stop"
interval = setInterval(stopWatch,1000)
status = "start" ;
})

stop.addEventListener("click",function(){
 clearInterval(interval)
 status == "stop" ;
})

reset.addEventListener("click",function(){
clearInterval(interval)
display.innerHTML = "00:00:00";
hours = 0;
minutes = 0;
seconds = 0;
})
