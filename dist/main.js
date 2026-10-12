"use strict";
const sachovnica = document.getElementById("sachovnica");
if (sachovnica === null) {
    throw new Error("Kontajner sachovnice nebol najdeny.");
}
for (let riadok = 0; riadok < 8; riadok++) {
    for (let stlpec = 0; stlpec < 8; stlpec++) {
        const policko = document.createElement("div");
        policko.classList.add("policko");
        if ((riadok + stlpec) % 2 === 0) {
            policko.classList.add("biele");
        }
        else {
            policko.classList.add("cierne");
        }
        sachovnica.appendChild(policko);
    }
}
