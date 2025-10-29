let title = document.getElementById("title");

console.log(title);

title.textContent = "Changed the text!";
title.style.textAlign = "right";
title.style.border = "3px dashed green";
title.style.backgroundColor = "white";

let containers = document.querySelectorAll(".container");

let colors = ["green", "yellow", "aqua"];


for (let i = 0; i < containers.length; i++) {
    containers[i].style.backgroundColor = colors[i];
    containers[i].style.textAlign = "center";
}

let rdnDiv = document.querySelector("#rdn-div");

rdnDiv.addEventListener("click", () => {
    rdnDiv.textContent = `Generated a number: ${Math.floor(Math.random() * 100)}`;
    rdnDiv.classList.toggle("tgl");
})

rdnDiv.addEventListener("mouseover", () => {
    rdnDiv.style.backgroundColor = "pink"; 
})

rdnDiv.addEventListener("mouseout", () => {
    rdnDiv.style.backgroundColor = "aquamarine";
})