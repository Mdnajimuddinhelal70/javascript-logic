// function outer() {
//   let count = 0;

//   function inner() {
//     count++;
//     console.log(count);
//   }

//   return inner;
// }

// const counter = outer();
// counter();
// counter();

function bankAccount() {
  let balance = 0;

  return {
    deposit(amount) {
      balance += amount;
      console.log("Balance:", balance);
    },
    withdraw(amount) {
      balance -= amount;
      console.log("Balance:", balance);
    },
  };
}

const account = bankAccount();
account.deposit(100);
account.withdraw(20);
