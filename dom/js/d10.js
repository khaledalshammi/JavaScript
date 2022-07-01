/*
  DOM [Class List]
  - classList
  --- length
  --- contains
  --- item(index)
  --- add
  --- remove
  --- toggle
*/

let element = document.getElementById("my-div");

console.log(element.classList);//classes
console.log(typeof element.classList);
console.log(element.classList.contains("osama"));
console.log(element.classList.contains("show"));
console.log(element.classList.item("3"));//=test

element.onclick = function () {
  // element.classList.add("add-one","add-two");
  // element.classList.remove("add-one","add-two");
  element.classList.toggle("show"); 
  //if this class exist it will remove it, but if it's not exist it will add it
};