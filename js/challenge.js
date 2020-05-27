let counter = document.getElementById('counter');
let c=0;
window.addEventListener("DOMContentLoaded", counterClock);
function counterClock() {
  let c = parseInt(counter.innerText)+1;
 counter.innerText = c;
 let run = setTimeout(counterClock, 1000);

 let dec=document.getElementById('minus');
 dec.addEventListener('click', decrease)
 function decrease() {
 c=c-1;
 counter.innerText = c;
 }

 let inc=document.getElementById('plus');
 inc.addEventListener('click', increase)
 function increase() {
 c=c+1;
 counter.innerText = c;
 }
}
let heart= document.getElementById('heart');
heart.addEventListener('click', like)
function like() {
let num =  parseInt(counter.innerText);
heart.innerText = heart.innerText.charAt(0) + num;
}
