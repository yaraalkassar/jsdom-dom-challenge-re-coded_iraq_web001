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

let pause= document.getElementById('pause');
pause.addEventListener('click', stop)
function stop() {
let pauseText = pause.innerHTML;
  if(pauseText==" pause "){
    
    pause.innerHTML=" resume ";
    pause.id="resume";
  }
  else {
    pause.innerHTML=" pause ";
    pause.id="pause";
  }


}

// add comment
document.getElementById("comment-form").addEventListener("click", function(event){
  event.preventDefault()
});

let cmnt = document.getElementById('comment-input');
let cmntContainer = document.getElementById('list');
let cmntBtn = document.getElementById('submit');
 cmntBtn.addEventListener('click', addComment);
 function addComment() {
   let cmtText = cmnt.value;
   let cmntList = document.createElement('ul');
   let cmntItem = document.createElement('li');
   cmntItem.innerHTML= cmtText;
   cmntList.appendChild(cmntItem);
   cmntContainer.appendChild(cmntList);
 }
