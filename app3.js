//Data Structure Array dan Array Properties
/*
// const array = [2, 5, 6, 18, 19, 20, "String", "wegodev", true];
// console.log(array);
// console.log(array.length);
// console.log(array[1]);

// const array = [1, 2, 3, 4, 5];

// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

// const array = [1, 2, 3, 4, 5];

// for (let i = 0; i < array.length; i++) {
//   array[i] = array[i] * 2;
// }
// console.log(array);
// console.log((array[0] = "satu"));
// console.log(array);
*/

//Array method push,pop,unshift dan shift
/*
const array = [1, 2, 3, 4, 5];
//Push
array.push(6); //menambahkan angka dibelakang

//Pop
array.pop(); //menghapus angka dibelakang
console.log(array.pop()); //menampilkan angka yang dihapus

//Unshift
array.unshift(0); //menambahkan angka didepan

//shift
array.shift(); //mengurangi angka didepan
console.log(array);
*/

//Array slice dan splice
/*
//slice
const animals = ["kucing", "beruang", "jerapah", "gajah", "harimau"];

// let hewanYangDitangkap1 = animals.slice(2);
// let hewanYangDitangkap2 = animals.slice(1, 3);

// console.log(hewanYangDitangkap2);

//splice
// animals.splice(2, 1, "buaya"); //(arrayyangdihapus,yang dituju,pengganti string) hasil :(5) ["kucing", "beruang", "buaya", "gajah", "harimau"]
animals.splice(2, 3); //(arrayyangdihapus,yang dituju) hasil : (2) ["kucing", "beruang"]
console.log(animals);
*/

//Array forEach and map
/*
//foreach
// const animals = ["kucing", "beruang", "jerapah", "gajah", "harimau"];
// animals.forEach(myFunction);

// function myFunction(value) {
//   console.log(value + " hidup");
// }

//map (me return array baru)
// const numbers = [12, 23, 45, 60, 50];
// const numberMultiplied = numbers.map(multiply);
// function multiply(value) {
//   return value * 2;
// }
// console.log(numberMultiplied);
*/

//Array Filter
/*
const age = [25, 16, 17, 9, 10, 11, 15, 28, 30];
const filteredAge = age.filter(myFunction);

function myFunction(value) {
  return value >= 17;
}
console.log(filteredAge);
*/

//Objects in javascript
/*
const person = {
  firstName: "Bagus",
  lastName: "Putra",
  age: 20,
  nationality: "Indonesia",
};
console.log(person);

const person2 = new Object();
person2.firstName = "Bagus";
person2.lastName = "satria";
person2.age = 20;
console.log(person2);
*/

//Accessing value of object
/*
// const person = {
//   firstName: "Bagus",
//   lastName: "Putra",
//   age: 20,
//   nationality: "Indonesia",
// };

// const personName = person.firstName;
// const personName = person["firstName"];

// let targetKey = "firstName";
// const personName = person[targetKey];

const person = {
  name: {
    firstName: "Bagus",
    lastName: "Putra",
  },
  age: 20,
  nationality: "Indonesia",
};
const personName = person.name.lastName;
console.log(personName);
*/

//Adding and mutating value in object
/*
const person = {
  name: {
    firstName: "Bagus",
    lastName: "Putra",
  },
  age: 20,
  nationality: "Indonesia",
};

person.hairColor = "brown";
person.name.firstName = "jane";
person.name.firstNames = "jan0";

console.log(person);
*/

//Delete property in object
/*
const person = {
  name: {
    firstName: "Bagus",
    lastName: "Putra",
  },
  age: 20,
  nationality: "Indonesia",
};

delete person.nationality;
console.log(person);
// console.log(person.nationality);
*/

//Object and keys assign
/*
//Object Keys
const objects = { a: 1, b: 2, c: 4 };
console.log(Object.keys(objects));

//Object assign (Menggabungkan)
const objects1 = { a: 1, b: 2, c: 4 };
const objects2 = { d: 6, e: 5 };

Object.assign(objects1, objects2);
console.log(objects1);
*/

//Array of object
/*
const todos = [
  {
    text: "Ini adalah tugas 1",
    isCompleted: false,
  },
  {
    text: "Ini adalah tugas 2",
    isCompleted: true,
  },
  {
    text: "Ini adalah tugas 3",
    isCompleted: false,
  },
  {
    text: "Ini adalah tugas 4",
    isCompleted: true,
  },
];

// const uncompletedTasks = todos.filter(myFunction);

// function myFunction(value) {
//   if (value.isCompleted === false) {
//     return value;
//   }
// }

const uncompletedTasks = todos.filter((value) => {
  if (value.isCompleted === true) {
    return value;
  }
});
console.log(uncompletedTasks);
*/
