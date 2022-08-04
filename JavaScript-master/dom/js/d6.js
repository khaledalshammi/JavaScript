/*
DOM [Deal With Childrens]
- children
- childNodes
- firstChild
- lastChild
- firstElementChild
- lastElementChild
*/

let myElement = document.querySelector("div");

console.log(myElement);
console.log(myElement.children);//return the elements = p span
console.log(myElement.children[0]);// = p
console.log(myElement.childNodes);//get all things text p span comment space consided text 
console.log(myElement.childNodes[0]);

console.log(myElement.firstChild);//return first thing text p span comment space consided text
console.log(myElement.lastChild);//return last thing text p span comment space consided text

console.log(myElement.firstElementChild);//first element as p div span
console.log(myElement.lastElementChild);//last element as p div span