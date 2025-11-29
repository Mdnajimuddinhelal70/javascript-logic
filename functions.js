// function greet(){
//     console.log("Hello, friend!")
// }
// greet();

// function sayName(name){
//     console.log("Hello", name)
// };
// sayName("Hero alom")
// function add(a, b){
//  return a + b;
// }

// let result = add(12, 20)
// console.log(`The sum is ${result}`)

// function calculateBMI(weight, height){
//   let bmi = weight / (weight * height);
//   return bmi
// };

// let myBmi = calculateBMI(63, 5.4)
// console.log("Your BMI is", myBmi.toFixed(2))

// function addNumbers(a, b) {
//   let result = a + b;
//   return result;
// }

// let sum = addNumbers(10, 5);
// console.log("Total =", sum);

// function sayHello(name) {
//   return "Hello " + name + "!";
// }

// let message = sayHello("Najim");
// console.log(message);

// function getEvenNumbers(numbers) {
//   let evens = [];

//   for (let num of numbers) {
//     if (num % 2 === 0) {
//       evens.push(num);
//     }
//   }

//   return evens;
// }

// console.log(getEvenNumbers([1, 2, 3, 4, 5, 6]));

// function syaHi() {
//   return "Hi";
// }

// console.log(syaHi());

function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function bye() {
  console.log("Goodbye!");
}

greet("Najim", bye);
