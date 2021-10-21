const km = parseFloat (prompt('Quanti chilometri devi percorrere?'));

const age = parseFloat (prompt('Quanti anni hai?'));

const price = (km * 0.21);

let discount;

if (age < 18) {
    discount = ((price /100) * 20)
} else if (age >= 65) {
    discount = ((price /100) * 40)
} else  {
    discount = 0
}

let ticket = price - discount;

if (isNaN(ticket)) {
    alert('Ricaricare la pagina, sono ammessi soltanto valori numerici')
}

document.getElementById('ticket').innerHTML = `Il tuo biglietto costa ${ticket.toFixed(2)}€`