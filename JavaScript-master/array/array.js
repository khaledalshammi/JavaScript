/*
  Arrays
  - Create Arrays [Two Methods] new Array() + []
  - Access Arrays Elements
  - Nested Arrays
  - Change Arrays Elements
  - Check For Array Array.isArray(arr);

let myFriends = ["Ahmed", "Mohamed", "Sayed", ["Marwan", "Ali"]];

console.log(`Hello ${myFriends[0]}`);
console.log(`Hello ${myFriends[2]}`);
console.log(`${myFriends[1][2]}`);
console.log(`Hello ${myFriends[3][1]}`);
console.log(`${myFriends[3][1][2]}`);

console.log(myFriends);
myFriends[1] = "Gamal";
console.log(myFriends);
myFriends[3] = ["Sameh", "Ameer"];
console.log(myFriends);

console.log(Array.isArray(myFriends));

let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa"];

myFriends.length = 2;
// will delete Sayed, Alaa

console.log(myFriends);

myFriends[5] = "khaled";
console.log(myFriends);
it will be:
["Ahmed", "Mohamed", empty, empty, empty, "khaled"]
*/

//------------------------------------------------------------------------------------------------

/*
  Arrays Methods [Adding And Removing]
  - unshift("", "") Add Element To The First
  - push("", "") Add Element To The End
  - shift() Remove First Element From Array
  - pop() Remove Last Element From Array

let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa"];

console.log(myFriends);

myFriends.unshift("Osama", "Nabil"); add in the first of list

console.log(myFriends);

myFriends.push("Samah", "Eman"); add in the end of list

console.log(myFriends);

let first = myFriends.shift(); remove in the first of list

console.log(myFriends);

console.log(`First Name Is ${first}`);

let last = myFriends.pop(); remove in the end of list

console.log(myFriends);

console.log(`Last Name Is ${last}`);
*/

//------------------------------------------------------------------------------------------------

/*
  Arrays Methods [Search]
  - indexOf(Search Element, From Index [Opt])
  - lastIndexOf(Search Element, From Index [Opt])
  - includes(valueToFind, fromIndex [Opt]) [ES7]

let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa", "Ahmed"];

console.log(myFriends);

console.log(myFriends.indexOf("Ahmed")); = 0
console.log(myFriends.indexOf("Ahmed", 2)); = 4

console.log(myFriends.lastIndexOf("Ahmed")); search from end to first = 4
console.log(myFriends.lastIndexOf("Ahmed", -2)); = 0

console.log(myFriends.includes("Ahmed")); exist
console.log(myFriends.includes("Ahmed", 2));

if (myFriends.lastIndexOf("Osama") === -1) {
  console.log("Not Found");
}

console.log(myFriends.indexOf("Osama"));
console.log(myFriends.lastIndexOf("Osama"));
*/

//------------------------------------------------------------------------------------------------

/*
  Arrays Methods [Sort]
  - sort(Function [Opt])
  - reverse

let myFriends = [10, "Sayed", "Mohamed", "90", 9000, 100, 20, "10", -20, -10];

console.log(myFriends);
console.log(myFriends.sort().reverse());
*/

//------------------------------------------------------------------------------------------------

/*
  Arrays Methods [Slicing]
  - slice(Start [Opt], End [Opt] Not Including End)
  --- slice() => All Array
  --- If Start Is Undefined => 0
  --- Negative Count From End
  --- If End Is Undefined || > Indexes => Slice To The End Array.length
  --- Return New Array
  - splice(Start [Mand], DeleteCount [Opt] [0 No Remove], The Items To Add [Opt])
  --- If Negative => Start From The End

let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
console.log(myFriends);
console.log(myFriends.slice());
console.log(myFriends.slice(1));
console.log(myFriends.slice(1, 3));
console.log(myFriends.slice(-3));
console.log(myFriends.slice(1, -2));
console.log(myFriends.slice(-4, -2));
console.log(myFriends);

splice(place of adding, how many elemnts you wanna delete, add elements)
myFriends.splice(1, 2, "Sameer", "Samara");

console.log(myFriends);

*/

//------------------------------------------------------------------------------------------------

/*
  Arrays Methods [Joining]
  - concat(array, array) => Return A New Array
  - join(Separator)

let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
let myNewFriends = ["Samar", "Sameh"];
let schoolFriends = ["Haytham", "Shady"];

let allFriends = myFriends.concat(myNewFriends, schoolFriends, "Gameel", [1, 2]);

console.log(allFriends);

// control seperate 
console.log(allFriends.join());
console.log(allFriends.join(""));
console.log(allFriends.join(" @ "));
console.log(allFriends.join("|"));
console.log(allFriends.join("|").toUpperCase());

*/