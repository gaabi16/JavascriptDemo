# Lecția 6

# Promises și Async/Await în JavaScript

## Promises și Async/Await

Gestionarea codului asincron este crucială pentru aplicații web moderne și responsive. **Promises** și **Async/Await** sunt două mecanisme importante pentru a lucra cu procese asincrone.

---

## Comunicarea sincronă

În comunicarea sincronă, un serviciu așteaptă un răspuns de la un alt serviciu înainte de a continua execuția. Acest lucru poate duce la întârzieri și blocări în aplicație, deoarece serviciile trebuie să aștepte unul pe celălalt pentru a finaliza operațiunile.

### Exemplu de comunicare sincronă:
```javascript
function serviciu1() {
    let rezultat = serviciu2();
    console.log(rezultat);
}

function serviciu2() {
    return "Rezultatul serviciului 2";
}

serviciu1();
```

**Avantaje:**
- Simplu de implementat și de înțeles.
- Util pentru operațiuni simple și secvențiale.
- Ușor de urmărit fluxul de execuție.

**Dezavantaje:**
- Poate duce la blocări și întârzieri în aplicație.
- Nu este scalabil pentru operațiuni complexe sau cu timp de răspuns mare.
- Poate duce la dependențe strânse între servicii.

---

## Comunicarea asincronă

În comunicarea asincronă, serviciile pot trimite și primi mesaje fără a aștepta un răspuns imediat. Acest lucru permite serviciilor să continue execuția fără a bloca sau aștepta alte servicii.

### Exemplu de comunicare asincronă:
```javascript
function serviciu1() {
    serviciu2((rezultat) => {
        console.log(rezultat);
    });
}

function serviciu2(callback) {
    setTimeout(() => {
        callback("Rezultatul serviciului 2");
    }, 2000); // Operațiunea durează 2 secunde
}

serviciu1();
```

**Avantaje:**
- Permite serviciilor să continue execuția fără a aștepta un răspuns imediat.
- Scalabil pentru operațiuni complexe sau cu timp de răspuns mare.
- Reduce blocările și întârzierile în aplicație.

**Dezavantaje:**
- Poate fi mai complex de implementat și de gestionat decât comunicarea sincronă.
- Necesită gestionarea mesajelor și a stării între servicii.
- Poate fi dificil de urmărit fluxul de execuție.

---
## Introducere în Promises

O **promisiune** (`Promise`) este un obiect care reprezintă rezultatul viitor al unei operațiuni asincrone. Ea poate fi:
- **Pending**: în așteptare
- **Fulfilled**: rezolvată cu succes
- **Rejected**: respinsă cu eroare

### Crearea unei Promises
```javascript
let promisiune = new Promise((resolve, reject) => {
    let random = Math.random();
    if (random > 0.5) {
        resolve("Operațiunea a reușit!");
    } else {
        reject("Operațiunea a eșuat!");
    }
});
```

### Utilizarea unei Promises
```javascript
promisiune
    .then(msg => console.log("Succes:", msg))
    .catch(err => console.error("Eroare:", err));
```

---

## Crearea și utilizarea Promises

Exemplu: simulăm descărcarea unui fișier printr-o funcție care returnează o promisiune care se rezolvă dupa 1,5 secunde.

```javascript
function descarcaFisier() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let ok = Math.random() > 0.3;
            if (ok) {
                resolve("Fișier descărcat cu succes!");
            } else {
                reject("Eroare la descărcarea fișierului.");
            }
        }, 1500);
    });
}

descarcaFisier()
    .then(raspuns => console.log(raspuns))
    .catch(err => console.error(err));
```

---

## Async/Await pentru gestionarea codului asincron

Cuvintele cheie `async` și `await` oferă o sintaxă mai simplă pentru a lucra cu promisiuniȘ `async` este folosit pentru a declara o funcție asincronă, iar `await` este folosit pentru a aștepta finalizarea unei promisiuni.

### Funcție asincronă simplă
```javascript
async function salut() {
    return "Salut dintr-o funcție async!";
}

salut().then(msg => console.log(msg));
```

### Utilizarea `await`
```javascript
async function executa() {
    try {
        let mesaj = await salut();
        console.log(mesaj);
    } catch (err) {
        console.error(err);
    }
}

executa();
```

---

## Exemplu complet cu Async/Await

Simulăm obținerea datelor unui utilizator de la server.

```javascript
function obtineUtilizator() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let ok = true; // operatiunea a avut succes
            if (ok) {
                resolve({ id: 1, nume: "Ana", email: "ana@example.com" });
            } else {
                reject("Nu s-au putut obține datele.");
            }
        }, 2000);
    });
}

async function afiseazaUtilizator() {
    try {
        let user = await obtineUtilizator();
        console.log(`Utilizator: ${user.nume}, Email: ${user.email}`);
    } catch (err) {
        console.error("Eroare:", err);
    }
}

afiseazaUtilizator();
```

---

## Compararea Promises cu Async/Await

- **Promises**: utile, modalitate clară de a gestiona operațiile asincrone, dar pot deveni greu de citit cu lanțuri lungi de `.then()`.
- **Async/Await**: mai ușor de citit și de înțeles întrucât face codul mai clar și mai apropiat de stilul sincron.

---

## Async/Await vs Promises

[![Watch the video](https://i.ytimg.com/vi/spvYqO_Kp9Q/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDpvKBPWjD-Jpj587DzvSkW42xxZQ)](https://youtu.be/spvYqO_Kp9Q?si=u0sOnEisSqWLz4An) 
