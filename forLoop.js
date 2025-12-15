// const names = ["Rahim", "Karim", "Hasan"];

// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }

const student = {
  name: "Najim",
  age: 20,
  role: "Developer",
};

for (let key in student) {
  console.log(key, student[key]);
}
