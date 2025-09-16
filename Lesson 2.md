# Lecția 2

# Funcții, Obiecte și Arrays în JavaScript

## Funcții

### Definirea funcțiilor

O funcție este un bloc de cod reutilizabil care poate fi apelat de mai multe ori în program. Ea se definește folosind cuvântul-cheie `function`, urmat de un nume, o listă de parametri între paranteze și un corp delimitat de acolade.

Exemplu:
```javascript
function afiseazaSalut() {
    console.log("Bun venit!");
}

afiseazaSalut();
```

### Funcții cu parametri

Funcțiile pot primi date prin parametri, ceea ce le face mai flexibile.

Exemplu:
```javascript
function salutPersoana(nume) {
    console.log("Salut, " + nume + "!");
}

salutPersoana("Maria"); // Afișează "Salut, Maria!"
salutPersoana("Andrei"); // Afișează "Salut, Andrei!"
```

### Funcții cu valoare de retur

Funcțiile pot întoarce o valoare folosind `return`.

Exemplu:
```javascript
function inmulteste(a, b) {
    return a * b;
}

let rezultat = inmulteste(4, 6);
console.log(rezultat); // Afișează 24
```

### Funcții anonime și Arrow functions

O funcție anonimă nu are nume și este adesea atribuită unei variabile. Arrow functions sunt o sintaxă prescurtată introdusă în ES6.

Exemplu funcție anonimă:
```javascript
let mesaj = function(nume) {
    console.log("Bună ziua, " + nume + "!");
};

mesaj("Elena");
```

Exemplu arrow function:
```javascript
let mesaj = (nume) => {
    console.log("Bună ziua, " + nume + "!");
};

mesaj("Paul");
```

---

## Obiecte și Arrays

### Obiecte

Un obiect este o colecție de perechi cheie–valoare. Cheile sunt nume de proprietăți, iar valorile pot fi de orice tip.

Exemplu:
```javascript
let carte = {
    titlu: "JavaScript Basics",
    autor: "Anonim",
    afiseaza: function() {
        console.log("Cartea se numește " + this.titlu + " și este scrisă de " + this.autor);
    }
};

console.log(carte.titlu); // Afișează "JavaScript Basics"
console.log(carte.autor); // Afișează "Anonim"
carte.afiseaza(); // Afișează mesajul complet
```

### Arrays

Un array este o listă ordonată de valori, fiecare având un index numeric ce începe de la 0.

Exemplu:
```javascript
let culori = ["roșu", "verde", "albastru"];

console.log(culori[0]); // Afișează "roșu"
console.log(culori[2]); // Afișează "albastru"
```

### Metode și proprietăți

#### Metode ale obiectelor

Obiectele pot avea metode – funcții care le aparțin.

Exemplu:
```javascript
let student = {
    nume: "Ioana",
    an: 2,
    descriere: function() {
        return this.nume + " este în anul " + this.an;
    }
};

console.log(student.descriere()); // "Ioana este în anul 2"
```

#### Metode și proprietăți ale arrays

Arrays au multe metode utile pentru manipularea datelor.

Exemplu:
```javascript
let animale = ["pisică", "câine", "iepure"];

console.log(animale.length); // 3
animale.push("papagal"); // adaugă un element
console.log(animale); // ["pisică", "câine", "iepure", "papagal"]
animale.pop(); // elimină ultimul element
console.log(animale); // ["pisică", "câine", "iepure"]
```

### Iterarea prin arrays și obiecte

#### Iterare prin arrays

Cu un `for` clasic:
```javascript
let numere = [10, 20, 30];

for (let i = 0; i < numere.length; i++) {
    console.log(numere[i]);
}
```

Cu `forEach`:
```javascript
numere.forEach((valoare) => {
    console.log(valoare);
});
```

#### Iterare prin obiecte

Poți folosi bucla `for-in` pentru a parcurge proprietățile.

Exemplu:
```javascript
let produs = {
    denumire: "Laptop",
    pret: 2500,
    stoc: true
};

for (let cheie in produs) {
    console.log(cheie + ": " + produs[cheie]);
}
```

---

# 🎯 Exerciții practice

1. Creează o funcție care primește două numere și returnează suma lor.  
2. Scrie o funcție care primește un nume și returnează un mesaj personalizat.  
3. Creează un obiect `film` cu proprietăți (titlu, regizor, an) și o metodă care afișează descrierea filmului.  
4. Creează un array cu 5 orașe și parcurge-l afișând fiecare oraș.  
5. Adaugă și elimină elemente dintr-un array folosind `push` și `pop`.  
