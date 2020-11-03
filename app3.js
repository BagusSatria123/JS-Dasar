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
const age = [25, 16, 17, 9, 10, 11, 15, 28, 30];
const filteredAge = age.filter(myFunction);

function myFunction(value) {
  return value >= 17;
}
console.log(filteredAge);
