// 1. chiedi all’utente il cognome, con un promot
// 2. inseriscilo in un array dove sono presenti già altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
// 3. stampa la lista ordinata alfabeticamente, sicuramente con una funzione
// 4. scrivi anche la posizione “umana” (partendo da 1) della lista in cui il nuovo utente si trova

var elementDiv = document.getElementsByClassName('risultato');
var outPut = elementDiv[0];

var listaNomi = ['bianchi', 'neri', 'rossi', 'verdi', 'gialli','ciano'];
var nome = prompt('Inserisci il tuo cognome ');

listaNomi.push(nome);
listaNomi.sort();
outPut.innerHTML= listaNomi ;

// posizione
for (var x = 1; x < listaNomi.length; x++) ; {
    console.log(listaNomi[0]);
    var position = listaNomi.indexOf(nome) + 1;
    outPut.innerHTML += '<br>' + 'posizione del nome è ' + position; 
}



// -------------------------------------------------------------------------


// var elementDiv = document.getElementsByClassName('risultato');
// var outPut = elementDiv[0];

// var listaNomi = ['bianchi', 'neri', 'rossi', 'verdi', 'gialli','ciano'];

// var nomeUtente = prompt('Inserisci il tuo nome');

// console.log(listaNomi);
// console.log(nomeUtente);

// listaNomi.push(nomeUtente);
// listaNomi.sort();
// outPut.innerHTML = listaNomi;

// for (var n = 0; n < listaNomi.length; n++) {
//     if (listaNomi[n] === n) {
//         var cognome = nomeUtente;
//         listaNomi.indexOf(cognome);
//         outPut.innerHTML += cognome;
//     }
// }