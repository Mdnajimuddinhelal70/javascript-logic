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

// console.log(name);
// console.log(age);
// console.log(myClass);

// Lexical scope

// function outer() {
//   let outerVar = "I am a student";
//   function inner() {
//     console.log(outerVar);
//   }
//   inner();
// }

// outer();

// // Closurse scope
// function makeCounter() {
//   let count = 0;
//   return function () {
//     count++;
//     console.log(count);
//   };
// }

// const counter = makeCounter();
// counter();
// counter();

// function createBankAccount(ownerName) {
//   let balance = 0;

//   return {
//     deposit(amount) {
//       balance += amount;
//       console.log(`${ownerName} balance: ${balance}`);
//     },

//     withdraw(amount) {
//       if (amount > balance) {
//         console.log("Not enough balance");
//       } else {
//         balance -= amount;
//         console.log(`${ownerName} balance: ${balance}`);
//       }
//     },
//   };
// }

// const najimAccount = createBankAccount("Najim");

// najimAccount.deposit(500);
// najimAccount.withdraw(200);
// najimAccount.withdraw(500);

// function checkAccess(role) {
//   return function (action) {
//     if (role === "admin") {
//       console.log(`Admin can ${action}`);
//     } else {
//       console.log("Access denied");
//     }
//   };
// }

// const adminAccess = checkAccess("admin");
// const userAccess = checkAccess("user");

// adminAccess("delete user");
// userAccess("delete user");

function limitedCounter(limit) {
  let count = 0;

  return function () {
    if (count < limit) {
      count++;
      console.log(count);
    } else {
      console.log("Limit reached");
    }
  };
}

const counter = limitedCounter(3);
counter();
counter();
counter();
counter();
