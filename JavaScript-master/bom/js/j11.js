/*
  BOM [Browser Object Model]
  session like local storage but localstorage is permenant but session will finish when close page
  Session Storage // when we close the tape page session will go 
  - setItem
  - getItem
  - removeItem
  - clear
  - key

  Info
  - New Tab = New Session
  - Duplicate Tab = Copy Session
  - New Tab With Same Url = New Session
*/

// window.localStorage.setItem("color", "red");
// window.sessionStorage.setItem("color", "blue");

document.querySelector(".name").onblur = function () {
    // console.log(this.value);
    window.localStorage.setItem("input-name", this.value);
  };