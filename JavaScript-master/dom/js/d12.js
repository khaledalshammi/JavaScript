/*
DOM [Deal With Elements]
- before [Element || String]
- after [Element || String]
- append [Element || String]
- prepend [Element || String]
- remove
*/

let element = document.getElementById("my-div");
let createdP = document.createElement("p");
element.before("Hello world")//it will add before div
element.after("Hello world")//it will add after div
element.after(createdP);//it will add after div
element.append("Hello world")//it will add in the div in the end
element.prepend("Hello world")//it will add in the div in the first
// element.remove(); remove whole div