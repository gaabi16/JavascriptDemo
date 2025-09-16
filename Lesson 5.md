# Lecția 5

# AJAX și Fetch API în JavaScript

## Ce este un API?

Un **API (Application Programming Interface)** este o interfață care permite aplicațiilor să comunice între ele printr-un set de reguli și protocoale. API-urile sunt utilizate pentru a accesa servicii, date sau resurse externe.

### Tipuri de API-uri:
- **SOAP (Simple Object Access Protocol)** – Protocol bazat pe XML pentru schimbul de mesaje.
- **REST (Representational State Transfer)** – Stil arhitectural care folosește HTTP pentru a accesa resurse.
- **Local APIs** – Folosite pentru comunicarea între modulele unei aplicații.
- **Third-party APIs** – Oferite de servicii externe (ex: Google Maps API).
- **Web APIs** – Funcționalități oferite de browser (ex: Geolocation API, LocalStorage).

---

## AJAX și Fetch API

### Introducere în AJAX

**AJAX (Asynchronous JavaScript and XML)** este o tehnică ce permite aplicațiilor web să trimită și să primească date de la server fără a reîncărca întreaga pagină.

**Avantaje:**
- Experiență mai bună pentru utilizatori, întrucât actualizează pagina fără a o reîncărca.
- Trafic mai mic de rețea (datele sunt transferate).
- Posibilitatea de a crea aplicații web dinamice.

---

### Cereri asincrone cu XMLHttpRequest

`XMLHttpRequest` este un obiect folosit pentru a trimite și primi date de la server.

#### Exemplu GET cu XMLHttpRequest:
```javascript
let xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);
xhr.onload = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        let data = JSON.parse(xhr.responseText);
        console.log("Titlu articol:", data.title);
    }
};
xhr.send();
```

- `open(method, url, async)`: Configurează o cerere web specificând tipul (ex: "GET", "POST"), adresa la care o trimiți și dacă se va executa asincron (true) sau sincron (false).
- `onreadystatechange`: Este o funcție care se activează de fiecare dată când starea cererii se modifică. Aici se poate verifica progresul comunicării cu serverul.
- `readyState`: Indică stadiul cererii. Valoarea `4` înseamnă că cererea este completă.
- `status`: Codul de stare al răspunsului HTTP. Codul `200` indică succes.
- `responseText`: Conține textul răspunsului primit de la server. Este locul unde sunt găsite datele solicitate, odată ce s-a finalizat cererea.


#### Exemplu POST cu XMLHttpRequest:
```javascript
let xhr = new XMLHttpRequest();
xhr.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

xhr.onload = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        let data = JSON.parse(xhr.responseText);
        console.log("Articol creat:", data);
    }
};

let newPost = JSON.stringify({ title: "Articol nou", body: "Conținut test", userId: 1 });
xhr.send(newPost);
```

---

### Utilizarea Fetch API

**Fetch API** este o alternativă modernă la `XMLHttpRequest`, bazată pe *promises*.

#### Exemplu GET cu Fetch:
```javascript
fetch("https://jsonplaceholder.typicode.com/users/2")
    .then(response => {
        if (!response.ok) {
            throw new Error("Eroare rețea: " + response.statusText);
        }
        return response.json();
    })
    .then(user => {
        console.log("Nume utilizator:", user.name);
    })
    .catch(error => {
        console.error("Eroare fetch:", error);
    });
```

- `fetch(url)`: Inițializează o cerere către `url`.
- `then(response => { ... })`: Primește un obiect `Response`, care trebuie verificat pentru succesul cererii (`response.ok`) și transformat în formatul dorit (de obicei JSON).
- `catch(error => { ... })`: Prinde orice eroare care apare pe parcursul cererii.

#### Exemplu POST cu Fetch:
```javascript
fetch("https://jsonplaceholder.typicode.com/comments", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        postId: 1,
        name: "Comentariu test",
        email: "exemplu@email.com",
        body: "Acesta este un comentariu creat cu Fetch."
    })
})
.then(response => {
    if (!response.ok) {
        throw new Error("Eroare rețea: " + response.statusText);
    }
    return response.json();
})
.then(comment => {
    console.log("Comentariu adăugat:", comment);
})
.catch(error => {
    console.error("Eroare fetch:", error);
});
```

---

## Exemplu complet

Un exemplu simplu cu butoane care fac cereri GET și POST folosind **Fetch API** și afișează rezultatele pe pagină.

### HTML:
```html
<!DOCTYPE html>
<html lang="ro">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemplu Fetch API</title>
</head>
<body>
    <h1>Exemplu Fetch API</h1>
    <button id="loadUser">Obține utilizator</button>
    <button id="createComment">Creează comentariu</button>
    <pre id="output"></pre>

    <script src="app.js"></script>
</body>
</html>
```

### JavaScript (`app.js`):
```javascript
document.getElementById("loadUser").addEventListener("click", function() {
    fetch("https://jsonplaceholder.typicode.com/users/3")
        .then(response => response.json())
        .then(user => {
            document.getElementById("output").textContent =
                `Nume: ${user.name}
Email: ${user.email}`;
        })
        .catch(error => console.error("Eroare:", error));
});

document.getElementById("createComment").addEventListener("click", function() {
    fetch("https://jsonplaceholder.typicode.com/comments", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            postId: 2,
            name: "Test",
            email: "demo@site.com",
            body: "Acesta este un comentariu generat printr-o cerere POST."
        })
    })
    .then(response => response.json())
    .then(comment => {
        document.getElementById("output").textContent =
            `Comentariu creat cu ID: ${comment.id}
Conținut: ${comment.body}`;
    })
    .catch(error => console.error("Eroare:", error));
});
```

---

## Resursă video recomandată

[![Urmărește videoclipul](https://i.ytimg.com/vi/PoRJizFvM7s/hqdefault.jpg)](https://www.youtube.com/watch?v=PoRJizFvM7s)
