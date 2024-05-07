function isPari(numero) {
    // Controlla se un numero è pari usando il modulo`%`
    return numero % 2 === 0;
  }

  // Inizio del gioco
  while (true) {
    // Richiesta scelta utente (pari o dispari)
    const sceltaUtente = prompt("Scegli pari o dispari: ").toLowerCase();
    console.log (`Hai scelto ${sceltaUtente}` )
    // Controllo validità scelta utente
    if (sceltaUtente !== "pari" && sceltaUtente !== "dispari") {
      console.error("Scelta non valida. Inserisci 'pari' o 'dispari'.");
      continue;
      
    }
  // Richiesta numero utente da 1 a 5
  let numeroUtente;
  do {
    numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5: "));
  } while (isNaN(numeroUtente) || numeroUtente < 1 || numeroUtente > 5);
  console.log(`Numero utente: ${numeroUtente}`);

  // Generazione numero casuale computer
  const numeroComputer = Math.floor(Math.random() * 5) + 1; // Numero casuale da 1 a 5
  console.log(`Numero computer: ${numeroComputer}`);

 // Calcolo somma
const somma = numeroUtente + numeroComputer;
console.log(`Somma: ${somma}`);

// Determina se la somma è pari o dispari usando
const risultato = isPari(somma) ? "pari" : "dispari";
console.log(`La somma è ${risultato}`);

// Verifica se l'utente ha vinto
if (risultato === sceltaUtente) {
  console.log("Hai vinto!");
} else {
  console.log("Hai perso!");
}

  // Richiesta per giocare di nuovo
  if (!confirm("Vuoi giocare di nuovo?")) {
    break;
  }
}

console.log("Grazie per aver giocato!");