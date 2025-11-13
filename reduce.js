// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((acc, current) => acc + current, 0);

// console.log(sum);

// Find Maximum
// const numbers = [3, 7, 2, 9, 5];

// const max = numbers.reduce((acc, current) => {
//   return current > acc ? current : acc;
// }, numbers[0]);

// console.log(max); // 9

// Count items

// const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

// const count = fruits.reduce((acc, fruit) => {
//   acc[fruit] = (acc[fruit] || 0) + 1;
//   return acc;
// }, {});

// console.log(count);
// { apple: 3, banana: 2, orange: 1 }

// Advance reduce method
// const dogs = [
//   { name: "Rex", breed: "Pug", owner: "John" },
//   { name: "Bella", breed: "Labrador", owner: "Mike" },
//   { name: "Tiny", breed: "Pug", owner: "Sara" },
// ];

// const pugOwners = dogs.reduce((acc, dog) => {
//   if (dog.breed === "Pug") acc.push(dog.owner);
//   return acc;
// }, []);

// console.log(pugOwners);

// const users = [
//   { name: "John", age: 25, gender: "male", salary: 40000 },
//   { name: "Sara", age: 22, gender: "female", salary: 35000 },
//   { name: "Mike", age: 30, gender: "male", salary: 50000 },
//   { name: "Lina", age: 28, gender: "female", salary: 45000 },
// ];
// const femaleNames = users
//   .filter((user) => user.gender === "female")
//   .map((user) => user.name);

// console.log(femaleNames); // ["Sara", "Lina"]

//More advence
const users = [
  { name: "John", age: 25, gender: "male", salary: 40000 },
  { name: "Sara", age: 22, gender: "female", salary: 35000 },
  { name: "Mike", age: 30, gender: "male", salary: 50000 },
  { name: "Lina", age: 28, gender: "female", salary: 45000 },
];

// Step 1: Only women
const femaleUsers = users.filter((user) => user.gender === "female");

// Step 2: only salary
const femaleSalaries = femaleUsers.map((user) => user.salary);

// Step 3: all salary +++
const totalSalary = femaleSalaries.reduce((sum, salary) => sum + salary, 0);

// Step 4: average count
const averageSalary = totalSalary / femaleSalaries.length;

console.log(`Average female salary: ${averageSalary}`);
