# Lecția 4

# Evenimente în JavaScript

## Introducere

Evenimentele reprezintă acțiuni care apar într-o pagină web și la care limbajul JavaScript poate reacționa. Ele pot fi generate fie de utilizator (un click de mouse sau apăsarea unei taste), fie de browser (cum ar fi încărcarea completă a paginii).

## Adăugarea evenimentelor la elemente

Cea mai utilizată metodă pentru a adăuga un eveniment este metoda `addEventListener`. Aceasta leagă o funcție (numită *handler*) de un anumit tip de eveniment pentru un element din DOM.

### Exemplu simplu
```html
<button id="butonSalut">Click aici</button>

<script>
  const buton = document.getElementById("butonSalut");

  buton.addEventListener("click", () => {
    alert("Ai apăsat butonul!");
  });
</script>
```

În exemplul de mai sus, atunci când utilizatorul apasă butonul, se afișează o alertă.

## Handlere pentru evenimente

Funcțiile care se execută atunci când apare un eveniment se numesc **handlere**. Acestea primesc de obicei un obiect `event` care oferă informații suplimentare.

### Exemplu cu input text
```html
<input type="text" id="campText" placeholder="Scrie ceva...">
<p id="afisare"></p>

<script>
  const input = document.getElementById("campText");
  const afisare = document.getElementById("afisare");

  input.addEventListener("input", (event) => {
    afisare.textContent = "Ai introdus: " + event.target.value;
  });
</script>
```

Aici, pe măsură ce utilizatorul tastează, textul introdus apare imediat în paragraful de mai jos.

## Propagarea evenimentelor

Atunci când un eveniment are loc, el trece prin mai multe faze:  
- **Capturare** – evenimentul urcă de la rădăcina DOM până la elementul țintă.  
- **Bubbling** – după ce este procesat pe elementul țintă, urcă înapoi spre rădăcină.

Prin al treilea parametru al metodei `addEventListener` putem specifica dacă vrem să ascultăm evenimentul în faza de capturare (`true`) sau bubbling (`false`, valoarea implicită).

### Exemplu de propagare
```html
<div id="container" style="padding:30px; border:1px solid black;">
  Container
  <div id="cutie" style="padding:30px; border:1px solid blue;">
    Cutie
    <button id="buton">Apasă</button>
  </div>
</div>

<script>
  document.getElementById("container").addEventListener("click", () => {
    console.log("Click pe container");
  }, true); // faza de capturare

  document.getElementById("cutie").addEventListener("click", () => {
    console.log("Click pe cutie");
  }); // bubbling

  document.getElementById("buton").addEventListener("click", () => {
    console.log("Click pe buton");
  });
</script>
```

Când se apasă pe buton, mesajele sunt afișate în ordinea fazelor de propagare.

## Oprirea propagării

În unele situații, nu dorim ca evenimentul să se propage mai departe. Pentru asta folosim metoda `stopPropagation`.

### Exemplu
```html
<div id="parinte" style="padding:20px; border:1px solid red;">
  Părinte
  <div id="copil" style="padding:20px; border:1px solid green;">
    Copil
  </div>
</div>

<script>
  document.getElementById("parinte").addEventListener("click", () => {
    alert("Ai dat click pe părinte!");
  });

  document.getElementById("copil").addEventListener("click", (event) => {
    alert("Ai dat click pe copil!");
    event.stopPropagation(); // evenimentul nu mai ajunge la părinte
  });
</script>
```

Dacă apeși pe copil, se afișează doar alerta corespunzătoare lui, iar cea a părintelui nu mai apare.

## Custom events

[![Watch the video](https://img.youtube.com/vi/DzZXRvk3EGg/mqdefault.jpg)](https://www.youtube.com/watch?v=DzZXRvk3EGg)
