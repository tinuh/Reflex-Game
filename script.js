let showinstructions = () => $('#instructions').modal('show');
var forward = true;
var leftbar = window.document.getElementById('leftbar');
var pebble = window.document.getElementById('pebble');
var rightbar = window.document.getElementById('rightbar');
var interval;
var moving = false;

function init(){
     $('#instructions').modal('hide');
     interval = setInterval(() => move(), 50);
     moving = true;
}

function stop(){
     clearInterval(interval);
     if (moving) {
          /* if (forward) {
               leftbar.style.width = String(parseInt(leftbar.style.width.slice(0, -1)) - 24) + "%";
               rightbar.style.width = String(parseInt(rightbar.style.width.slice(0, -1)) + 24) + "%";
          }
          else{
               leftbar.style.width = String(parseInt(leftbar.style.width.slice(0, -1)) + 24) + "%";
               rightbar.style.width = String(parseInt(rightbar.style.width.slice(0, -1)) - 24) + "%";
          } */
          moving = false;
          window.document.getElementById('stop-btn').innerHTML = "Try again";
          var stat = window.document.getElementById('stat')
          var element = document.createElement("h1");
          element.style.textAlign = "center";
          element.style.marginTop = "20px";
          if (parseInt(leftbar.style.width.slice(0, -1)) === 50){
               element.innerHTML = "Congrats! You got perfectly in the Middle";
               element.style.color = "#23c734";
          }
          else{
               element.innerHTML = "Aww! You were off by " + String(Math.abs(50 - parseInt(leftbar.style.width.slice(0, -1))));
               element.style.color = "#d21111";
          }
          stat.appendChild(element);
     }
     else{
          init();
          window.document.getElementById('stop-btn').innerHTML = "Stop";
     }
}

function move(){
     if (forward){
          leftbar.style.width = String(parseInt(leftbar.style.width.slice(0, -1)) + 1) + "%";
          rightbar.style.width = String(parseInt(rightbar.style.width.slice(0, -1)) - 1) + "%";
          if (parseInt(rightbar.style.width.slice(0, -1)) === 0){
               forward = false;
          }
     }
     else{
          leftbar.style.width = String(parseInt(leftbar.style.width.slice(0, -1)) - 1) + "%";
          rightbar.style.width = String(parseInt(rightbar.style.width.slice(0, -1)) + 1) + "%";
          if (parseInt(leftbar.style.width.slice(0, -1)) === 0){
               forward = true;
          }
     }
}