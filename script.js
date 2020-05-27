let showinstructions = () => $('#instructions').modal('show');
var forward = true;
var leftbar = window.document.getElementById('leftbar');
var pebble = window.document.getElementById('pebble');
var rightbar = window.document.getElementById('rightbar');
var interval;

function init(){
     $('#instructions').modal('hide');
     interval = setInterval(() => move(), 50);
}

function stop(){
     clearInterval(interval);
}

function move(){
     if (forward){
          leftbar.style.width = String(parseInt(leftbar.style.width.slice(0, -1)) + 1) + "%";
          rightbar.style.width = String(parseInt(rightbar.style.width.slice(0, -1)) - 1) + "%";
          if (parseInt(leftbar.style.width.slice(0, -1)) === 98){
               forward = false;
          }
     }
     else{
          leftbar.style.width = String(parseInt(leftbar.style.width.slice(0, -1)) - 1) + "%";
          rightbar.style.width = String(parseInt(rightbar.style.width.slice(0, -1)) + 1) + "%";
          if (parseInt(rightbar.style.width.slice(0, -1)) === 98){
               forward = true;
          }
     }
}