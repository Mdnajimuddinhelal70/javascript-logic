
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

function calculateBMI(weight, height){
  let bmi = weight / (weight * height);
  return bmi
};

let myBmi = calculateBMI(63, 5.4)
console.log("Your BMI is", myBmi.toFixed(2))