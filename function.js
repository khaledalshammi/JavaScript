/*function sayHello(userName, age){
    if(age>=18){
        console.log(`Hello ${userName} your age is ${age}`);
    }else{
        console.log("you are still young")
    } 
}
sayHello("khaled",24);
sayHello("khaled",3);

function range(start,end,exclude){
    for(let i=start; i<=end; i++){
        if(exclude === i){
            continue;
        }
        console.log(i);
    }
}
range(1,6,3);
function hey(userName){
    return `hello ${userName}`;
}
let name = hey("khaled");
console.log(name);

function calc(num1,num2){
    return num1+num2;
}
let result = calc(1,4);
console.log(result);

function generate(start, end) {
    for (let i = start; i <= end; i++) {
      if (i === 15) {
        return `Interrupting`;
      }
      console.log(i);
    }
  }
  
console.log(generate(10, 20));

function sayhello(username = "Unknown", age = "Unknown") {
    // if (age === undefined) {
    //   age = "Unknown";
    // }
    // age = age || "Unknown"; or
    return `Hello ${username} Your Age Is ${age}`;
  }
  
  console.log(sayhello());

//----------------------------------------------------------------------------------------------------------------------

function calc(...numbers) {
    // console.log(Array.isArray(numbers));
    let result = 0;
    for (let i = 0; i < numbers.length; i++) {
      result += numbers[i]; // result = result + numbers[i]
    }
    return `Final Result Is ${result}`;
  }
console.log(calc(10, 20, 10, 30, 50, 30));

function showInfo(us = "Un", ag = "Un", rt = 0, show = "Yes", ...sk) {
    document.write(`<div>`);
    document.write(`<h2>Welcome, ${us}</h2>`);
    document.write(`<p>Age: ${ag}</p>`);
    document.write(`<p>Hour Rate: $${rt}</p>`);
    if (show === "Yes") {
      if (sk.length > 0) {
        document.write(`<p>Skills: ${sk.join(" | ")}</p>`);
      } else {
        document.write(`<p>Skills: No Skills</p>`);
      }
    } else {
      document.write(`<p>Skills Is Hidden</p>`);
    }
    document.write(`</div>`);
  }
showInfo("Osama", 38, 20, "No", "Html", "CSS");

//----------------------------------------------------------------------------------------------------------------------

let calculator = function (num1, num2) {
    return num1 + num2;
  };
  
  console.log(calculator(10, 20));

  function sayH() {
    console.log("Hello khaled");
  }
  
  document.getElementById("show").onclick = sayH;

  setTimeout(function() { 
    console.log("Good");
  }, 2000);

//----------------------------------------------------------------------------------------------------------------------

  function sayMessage(fName, lName) {
    let message = `Hello`;
    // Nested Function
    function concatMsg() {
      message = `${message} ${fName} ${lName}`;
    }
    concatMsg();
    return message;
  }
  console.log(sayMessage("Osama", "Mohamed"));

  function sayMessage(fName, lName) {
    let message = `Hello`;
    // Nested Function
    function concatMsg() {
      return `${message} ${fName} ${lName}`;
    }
    return concatMsg();
  }
  console.log(sayMessage("Osama", "Mohamed"));

  function sayMessage(fName, lName) {
    let message = `Hello`;
    // Nested Function
    function concatMsg() {
      function getFullName() {
        return `${fName} ${lName}`;
      }
      return `${message} ${getFullName()}`;
    }
    return concatMsg();
  }
  console.log(sayMessage("Osama", "Mohamed"));

//----------------------------------------------------------------------------------------------------------------------

  let print = function () {
  return 10;
};
console.log(print);

let print = () => 10;
console.log(print);

let print = function (num) {
  return num;
};
console.log(print(2));

let print = num => num;
console.log(print(5));

let print = function (num1, num2) {
  return num1 + num2;
};
console.log(print(4,6));

let print = (num1, num2) => num1 + num2;

console.log(print(100, 50));

//----------------------------------------------------------------------------------------------------------------------

Scope
- Global And Local Scope

var a = 1;
let b = 2;

function showText() {
  var a = 10;
  let b = 20;
  console.log(`Function - From Local ${a}`);
  console.log(`Function - From Local ${b}`);
}

console.log(`From Global ${a}`);
console.log(`From Global ${b}`);

showText();

let prevent over write
var = we can overwtire it
var x = 10;

if (10 === 10) {
  let x = 50;
  console.log(`From If Block ${x}`);
}

console.log(`From Global ${x}`);
*/