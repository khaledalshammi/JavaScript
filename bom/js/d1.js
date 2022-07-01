// window.alert("Test");
// this.alert("Test");
// alert("Test");
//all are the same
//alert prevent you to do any thing until you press it
/*
BOM [Browser Object Model]
- alert(Message) => Need No Response Only Ok Available
- confirm(Message) => Need Response And Return A Boolean
- prompt(Message, Default Message) => Collect Data write data in it
*/

// alert("Test");
// console.log("Test");

// let confirmMsg = confirm("Are You Sure?");

// console.log(confirmMsg);

// if (confirmMsg === true) {
//   console.log("Item Deleted");
// } else {
//   console.log("Item Not Deleted");
// }

let promptMsg = prompt("Good Day To You?", "Write Day With 3 Characters");

console.log(promptMsg);