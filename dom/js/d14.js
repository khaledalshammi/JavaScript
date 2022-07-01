/*
  DOM [Cloning]
  - cloneNode(Deep)
  take copy of elemtns 
  false take just the elemtns without what is inside it like text img
  true take every thing inside it
*/

let myP = document.querySelector("p").cloneNode(true);
let myDiv = document.querySelector("div");

myP.id = `${myP.id}-k`;
myDiv.appendChild(myP);