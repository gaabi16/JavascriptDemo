// ----------------------
// SEMINARUL 1
// ----------------------

console.log("Hello world!");

let userName = "Gabi";
// console.log("Numele meu este " + userName);
console.log(`My name is ${userName}`);

const PI = 3.14;
console.log(PI);
//PI = 6;
//console.log(PI);

/* console.log(variabila);
var variabila = 5; */

let letVariable = 10;
console.log(letVariable);

let a = 10;
let b = 3;
console.log(Math.floor(a / b));

let c = 5;
let d = "5";

console.log(c == d); // true
console.log(c === d); // false

let zi = 3;
switch (zi) {
  case 1:
      console.log("Luni");
      break;
  case 2:
      console.log("Marti");
      break;
  case 3:
      console.log("Miercuri");
      break;
  default:
      console.log("Zi invalida");
}

for (let i = 0; i < 20; i++) {
    if (i % 2 === 0)
        console.log(`${i}`);
}

// let nume = prompt("What is your name?"); // prompts the user to insert some data
// console.log(`${nume}`);

// ----------------------
// SEMINARUL 2
// ----------------------

function helloWorld() {
    console.log("hello from javascript!");
}
helloWorld();

function student(nota, nume) {
    console.log("nota mea este " + nota + " si numele meu este " + nume);
}
student(4, "katy");
student(8, "gabi");

// return function
function sum(a, b) {
    return a + b;
}
let rezultat = sum(3, 10);
console.log(`rezultatul este ${rezultat}`)

// anonymous function
let mesaj = function(nume) {
    console.log("Bună ziua, " + nume + "!");
};
mesaj("Elena");

// arrow function
let arrowSum = (a, b) => a + b;
console.log("rezultatul este: " + arrowSum(2, 3));

let arrowHello = (nume) => {
    console.log("this is a message");
    console.log(nume);
};
arrowHello("katy");

let studentObject = {
    nume: "rares",
    varsta: 20,
    nota: 9,
    greeting: function() {
        console.log("hello my name is " + this.nume);
    }
};
console.log(studentObject);
studentObject.frati = true;

console.log(studentObject);
console.log(studentObject["nume"]);

let age = "varsta";
console.log(studentObject[age]);

studentObject.greeting();

let fructe = [
    "mar",
    "ananas",
    "portocala"
]

console.log(fructe);
fructe.push("banana");
console.log(fructe);
console.log(fructe.length);

let numere = [10, 20, 30];

numere.forEach((elem) => {
    console.log(elem);
});

for (let index in fructe) {
    console.log(fructe[index]);
}



