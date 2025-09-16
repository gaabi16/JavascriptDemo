# Lecția 3

# Manipularea DOM (Document Object Model) în JavaScript

## Ce este DOM?

DOM-ul (Document Object Model) este o structură ierarhică ce reprezintă documentul HTML. Practic, browserul creează un "arbore" de noduri din pagină, iar prin JavaScript putem accesa și modifica aceste noduri pentru a schimba conținutul sau aspectul unei pagini web.

---

## Accesarea elementelor din DOM

Pentru a lucra cu un element HTML, trebuie mai întâi să îl selectăm. Există mai multe metode:

- **getElementById** – selectează un element după atributul `id`.
```javascript
let titlu = document.getElementById("titlu");
```

- **getElementsByClassName** – returnează o colecție de elemente cu aceeași clasă.
```javascript
let carduri = document.getElementsByClassName("card");
```

- **getElementsByTagName** – selectează toate elementele de un anumit tip (ex. `div`, `p`).
```javascript
let paragrafe = document.getElementsByTagName("p");
```

- **querySelector** – selectează primul element care respectă un selector CSS.
```javascript
let primulButon = document.querySelector("button");
```

- **querySelectorAll** – returnează toate elementele care respectă selectorul CSS.
```javascript
let toateButonele = document.querySelectorAll(".btn");
```

---

## Modificarea elementelor DOM

Odată accesat, un element poate fi modificat: text, HTML, stiluri sau clase.

- **Schimbarea textului**:
```javascript
let titlu = document.getElementById("titlu");
titlu.textContent = "Salut, JavaScript!";
```

- **Schimbarea HTML-ului intern**:
```javascript
titlu.innerHTML = "<em>Text italic</em>";
```

- **Schimbarea stilurilor**:
```javascript
titlu.style.color = "blue";
titlu.style.fontWeight = "bold";
```

- **Adăugarea și eliminarea claselor**:
```javascript
titlu.classList.add("important");
titlu.classList.remove("vechi");
```

---

## Evenimente în DOM

Evenimentele sunt acțiuni care au loc în pagină (click, tastă apăsată, trimiteri de formular etc.). Le putem intercepta folosind `addEventListener`.

- **Click**:
```javascript
let btn = document.getElementById("apasa");
btn.addEventListener("click", () => {
    alert("Ai apăsat butonul!");
});
```

- **Mouseover și mouseout**:
```javascript
let box = document.getElementById("box");
box.addEventListener("mouseover", () => {
    box.style.backgroundColor = "lightgreen";
});
box.addEventListener("mouseout", () => {
    box.style.backgroundColor = "";
});
```

- **Keydown**:
```javascript
document.addEventListener("keydown", (event) => {
    console.log("Tasta apăsată este: " + event.key);
});
```

- **Submit**:
```javascript
let formular = document.getElementById("formular");
formular.addEventListener("submit", (e) => {
    e.preventDefault(); // se previne trimiterea formularului
    alert("Formularul a fost trimis!");
});
```

---

## Manipularea atributelor și stilurilor

- **Setarea unui atribut**:
```javascript
let link = document.getElementById("siteLink");
link.setAttribute("href", "https://www.example.com");
```

- **Citirea unui atribut**:
```javascript
let href = link.getAttribute("href");
console.log(href);
```

- **Eliminarea unui atribut**:
```javascript
link.removeAttribute("target");
```

- **Modificarea directă a stilurilor**:
```javascript
link.style.textDecoration = "none";
link.style.color = "red";
```

---

## Exemplu complet

În acest exemplu avem un titlu, două butoane și un link. Prin JavaScript schimbăm textul titlului, îi aplicăm o clasă pentru a modifica stilul și actualizăm atributele link-ului.

### HTML
```html
<!DOCTYPE html>
<html lang="ro">
<head>
  <meta charset="UTF-8">
  <title>DOM Demo</title>
  <style>
    .highlight {
      background-color: blue;
    }
  </style>
</head>
<body>
  <h1 id="titlu">Bun venit!</h1>
  <button id="btnText">Schimbă textul</button>
  <button id="btnCuloare">Schimbă culoarea</button>
  <a id="siteLink" href="https://google.com">Mergi la Google</a>

  <script src="script.js"></script>
</body>
</html>
```

### JavaScript (`script.js`)
```javascript
let titlu = document.getElementById("titlu");
let btnText = document.getElementById("btnText");
let btnCuloare = document.getElementById("btnCuloare");
let link = document.getElementById("siteLink");

btnText.addEventListener("click", () => {
  titlu.textContent = "Textul a fost modificat!";
});

btnCuloare.addEventListener("click", () => {
  titlu.classList.toggle("highlight");
});

link.setAttribute("title", "Acesta este un link către Google");
```