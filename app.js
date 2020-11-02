//const bersifat constan karna di expect menjadi konstan
//let diubah isinya
//var dihindari
const heading = document.querySelector("#project-title");

heading.textContent = "Test 4545";

// JS Starter
/*
var thisIsFunction = "this is function";
const PI = 2.14;

var y = 4;
var z = 2;
var x = y + z;

function sumNum(a, b) {
  return a + b;
}

var IniSebuahVar = "var";
IniSebuahVar = "aye";

var array = ["bubur ayam", "kacang goreng", 3, 4, 2000, "1999"];

console.log(IniSebuahVar);
*/

//Program Binding
/*
let aada = "tama";
for (let index = 0; index < 3; index++) {
  console.log(aada + index);
}

function foo() {
  var fooVar = "txt";

  console.log("di dalam ada " + foo);
  return fooVar;
}

foo();
*/

//Number value
/*
let number = 2002;
let NumString = "2020";
let varBigNumber = 1.889e8; //188.900.000
*/

//Arithmetic operator
//modulus
/*
let modulus = 320 % 100;
console.log(modulus);
*/

//special numbers
/*
let speciaNum3 = NaN;
let speciaNum2 = 0 - 0;
let speciaNum1 = Infinity - Infinity;
let speciaNum0 = "five" - 0;

// console.log(typeof NaN);
console.log(speciaNum0);
*/

//String Values
/*
let String1 = "ini string 1";
let String2 = "ini string 2";
let String3 = "ini string 3";

let multilineString = "Ini adalah paragraph 1\n Dan ini adalah paragraph 2";

let multilineString2 = `
 Ini adalah paragraph 1 Dan
  ini adalah paragraph 2`;

let firstName = "David";
let lastName = "Beckham";
let shirtNumber = 9;

let namaLengkap = `${firstName} ${lastName} ${shirtNumber}`;
console.log(namaLengkap);
*/

//Type coercion in JS
/*
console.log("100" - 50); //hasil 50 karena JS membaca - angka
console.log("100" + 50); //hasil 10050 karena +
console.log(8 * null); //hasil 0 karena null
console.log("five" * 4); //hasil Nan karena "five" adalah string
*/

//boolean
/*
let yes = "true";
let no = "false";

// console.log(9 < 10);
console.log("Apple" == "Apple");
*/

//Logical Operators and Advanced Comparison
/*
// let firstName = "wegodev";
 // console.log(firstName === "wegodev"); // === strict comparison
// let firstNum = 7;
// console.log(firstNum == "7"); // == loose comparison hasil true
// console.log(firstNum === "7"); // === strict loose comparison hasil false
//&&
// console.log(firstName === "wegodev" && firstNum === 7);
// console.log(false && true);
// ||
// let tahun = 2019;
// console.log(tahun !== 2020); //hasil true
// let yes = !true;
// console.log(yes);
*/

// Objects and Arrays
/*
let makananFavoriteArray = [
  "Mie Ayam",
  "Banana",
  "Burger",
  2020,
  false,
  true,
  null,
  NaN,
];

let biodataObject = {
  firstName: "bambang",
  lastName: "pamungkas",
  makananFavorite: ["Mie Ayam", "Burger", "HotDog"],
  istri: {
    firstName: "Tri",
    lastName: "Ajeng",
    makananFavorite: ["Soto", "rawon"],
  },
  anak_laki: {
    firstName: "Sukiman",
    lastName: "Yanto",
  },
};
*/

//Function Return Values
/*
alert("Ini tanda alert");
console.log(Math.round(1, 3)); //cari yang terkecil
console.log(Math.min(1, 3)); //cari yang terkecil
*/

//Control Flow
/*
let yourName = String(prompt("What is yourname?"));
alert(`Hi so your name is ${yourName}?`);
*/

//Conditional Execution
/*
let yourYearOfBirth = Number(prompt("Kapan Tahun Lahirmu?"));

if (2020 - yourYearOfBirth < 17) {
  alert("Kamu masih kecil");
} else if (2020 - yourYearOfBirth > 17 && 2020 - yourYearOfBirth < 40) {
  alert("kamu sudah dewasa");
} else if (2020 - yourYearOfBirth > 40) {
  alert("anda sudah Tua");
} else {
  alert("Anda tidak jelas");
}
*/

//Ternary Operator
/*
let yourYearOfBirth = Number(prompt("Kapan Tahun Lahirmu?"));
//digunakan satu percabangan
2020 - yourYearOfBirth < 17
  ? alert("kamu masih kecil")
  : alert("kamu sudah dewasa");
*/

//Switch case
/*
let cuacaHariIni = prompt("Bagaimana cuaca hari ini ?");

switch (cuacaHariIni) {
  case "mendung":
    alert("jangan lupa bawa payung");
    break;
  case "panas":
    alert("jangan lupa berjemur");
    break;
  case "berawan":
    alert("Anda boleh keluar");
    break;
  default:
    alert("Cuaca kamu tidak jelas");
    break;
}
*/

//Do and While
/*
let count = 0;
//while
// while (count < 12) {
//   console.log(count);
//   count = count + 2;
// }
//Do
// do {
//   console.log(count);
//   count = count + 2;
// } while (count <= 12);
*/

//For loops javascript
/*
// for (let i = "*"; i.length <= 5; i = i + "*") {
//   console.log(i);
// }

for (let i = 0; i <= 100; i = i + 2) {
  console.log(i);
}
*/
