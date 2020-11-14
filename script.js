'use strict'

 function setUpEvents() {
    const change = document.getElementById('face-2');
    const boody = document.body;

    change.onclick = function (){
      
        function changeBg (){
            const red = getRandomColor ();
            const green = getRandomColor ();
            const blue = getRandomColor ();
            const red2 = getRandomColor ();
            const green2 = getRandomColor ();
            const blue2 = getRandomColor ();
            const red3 = getRandomColor ();
            const green3 = getRandomColor ();
            const blue3 = getRandomColor ();
    
            const acolor = `-webkit-linear-gradient(bottom left,rgb(${red}, ${green}, ${blue}) ,rgb(${red2}, ${green2}, ${blue2}),rgb(${red3}, ${green3}, ${blue3}))`;
            boody.style.background = acolor;
            change.innerHTML = "keep clicking";

          
    }

        function getRandomColor (){
            return Math.floor(Math.random() * 255);
        }
        changeBg();
  }}

window.onload = function (){

setUpEvents();

};