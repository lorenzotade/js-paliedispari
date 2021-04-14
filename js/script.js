
/* CHIAMATA PALINDROMA */
// chiedo all'utente di inserire una parola
var parolaUtente = prompt("Inserisci una parola");
// chiamo la funzione e passo come parametro la parola inserita dall'utente
palindroma(parolaUtente);

console.log("===================================");

/* CHIAMATA PARI E DISPARI */
var scelta = prompt("Scegli se 'pari' o 'dispari'");
var numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));
// chiamo la funzione e passo come parametri la scelta ed il numero inseriti dall'utente
pariDispari(scelta, numeroUtente);


/* SEZIONE FUNZIONI */

/* FUNZIONE PALINDROMA */
// scrivo una funzione che controlli se la parola è palindroma o meno
function palindroma(parola) {
  // dichiaro due variabili come stringhe vuote
  var primaMetà = "";
  var secondaMetà = "";
  // con un primo ciclo for scorro la prima metà della parola e la salvo in una variabile
  for (var i = 0; i < (parola.length / 2); i++) {
    primaMetà += parola[i];
  }
  // con un secondo ciclo for scorro la seconda metà della parola e la salvo in una variabile
  for (var j = (parola.length - 1); j > (parola.length / 2) - 1; j--) {
    secondaMetà += parola[j];
  }
  //console.log(primaMetà);
  //console.log(secondaMetà);

  // se la prima metà e la seconda metà sono uguali stampa a video che la parola è palindroma; altrimenti che non lo è
  if (primaMetà === secondaMetà) {
    console.log("La parola " + parola + " è palindroma.");
  } else {
    console.log("La parola " + parola + " non è palindroma.");
  }
}

/* FUNZIONE PARI O DISPARI */
// scrivo una funzione che giochi a pari o dispari
function pariDispari(sclt, num) {
  // stampo a video il numero scelto dall'utente
  console.log("Il tuo numero è: " + num);
  // genero un numero random tra 1 e 5 che sarà il numero del computer e lo stampo a video
  var numComputer = Math.floor(Math.random() * 5) + 1;
  console.log("Il numero del computer è: " + numComputer);
  
  // sommo il mio numero e quello del computer e lo stampo a video
  var somma = numComputer + num;
  console.log("La somma dei due numeri è: " + somma);

  // con uno switch case controllo se ho vinto e stampo a video il risultato
  switch (sclt) {
    case "pari":
      if (somma%2 === 0) {
        console.log("Hai vinto");
      } else {
        console.log("Hai perso");
      }
      break;
    case "dispari": 
      if (somma%2) {
        console.log("Hai vinto");
      } else {
        console.log("Hai perso");
      }
      break;
    default:
      console.log("Hai sbagliato a scrivere, durone");
  }
}