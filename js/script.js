// 1. chiedi all’utente il cognome, con un promot
// 2. inseriscilo in un array dove sono presenti già altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
// 3. stampa la lista ordinata alfabeticamente, sicuramente con una funzione
// 4. scrivi anche la posizione “umana” (partendo da 1) della lista in cui il nuovo utente si trova

var nome = prompt('Inserisci il tuo nome nella lista');

var listaNomi = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli','Ciano'];

for (var n = 0; n < listaNomi.length; n++) ; {
    listaNomi.push(nome);
    listaNomi.sort();
    console.log(listaNomi);
}
