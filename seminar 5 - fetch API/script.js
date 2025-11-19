fetch("https://jsonplaceholder.typicode.com/users/10")
    .then(response => response.json())
    .then(user => console.log("User: ", user))
    .catch(error => console.error(error))
    .finally(() => console.log("get finalizat"));


document.getElementById("trimite").addEventListener("click", () => {

    let titlu = document.getElementById("titlu").value;

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: titlu, body: "test", userId: 7, ceva: "ceva" })
    })
    .then(response => response.json())
    .then(post => {
        document.getElementById("raspuns").textContent = "Postare creata";
        console.log("Postare: ", post);
    });
});
    