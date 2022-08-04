//alert: show message in up  
//window.alert("hello");

//------------------------------------------------------------------------------------------------

//write in content of page
// document.write("hello");

//------------------------------------------------------------------------------------------------

//write in console
// console.log("this is khaled")

//------------------------------------------------------------------------------------------------

//show erorr message
// console.error("Error")

//------------------------------------------------------------------------------------------------

//write it as a table
// console.table(["khaled","ahmed","ehsan"])

//------------------------------------------------------------------------------------------------

// %c before the elements that we want to style it
// console.log("%ckhaled %calshammi","color: red; font-size: 20px","color: red; font-size: 20px")

//------------------------------------------------------------------------------------------------

//to know type of thing
//[] = object
//{name:"khaled",age:20} key:value
// console.log(typeof 1);
// null = undefined

//------------------------------------------------------------------------------------------------

// variable = var
// var age = 19;
// var name = "khaled";
// let like var but will inform us if there's error like we can't make 2 variable with same name
// const
/*
Var
- Redeclare (Yes)
- Access Before Declare (Undefined)
- Variable Scope Drama [Added To Window] ()

Let ``
- Redeclare (No => Error)
- Access Before Declare (Error)
- Variable Scope Drama ()

Const
- Redeclare (No => Error)
- Access Before Declare (Error)
- Variable Scope Drama ()
  */

//------------------------------------------------------------------------------------------------

// to change content of class name in html:
// NameOfClass.innerHTML = "khaled";

//------------------------------------------------------------------------------------------------

/*
to write '' make variable " khaled 'alshammi' ", it will print khaled 'alshammi'
to write "" make variable ' khaled "alshammi" ', it will print khaled "alshammi"
to write "" make variable " khaled \"alshammi\"" "", it will print khaled "alshammi"
to write \ make variable " khaled \\ zak \"alshammi\"" "", it will print khaled "alshammi"
\n next line
console.log("khaled \ 
alshammi"); it will print khaled alshammi in same line 
*/
// console.log(1+" "+2+" \n"+3);
// console.log(`${1} ${2} ""
// ${3}`);

//------------------------------------------------------------------------------------------------

/*
let Name = "  khaled  ";
console.log(Name[0]); = k
console.log(Name.charAt(1)); = h
console.log(Name.length); = 6
console.log(Name.trim()); delete the extra space
console.log(Name.trim().charAt(1).toUpperCase());
*/

//------------------------------------------------------------------------------------------------

/*
  Switch Statement
  switch(expression) {
    Case 1:
      // Code Block
      break;
    Case 2:
      // Code Block
      break;
    Default:
      // Code Block
  }
  - Default Ordering
  - Multiple Match
  - ===

let day = "A";

switch (day) {
  case 0: console.log("Saturday"); break;
  case 1: console.log("Sunday"); break;
  case 2:
  case 3: console.log("Monday"); break;
  default: console.log("Unknown Day"); break;
}
*/