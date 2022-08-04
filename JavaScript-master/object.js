/*
window.location //get location
window.location.href //get the link of location 
window.location.assign("https://google.com") //go to this location
*/

//------------------------------------------------------------------------------------------------------------------------------------

/*
let me = "name";

let user = {
    //properties
    name: "khaled",
    age: 40,
    "country of": "syria",
    50:"burger",
    //method
    sayHello: function(){
        return "khaled alshammi";
    },
};
//access to user
console.log(user.age);
console.log(user.name);
console.log(user.sayHello());
console.log(user["country of"]);
console.log(user[50]);
console.log(user[me]);
*/

//------------------------------------------------------------------------------------------------------------------------------------

/*
et available = true;

let user = {
  name: "Osama",
  age: 38,
  skills: ["HTML", "CSS", "JS"],
  available: false,
  addresses: {
    ksa: "Riyadh",
    egypt: {
      one: "Cairo",
      two: "Giza",
    },
  },
  checkAv: function () {
    if (user.available === true) {
      return `Free For Work`;
    } else {
      return `Not Free`;
    }
  },
};

console.log(user.name);
console.log(user.age);
console.log(user.skills);
console.log(user.skills.join(" | "));
console.log(user.skills[2]); // Access With Index
console.log(user.addresses.ksa);
console.log(user.addresses.egypt.one);
console.log(user["addresses"].egypt.one);
console.log(user["addresses"]["egypt"]);
console.log(user["addresses"]["egypt"]["one"]);

console.log(user.checkAv());
*/

//------------------------------------------------------------------------------------------------------------------------------------

// let user = new Object({
//   age: 20,
// });
// let user ={};

// console.log(user);

// user.age = 38;
// user["country"] = "Egypt";
// user.name = "khaled";

// user.sayHello = function () {
//   return `Hello`;
// };

// console.log(user);
// console.log(user.age);
// console.log(user.country);
// console.log(user.sayHello());
// console.log(user.name);

//-------------------------------------------------------------------------------------------------------------------------------------

/*
document.getElementById("c1").onclick = function () {
  console.log(this); //get its elements
};

let user = {
  age: 38,
  ageInDays: function () {
    console.log(this);
    return this.age * 365;
  },
};
console.log(user.age);
console.log(user.ageInDays());
*/

//-------------------------------------------------------------------------------------------------------------------------------------

/*
let user = {
  age: 20,
  doubleAge: function () {
    return this.age * 2;
  },
};

console.log(user);
console.log(user.age);
console.log(user.doubleAge());

let obj = Object.create({});

obj.a = 100;

console.log(obj);

let copyObj = Object.create(user);

copyObj.age = 50;

console.log(copyObj);
console.log(copyObj.age);
console.log(copyObj.doubleAge());
*/

//-------------------------------------------------------------------------------------------------------------------------------------

/*
let obj1 = {
  prop1: 1,
  meth1: function () {
    return this.prop1;
  },
};

let obj2 = {
  prop2: 2,
  meth2: function () {
    return this.prop2;
  },
};

let targetObject = {
  prop1: 100,
  prop3: 3,
};

let finalObject = Object.assign(targetObject, obj1, obj2);

finalObject.prop1 = 200;
finalObject.prop4 = 4;

console.log(finalObject);

let newObject = Object.assign({}, obj1, { prop5: 5, prop6: 6 });

console.log(newObject);
*/