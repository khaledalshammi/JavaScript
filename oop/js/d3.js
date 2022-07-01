/*
  Class
  - Inheritance
*/

// Parent Class
// class User {
//     constructor(id, username) {
//       this.i = id;
//       this.u = username;
//     }
//     sayHello() {
//       return `Hello ${this.u}`;
//     }
//   }
  
//   // Derived Class
//   class Admin extends User {
//     constructor(id, username, permissions) {
//       super(id, username);
//       this.p = permissions;
//     }
//   }
  
//   class Superman extends Admin {
//     constructor(id, username, permissions, ability) {
//       super(id, username, permissions);
//       this.a = ability;
//     }
//   }
  
//   let userOne = new User(100, "Elzero");
//   let adminOne = new Admin(110, "Mahmoud", 1);
  
//   console.log(userOne.u);
//   console.log(userOne.sayHello());
//   console.log("####");
//   console.log(adminOne.i);
//   console.log(adminOne.u);
//   console.log(adminOne.p);
//   console.log(adminOne.sayHello());

//-------------------------------------------------------------------------------------------------------------------------

  /*
  Encapsulation
  - Class Fields Are Public By Default
  - Guards The Data Against Illegal Access.
  - Helps To Achieve The Target Without Revealing Its Complex Details.
  - Will Reduce Human Errors.
  - Make The App More Flexible And Manageable.
  - Simplifies The App.
*/

// class User {
//   // Private Property
//   #e;
//   constructor(id, username, eSalary) {
//     this.i = id;
//     this.u = username;
//     this.#e = eSalary;
//   }
//   getSalary() {
//     return parseInt(this.#e);
//   }
// }

// let userOne = new User(100, "Elzero", "5000 Gneh");

// console.log(userOne.u);
// console.log(userOne.getSalary() * 0.3);