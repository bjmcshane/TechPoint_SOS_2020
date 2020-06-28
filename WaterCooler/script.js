//Define vars to hold time values
let seconds=0;
let minutes=0;
let hours=0;

//Define vars to hold "display" value
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours=0;

//Define var to hold setIntervall() function
let interval = null;

//Define var to hold stopWatch status
let status = "stopped";

//Stopwatch function (logic when to increment next value)
function stopWatch(){
  seconds++;

  if(seconds==60){
    seconds = 0;
    minutes++;

    if(minutes==60){
      minutes=0;
      hours++;
    }
  }

  if(seconds < 10){
    displaySeconds = "0" + seconds.toString();
  }
  else{
    displaySeconds=seconds;
  }

  if(minutes<10){
    displayMinutes = "0" + minutes.toString();
  }
  else{
    displayMinutes = minutes;
  }

  if(hours<10){
    displayHours = "0" + hours.toString();
  }
  else{
    displayHours = hours;
  }

  //Display updated time values
  document.getElementById("display").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;

}



function startStop(){
  if(status == "stopped"){
    //start stopwatch by calling setInterval function
    interval = window.setInterval(stopWatch, 1000);
    document.getElementById("startStop").innerHTML = "Stop";
    status = "started";
  }
  else{
    window.clearInterval(interval);
    document.getElementById("startStop").innerHTML = "Start";
    status = "stopped";
  }
}


function reset(){
  window.clearInterval(interval);
  seconds=0;
  minutes=0;
  hours=0;
  document.getElementById("display").innerHTML = "00:00:00";
  document.getElementById("startStop").innerHTML = "Start";
  status = "stopped";
}
