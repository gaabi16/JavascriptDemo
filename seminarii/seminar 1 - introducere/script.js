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

let nume = prompt("What is your name?"); // prompts the user to insert some data
console.log(`${nume}`);



