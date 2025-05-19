console .log ("biglietto del treno")

const COSTO_PER_KM = 0.21
const distanza = parseFloat(prompt ("Inserisci il numero di km da percorrere"))
console.log(distanza)
const eta = parseInt(prompt("inserisci l'eta del passeggero"))
console.log(eta)

const prezzoBase = distanza * COSTO_PER_KM
console.log(prezzoBase)

let sconto = 0

if(eta < 18) {
    sconto = 20 * prezzoBase / 100
} else if (eta > 65) {
    sconto = 40 * prezzoBase / 100
} else {
    sconto = 0
}

const prezzoFinale = prezzoBase - sconto

console.log(sconto)
console.log(prezzoFinale)