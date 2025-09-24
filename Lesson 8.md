# Lecția 8

## WebSockets

### Introducere

**WebSocket** este un protocol de comunicare care oferă un canal bidirecțional de comunicare și full-duplex între client (de obicei un browser) 
și server, peste o singură conexiune TCP. 

Spre deosebire de HTTP, unde clientul trebuie să facă cereri repetate pentru 
a obține date noi, WebSocket permite serverului să trimită date către client 
imediat ce acestea sunt disponibile, făcându-l ideal pentru aplicații în timp real.

### Caracteristici cheie

- **Comunicare bidirecțională**: atât clientul cât și serverul pot trimite 
  date oricând.
- **Persistența conexiunii**: o singură conexiune TCP deschisă este folosită 
  pentru întreaga sesiune.
- **Eficiență**: overhead-ul este mult mai mic decât în cazul cererilor HTTP repetate.
- **Evenimente în timp real**: ideal pentru aplicații precum chat-uri, jocuri 
  multiplayer, monitorizare live sau streaming.

### Crearea unei conexiuni WebSocket în JavaScript

Pentru a crea o conexiune WebSocket, se utilizează obiectul `WebSocket` 
din JavaScript.

#### Exemplu de client WebSocket:

```javascript
let socket = new WebSocket("ws://localhost:8080");

socket.onopen = function(event) {
    console.log("Conexiune deschisă!");
    socket.send("Salut, server!");
};

socket.onmessage = function(event) {
    console.log("Mesaj primit de la server:", event.data);
};

socket.onclose = function(event) {
    console.log("Conexiune închisă.");
};

socket.onerror = function(error) {
    console.error("Eroare WebSocket:", error);
};
```

### Implementarea unui server WebSocket

Pentru server, se pot folosi diverse limbaje și biblioteci. În Node.js, 
biblioteca `ws` este una dintre cele mai populare.

#### Exemplu simplu de server WebSocket (Node.js):

```javascript
const WebSocket = require("ws");
const server = new WebSocket.Server({ port: 8080 });

server.on("connection", socket => {
    console.log("Client conectat.");

    socket.on("message", message => {
        console.log("Mesaj de la client:", message);
        socket.send("Am primit mesajul: " + message);
    });

    socket.on("close", () => {
        console.log("Client deconectat.");
    });
});
```

### Exemple de utilizare a WebSockets

- **Aplicații de chat**: utilizatorii pot trimite și primi mesaje instantaneu.
- **Jocuri online multiplayer**: schimb de date rapid între clienți și server.
- **Dashboard-uri și monitorizare live**: actualizare instantanee a datelor.
- **Streaming de date financiare**: actualizarea cotațiilor bursiere în timp real.

### Compararea WebSockets cu alte tehnologii

| Tehnologie         | Caracteristici principale |
|---------------------|---------------------------|
| **HTTP Polling**    | Clientul întreabă serverul periodic → overhead mare |
| **Long Polling**    | Serverul menține conexiunea deschisă până are date noi |
| **SSE (Server-Sent Events)** | Unidirecțional (doar server → client) |
| **WebSocket**       | Bidirecțional, eficient, persistent |

### Best Practices pentru WebSockets

1. **Gestionarea reconectării** – dacă conexiunea se pierde, implementează 
   o logică de reconectare automată.
2. **Heartbeat/Ping-Pong** – trimite mesaje periodice pentru a menține 
   conexiunea activă.
3. **Securitate (WSS)** – folosește `wss://` în loc de `ws://` pentru a cripta 
   conexiunea (similar cu HTTPS).
4. **Scalabilitate** – folosește load balancers și sisteme de mesagerie 
   (ex: Redis, Kafka) pentru aplicații mari.
5. **Limitarea mesajelor** – verifică și validează mesajele primite pentru a evita 
   atacurile prin payload-uri mari sau nevalide.

### Exemplu cu reconectare automată

```javascript
function creeazaConexiune() {
    let socket = new WebSocket("ws://localhost:8080");

    socket.onopen = () => console.log("Conectat.");
    socket.onclose = () => {
        console.log("Deconectat. Reconectare...");
        setTimeout(creeazaConexiune, 2000); // încearcă din nou după 2 secunde
    };
    socket.onmessage = event => console.log("Mesaj:", event.data);
}

creeazaConexiune();
```

### Concluzie

WebSocket este o tehnologie puternică pentru aplicațiile în timp real, 
oferind comunicare bidirecțională, eficiență și scalabilitate. Folosit 
corect, poate îmbunătăți semnificativ experiența utilizatorilor în aplicații 
moderne precum chat-uri, jocuri online și dashboard-uri dinamice.

### Create a WebSocket using Node.js

[![Watch the video](https://img.youtube.com/vi/FduLSXEHLng/mqdefault.jpg)](https://www.youtube.com/watch?v=FduLSXEHLng)

