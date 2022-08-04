/*
  BOM [Browser Object Model]
  - location Object
  --- href Get / Set [URL || Hash || File || Mail]
  --- host
  --- hash
  --- protocol
  --- reload()
  --- replace()
  --- assign()
*/

console.log(location);
console.log(location.href);

// location.href = "https://google.com";
// location.href = "/#sec02";
// location.href = "https://developer.mozilla.org/en-US/docs/Web/JavaScript#reference";

// console.log(location.host);//127.0.0.1:500
// console.log(location.hostname);//127.0.0.1

// console.log(location.protocol);//http

// console.log(location.hash);
// location.reload();
// location.replace("https://www.google.com/")//change href but it will not keep in history
// location.assign("https://www.google.com/");//change href without prevent history
