// Part-1
// const numbers = [1, 2, 3, 4];

// const double = numbers.map((num) => num * 2);

// console.log(double);

// Part-2
// const names = ["najim", "rahim", "karim"];
// const upperNames = names.map((name) => {
//   return name.toUpperCase();
// });
// console.log(upperNames);

// Part-3
// const names = ["najim", "rahim", "karim"];
// const upperNames = names.map((name) => name.toUpperCase());
// console.log(upperNames);

//Find the second largest number in an array
// const numbers = [10, 45, 2, 99, 23];

// let max = -Infinity;
// let secondMax = -Infinity;

// for (let num of numbers) {
//   if (num > max) {
//     secondMax = max;
//     max = num;
//   } else if (num > secondMax && num !== max) {
//     secondMax = num;
//   }
// }

// console.log(secondMax);

// Numbers from 1 to 5, one missing
// const arr = [1, 2, 4, 5];

// const n = 5;
// const expectedSum = (n * (n + 1)) / 2;

// let actualSum = 0;
// for (let num of arr) {
//   actualSum += num;
// }

// console.log(expectedSum - actualSum);
