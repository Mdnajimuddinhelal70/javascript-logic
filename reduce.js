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
const dogs = [
  { name: "Rex", breed: "Pug", owner: "John" },
  { name: "Bella", breed: "Labrador", owner: "Mike" },
  { name: "Tiny", breed: "Pug", owner: "Sara" },
];

const pugOwners = dogs.reduce((acc, dog) => {
  if (dog.breed === "Pug") acc.push(dog.owner);
  return acc;
}, []);

console.log(pugOwners);
