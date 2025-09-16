# Lecția 1

# Introducere în JavaScript

## Ce este JavaScript?

JavaScript este un limbaj de programare de nivel înalt, interpretat, folosit în principal pentru dezvoltarea web. Este unul dintre limbajele fundamentale ale web-ului, alături de **HTML** și **CSS**.  
Cu ajutorul său putem crea pagini web **interactive** și **dinamice**: manipularea DOM-ului, gestionarea evenimentelor, apeluri asincrone și lucrul cu API-uri.

### Caracteristici principale:
- **Interpretat**: rulează direct în browser, fără compilare.
- **Dinamic**: variabilele își pot schimba tipul la runtime.
- **Event-driven**: reacționează la acțiuni precum click, tastare, hover.
- **Multiplatformă**: funcționează pe orice device cu browser modern.

---

## Istoria și evoluția JavaScript

- **1995** – Creat de Brendan Eich (inițial Mocha → LiveScript → JavaScript).  
- **1997** – Standardizat de ECMA ca **ECMAScript**.  
- **2009** – ECMAScript 5 (ES5) → strict mode, metode array moderne.  
- **2015** – ECMAScript 6 (ES6/ES2015) → `let`, `const`, arrow functions, clase, template literals.  
- **2016–prezent** – Actualizări anuale: async/await, module, obiecte și funcționalități noi.  

---

## Setarea mediului de dezvoltare

Pentru a începe să scrii și să rulezi JavaScript ai nevoie de:

1. **Editor de text**:  
   - Recomandat: Visual Studio Code (dar merg și Sublime, Atom).  
2. **Browser modern**:  
   - Chrome, Firefox, Edge, Safari.  
3. **Structura de bază** a unui fișier HTML care include un script:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My first script</title>
</head>
<body>
  <h1>Hello, World!</h1>
  <script src="script.js"></script>
</body>
</html>
```

Creează fișierul **`script.js`** în același director și adaugă cod JavaScript în el.

---

## Primul script JavaScript

Fișier-ul `script.js` va afișa un mesaj în consola browser-ului:

```javascript
console.log("Hello, World!");
```

### Cum verifici?
1. Deschide `index.html` în browser.  
2. Apasă `F12` sau `Ctrl+Shift+I` → tab-ul **Console**.  
3. Vei vedea mesajul *Hello, World!*.

**Explicație**: `console.log()` afișează mesaje în consola browserului – foarte util pentru debugging.

---

# Elemente de bază ale JavaScript

## Sintaxă de bază

- **Declarații**: instrucțiuni care se execută secvențial.  
- **Comentarii**:  
  - `// comentariu pe o linie`  
  - `/* comentariu pe mai multe linii */`  
- **Case sensitive**: `nume` ≠ `Nume`.

Exemplu:
```javascript
// Variabilă și comentariu
var mesaj = "Salut, lume!";
console.log(mesaj);
```

---

## Tipuri de date

JavaScript suportă mai multe tipuri de date primitive:

- **String**: `"Hello"` sau `'Hello'`
- **Number**: `42`, `3.14`
- **Boolean**: `true`, `false`
- **Undefined**: variabilă declarată fără valoare
- **Null**: absență intenționată a unei valori
- **Symbol**: tip unic (introdus în ES6)
- **Object**: colecție de chei–valori

```javascript
let nume = "Charles";    // String
let varsta = 50;      // Number
let esteStudent = true; // Boolean
let necunoscut;       // Undefined
let nothing = null;     // Null
```

---

## Variabile și operatori

Variabilele sunt utilizate pentru a stoca date pe care le putem folosi și modifica pe parcursul programului.

Operatorii sunt simboluri care efectuează operațiuni asupra variabilelor și valorilor.

### Declararea și inițializarea variabilelor
- `var` → vizibil la nivel de funcție.
- `let` → vizibil doar în bloc (`{ }`), recomandat pentru variabilele care pot fi reasignate.  
- `const` → valoare constantă (nu se poate reasigna).

```javascript
var nume = "Janet";
let varsta = 25;
const number = 3;

var nume = "Jane"; // Este permis
number = 7; // Eroare: Assignment to constant variable
```

### Operatori aritmetici

- **Adunare (+)**: `a + b`
- **Scădere (-)**: `a - b`
- **Înmulțire (*)**: `a * b`
- **Împărțire (/)**: `a / b`
- **Modul (%)**: `a % b`
- **Exponentiere (**)**: `a ** b`

Exemplu:
```javascript
let x = 10, y = 3;
console.log(x + y); // 13
console.log(x - y); // 7
console.log(x * y); // 30
console.log(x / y); // 3
console.log(x % y); // 1
console.log(x ** y); // 1000
```

### Operatori de atribuire

- **Atribuire simplă (=)**: `x = y`
- **Atribuire cu adunare (+=)**: `x += y` (echivalent cu `x = x + y`)
- **Atribuire cu scădere (-=)**: `x -= y`
- **Atribuire cu înmulțire (*=)**: `x *= y`
- **Atribuire cu împărțire (/=)**: `x /= y`

### Operatori de comparare

- **Egalitate (==)**: `x == y`
- **Egalitate strictă (===)**: `x === y`
- **Diferență (!=)**: `x != y`
- **Diferență strictă (!==)**: `x !== y`
- **Mai mare (>)**: `x > y`
- **Mai mic (<)**: `x < y`
- **Mai mare sau egal (>=)**: `x >= y`
- **Mai mic sau egal (<=)**: `x <= y`

Exemplu:
```javascript
console.log(10 == "10");   // true
console.log(10 === "10");  // false
console.log(10 > 3);     // true
```

---

## Structuri de control

### If-Else
```javascript
let varsta = 18;

if (varsta >= 18) {
  console.log("Ești adult.");
} else {
  console.log("Ești minor.");
}
```

### 4.2. Else-If

Instrucțiunea `else if` adaugă condiții suplimentare.

Exemplu:
```javascript
let scor = 75;

if (scor >= 90) {
    console.log("Nota: Foarte Bine");
} else if (scor >= 80) {
    console.log("Nota: Bine");
} else if (scor >= 65) {
    console.log("Nota: Suficient);
} else {
    console.log("Nota: Insuficient");
}
```

### Switch
```javascript
let zi = 3;
switch (zi) {
  case 1:
      console.log("Luni");
      break;
  case 2:
      console.log("Marți");
      break;
  case 3:
      console.log("Miercuri");
      break;
  default:
      console.log("Zi invalidă");
}
```

### Bucla For
```javascript
for (let i = 0; i < 5; i++) {
  console.log("Numărul este " + i);
}
```

### Bucla While
```javascript
let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}
```

### Bucla Do-While
```javascript
let j = 0;
do {
  console.log(j);
  j++;
} while (j < 3);
```

---

# Exerciții practice

1. Creează un fișier `script.js` și afișează în consolă numele tău.  
2. Declară o variabilă pentru anul curent și calculează vârsta ta.  
3. Folosește o buclă `for` pentru a afișa numerele pare de la 1 la 10.  
4. Scrie un program care verifică dacă un număr este palindrom.  
5. Creează un `switch` care afișează ziua săptămânii în funcție de un număr 1–7.  
