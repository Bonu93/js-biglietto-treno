const km = parseFloat (prompt('Quanti chilometri devi percorrere?'));

const age = parseFloat (prompt('Quanti anni hai?'));

const price = (km * 0.21);

const underDiscount = ((price / 100) * 20)

const overDiscount = ((price / 100) * 40)

let ticket

if (age < 18) {
    ticket = (price - underDiscount)
} else if (age >= 65) {
    ticket = (price - overDiscount)
} else {
    ticket = price
}

document.getElementById('ticket').innerHTML = `Il tuo biglietto costa ${ticket.toFixed(2)}€`