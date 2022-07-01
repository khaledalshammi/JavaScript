/*
DOM [Create Elements]
- createElement
- createComment
- createTextNode
- createAttribute
- appendChild
*/
/*
let myElement = document.createElement("div");//create element that's not exist
let myAttr = document.createAttribute("data-custom");//create new attribute that's not exist
let myText = document.createTextNode("Product One");//create text 
let myComment = document.createComment("This Is Div");//create comment

myElement.className = "product";
myElement.setAttributeNode(myAttr); //setAttribute myElement
myElement.setAttribute("data-test", "Testing"); //setAttribute because not it exists

// Append Comment To Element
myElement.appendChild(myComment);

// Append Text To Element
// myElement.appendChild(myText);
//myElement.textContent = "Product One";

// Append Element To Body
document.body.appendChild(myElement);
*/