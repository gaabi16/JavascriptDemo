// function serviciu1() {
//     let rezultat = serviciu2();
//     console.log(rezultat);
// }

// function serviciu2() {
//     return "Rezultatul serviciului 2";
// }

// serviciu1();

// function serviciu3() {
//     serviciu4((rezultat) => {
//         console.log(rezultat);
//     });
//     console.log("Am continuat executia serviciului 3");
// }

// function serviciu4(callback) {
//     setTimeout(() => {
//         callback("Rezultatul serviciului 4");
//     }, 2000); // Operațiunea durează 2 secunde
// }

// serviciu3();




// let p = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Succes"), 1000);
// });

// p.then(result => console.log(result));

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => reject("eroare"), 1000);
// });

// promise.then(result => console.log(result))
//         .catch(err => console.log(err));

// let promisiune = new Promise((resolve, reject) => {
//     let random = Math.random();
//     if (random > 0.5) {
//         resolve("Operațiunea a reușit!");
//     } else {
//         reject("Operațiunea a eșuat!");
//     }
// });

// promisiune
//     .then(result => console.log(result))
//     .catch(err => console.error(err));


setTimeout(() => {
    console.log("Primul mesaj");
    setTimeout(() => {
        console.log("Al doilea mesaj");
        setTimeout(() => {
            console.log("Al treilea mesaj");
        }, 1000);
    }, 1000);
}, 1000);

function delay(miliseconds) {
    return new Promise(resolve => setTimeout(resolve, miliseconds));
}

async function steps() {
    await delay(1000);
    console.log("Primul mesaj");

    await delay(1000);
    console.log("Al doilea mesaj");

    await delay(1000);
    console.log("Al treilea mesaj");
}