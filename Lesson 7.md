# Lecția 7

## Gestionarea erorilor, framework-uri și biblioteci populare, Best Practices și standarde de codare

### Gestionarea erorilor

Gestionarea erorilor este esențială pentru a crea aplicații robuste și
fiabile. JavaScript oferă mai multe mecanisme pentru a gestiona erorile,
inclusiv try...catch, throw și obiectul Error.

#### Try...Catch

Blocul `try...catch` este utilizat pentru a prinde și gestiona erorile
care apar în timpul execuției codului.

##### Exemplu de utilizare:

``` javascript
try {
    let lista = JSON.parse("nu este json valid"); 
    console.log(lista);
} catch (eroare) {
    console.error("Eroare prinsă:", eroare.message);
}
```

#### Throw

Instrucțiunea `throw` este folosită pentru a genera manual o eroare.

##### Exemplu de utilizare:

``` javascript
function imparte(a, b) {
    if (b === 0) {
        throw new Error("Împărțirea la zero nu este permisă.");
    }
    return a / b;
}

try {
    let rezultat = imparte(10, 0);
    console.log(rezultat);
} catch (eroare) {
    console.error("Eroare:", eroare.message);
}
```

#### Obiectul Error

Obiectul `Error` este utilizat pentru a crea noi erori. Acesta poate fi
personalizat prin adăugarea de mesaje și proprietăți suplimentare.

##### Exemplu de utilizare:

``` javascript
try {
    throw new Error("Date de intrare invalide.");
} catch (eroare) {
    console.error("Tip:", eroare.name);
    console.error("Mesaj:", eroare.message);  // "Date de intrare invalide."
}
```

#### Promises și gestionarea erorilor

Pentru a gestiona erorile în Promises, se folosește metoda `catch`.

##### Exemplu de utilizare:

``` javascript
let promisiune = new Promise((resolve, reject) => {
    reject(new Error("Promisiunea a eșuat."));
});

promisiune
    .then(raspuns => console.log(raspuns))
    .catch(eroare => console.error("Eroare în promisiune:", eroare.message));
```

#### Async/Await și gestionarea erorilor

Pentru a gestiona erorile în funcții asincrone, se folosește `try...catch`.

##### Exemplu de utilizare:

``` javascript
async function preiaUtilizatori() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/invalid-url");
        let data = await response.json();
        console.log(data);
    } catch (eroare) {
        console.error("A apărut o eroare la fetch:", eroare.message);
    }
}

preiaUtilizatori();
```

### Framework-uri și biblioteci populare

JavaScript are numeroase framework-uri și biblioteci care facilitează
dezvoltarea aplicațiilor web. Printre cele mai populare se numără React,
Angular, Vue.js, și jQuery.

#### React

React este o bibliotecă JavaScript pentru construirea interfețelor de
utilizator. Este dezvoltată de Facebook și folosește o abordare bazată
pe componente.

##### Exemplu simplu de componentă React:

``` javascript
import React from 'react';
import ReactDOM from 'react-dom';

function Mesaj(props) {
    return <p>Bun venit, {props.utilizator}!</p>;
}

ReactDOM.render(<Mesaj utilizator="Maria" />, document.getElementById('root'));
```

#### Angular

Angular este un framework dezvoltat de Google pentru construirea
aplicațiilor web complexe. Folosește TypeScript și are o arhitectură
bazată pe module și componente.

##### Exemplu simplu de componentă Angular:

``` typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-bun-venit',
  template: `<p>Bun venit, {{ utilizator }}!</p>`,
})
export class BunVenitComponent {
  utilizator: string = 'Maria';
}
```

#### Vue.js

Vue.js este un framework progresiv pentru construirea interfețelor de
utilizator. Este ușor de integrat și folosit pentru a crea aplicații web
interactive.

##### Exemplu simplu de componentă Vue:

``` javascript
<template>
  <div>
    <p>Bun venit, {{ utilizator }}!</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      utilizator: 'Maria'
    };
  }
};
</script>
```

#### jQuery

jQuery este o bibliotecă JavaScript care simplifică manipularea DOM și
gestionarea evenimentelor. Este ușor de utilizat și foarte popular
pentru proiectele web mai mici.

##### Exemplu simplu de utilizare jQuery:

``` html
<!DOCTYPE html>
<html>
<head>
  <title>Exemplu jQuery</title>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script>
    $(document).ready(function() {
      $("#buton").click(function() {
        $("#mesaj").text("Bun venit, vizitator!");
      });
    });
  </script>
</head>
<body>
  <button id="buton">Apasă-mă</button>
  <p id="mesaj"></p>
</body>
</html>
```

### Best Practices și standarde de codare

Adoptarea celor mai bune practici și a standardelor de codare în
JavaScript este esențială pentru a crea cod de înaltă calitate, ușor de
întreținut și scalabil.

#### Utilizarea `const` și `let` în loc de `var`

Utilizează `const` pentru variabilele care nu se schimbă și `let` pentru
cele care se schimbă. Evită utilizarea `var` deoarece are scop de
funcție și poate duce la erori neintenționate.

#### Evitarea utilizării globale a variabilelor

Declarează variabilele doar în scopul lor necesar pentru a evita
conflictele și poluarea spațiului global de nume.

#### Folosirea funcțiilor arrow (=\>)

Funcțiile arrow sunt mai concise și nu au propriul context `this`, ceea
ce le face utile în anumite situații.

##### Exemplu:

``` javascript
let inmulteste = (a, b) => a * b;
console.log(inmulteste(4, 5));
```

#### Utilizarea destructuring

Destructuring face codul mai curat și mai ușor de citit atunci când
extragi valori din obiecte sau array-uri.

##### Exemplu:

``` javascript
let carte = { titlu: "JavaScript Avansat", autor: "Ion Popescu" };
let { titlu, autor } = carte;
console.log(titlu, autor);
```

#### Evitarea callback-urilor profund înlanțuite

Utilizează Promises și `async`/`await` pentru a evita callback-urile
profund înlanțuite, care pot face codul dificil de citit și de
întreținut.

#### Comentarii și documentație

Scrie comentarii clare și concise pentru a explica logica complexă și
utilizează instrumente de documentație, cum ar fi JSDoc, pentru a
descrie funcțiile și parametrii.

##### Exemplu:

``` javascript
/**
 * Calculează aria unui dreptunghi.
 * @param {number} latime - Lățimea dreptunghiului.
 * @param {number} inaltime - Înălțimea dreptunghiului.
 * @returns {number} Aria dreptunghiului.
 */
function calculeazaAria(latime, inaltime) {
    return latime * inaltime;
}
```

#### Structurarea și organizarea codului

Organizează codul în module și fișiere separate pentru a facilita
întreținerea și scalabilitatea proiectului. Utilizarea modulelor ES6
pentru a importa și exporta funcționalități este o practică recomandată.

#### Testare și Debugging

Scrie teste pentru codul tău folosind biblioteci precum Jest sau Mocha
pentru a asigura funcționalitatea corectă și pentru a facilita
debugging-ul.

Adoptarea acestor best practices și respectarea standardelor de codare
vor contribui la dezvoltarea unor aplicații web de înaltă calitate, ușor
de întreținut și scalabile.
