const placeholder = document.querySelector("#placeholder");

document.querySelector("#textInput").addEventListener("input", (event) => { // event care asculta orice schimbare de text
    let text = event.target.value;
    // console.log(event);
    placeholder.textContent = text === "" ? "" : "Your text is: " + text;
});

document.getElementById("showBtn").addEventListener("click", () => {
    // preiau datele din inputuri
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;
    let city = document.getElementById("city").value;

    if (name === "" || email == "" || age === "" || city === "") {
        alert("Please fill in all the inputs");
        return;
    }

    // creez un JSON cu datele obtinute si il adaug in localStorage
    localStorage.setItem("userDetails", JSON.stringify({ name, email, age, city }));

    // schimb pagina curenta
    window.location.href = "userDetails.html";

});


document.getElementById("parinte").addEventListener("click", () => {
    console.log("parinte");
});

document.getElementById("copil").addEventListener("click", (event) => {
    console.log("copil");
    event.stopPropagation(); // se opreste propargarea evenimentului
});