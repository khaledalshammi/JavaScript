/*
DOM [Get / Set Elements Content And Attributes]
- innerHTML
- textContent
- Change Attributes Directly
- Change Attributes With Methods
--- getAttribute
--- setAttribute
*/
let myElement = document.querySelector(".js");
console.log(myElement.innerHTML); //every thing inside it
console.log(myElement.textContent); //just return the text without html tag or code just text
myElement.innerHTML = "Text From <span>Main.js</span> File";
myElement.textContent = "Text From <span>Main.js</span> File";
console.log(myElement.innerHTML); 
console.log(myElement.textContent); 

document.images[0].src = "https://google.com";
document.images[0].alt = "Alternate";
document.images[0].title = "Picture";
document.images[0].id = "pic";
document.images[0].className = "img";

let myLink = document.querySelector(".link");
console.log(myLink.getAttribute("class"));
console.log(myLink.getAttribute("href"));
myLink.setAttribute("href", "https://twitter.com");
myLink.setAttribute("title", "Twitter");
myLink.textContent = "Twitter";