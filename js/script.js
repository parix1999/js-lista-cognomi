// 1. chiedi all’utente il cognome, con un promot
// 2. inseriscilo in un array dove sono presenti già altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
// 3. stampa la lista ordinata alfabeticamente, sicuramente con una funzione
// 4. scrivi anche la posizione “umana” (partendo da 1) della lista in cui il nuovo utente si trova



var elementDiv = document.getElementsByClassName('risultato');
var outPut = elementDiv[0];

var listaNomi = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli','Ciano'];

for (var n = 0; n < listaNomi.length; n++) ; {
    var nome = prompt('Inserisci il tuo nome nella lista');
    listaNomi.push(nome);
    listaNomi.sort();
    console.log(listaNomi[0]);
}
outPut.innerHTML += listaNomi;

for (var x = 1; x < listaNomi.length; x++) ; {
    console.log(listaNomi[1]);
    outPut.innerHTML += '<br>' + 'il nome è ' + listaNomi[nome];
}