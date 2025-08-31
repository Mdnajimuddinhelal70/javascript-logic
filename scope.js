// Golbal scope
// function sayName() {
// let name = "Najim";
// console.log(name);
// }

// sayName();

// Block scope
// {
//   //   let name = "Najim"; //Block scope
//   //   const age = 25;    //Block scope
//   var myClass = "Degree 3rd year";   //← NOT block-scoped
// }

console.log(name);
console.log(age);
console.log(myClass); //output =>Degree 3rd year ✔🟢

// Lexical scope

function outer() {
  let outerVar = "I am a student";
  function inner() {
    console.log(outerVar);
  }
  inner();
}

outer();

// Closurse scope
function makeCounter() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

const counter = makeCounter();
counter();
counter();
