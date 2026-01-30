// const names = ["Rahim", "Karim", "Hasan"];

// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }

// const student = {
//   name: "Najim",
//   age: 20,
//   role: "Developer",
// };

// for (let key in student) {
//   console.log(key, student[key]);
// }

// const numbers = [10, 20, 30];

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// const students = [
//   { name: "Najim", age: 20 },
//   { name: "Rahim", age: 22 },
// ];

// for (let student of students) {
//   for (let key in student) {
//     console.log(key, student[key]);
//   }
// }

// const numbers = [5, 2, 9, 1, 7];

// numbers.sort((a, b) => a - b);

// console.log(numbers);
// // Output: [1, 2, 5, 7, 9]

// Sort method step 2
// const names = ["Najim", "Ali", "Zara", "Rahim"];

// names.sort();

// console.log(names);
// Output: ["Ali", "Najim", "Rahim", "Zara"]

// Sort method step 3
// const users = [
//   { name: "Najim", age: 22 },
//   { name: "Ali", age: 18 },
//   { name: "Rahim", age: 25 },
// ];

// users.sort((a, b) => a.age - b.age);

// console.log(users);

// Sort method step 4
// const numbers = [10, 3, 7, 1];

// const sortedNumbers = [...numbers].sort((a, b) => a - b);

// console.log(sortedNumbers);
// console.log(numbers);

// Sort method step 4
// const students = [
//   { name: "Najim", age: 20 },
//   { name: "Arif", age: 18 },
//   { name: "Rafi", age: 20 },
//   { name: "Bashir", age: 18 },
// ];

// const sortedStudents = [...students].sort((a, b) => {
//   if (a.age !== b.age) {
//     return a.age - b.age;
//   }
//   return a.name.localeCompare(b.name);
// });

// console.log(sortedStudents);

// Sort method step 5
// const orders = [
//   { id: 1, status: "APPROVED" },
//   { id: 2, status: "PENDING" },
//   { id: 3, status: "REJECTED" },
//   { id: 4, status: "PENDING" },
// ];

// const statusPriority = {
//   PENDING: 1,
//   APPROVED: 2,
//   REJECTED: 3,
// };

// const sortedOrders = [...orders].sort(
//   (a, b) => statusPriority[a.status] - statusPriority[b.status]
// );

// console.log(sortedOrders);

//Find largest number
// const numbers = [10, 45, 2, 99, 23];
// let max = numbers[0];

// for (let i = 1; i < numbers.length; i++) {
//   if (numbers[i] > max) {
//     max = numbers[i];
//   }
// }

// console.log("Max number:", max);

//Star pattern
let star = "";

for (let i = 1; i <= 5; i++) {
  star += "*";
  console.log(star);
}
