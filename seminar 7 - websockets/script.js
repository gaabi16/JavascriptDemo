let socket = new WebSocket("wss://ws.ifelse.io");

socket.onopen = () => {
    addMessage("Conexiune creata cu serverul public");
}

socket.onmessage = (response) => {
    addMessage("Server: " + response.data);
}

socket.onclose = () => {
    addMessage("Conexiune inchisa");
}

socket.onerror = (err) => {
    addMessage("Uita-te in consola");
    console.error("Eroare: " + err);
}

document.getElementById("sendBtn").addEventListener("click", () => {
    let input = document.getElementById("inputTxt");
    let text = input.value;
    if (text && socket.readyState === WebSocket.OPEN) {
        socket.send(text);
        addMessage("You: " + text);
        input.value = "";
    }
});

function addMessage(msg) {
    let li = document.createElement("li");
    li.textContent = msg;
    document.getElementById("messages").appendChild(li);
}

