/*
  DOM [Traversing]
  - nextSibling
  - previousSibling
  - nextElementSibling
  - previousElementSibling
  - parentElement
*/

let span = document.querySelector(".two");

console.log(span.nextSibling);//next thing = <!--comment-->
console.log(span.nextElementSibling);//next element as div span a p
// console.log(span.nextElementSibling.remove());
console.log(span.parentElement);//الاب الرئيسي div
// previousElementSibling = next element
// previousSibling = next thing
span.onclick = function () {
  span.parentElement.remove();
}