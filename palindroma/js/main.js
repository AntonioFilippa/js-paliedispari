'use strict';

function isPalindroma(parola) {
    
    // RIMUOVO GLI SPAZI E FACCIO MINUSCOLO
    parola = parola.trim().toLowerCase();
  
    // GIRO LA STRINGA
    const parolaInvertita = parola.split('').reverse().join('');

    // COMPARO LE DUE PAROLE
    return parola === parolaInvertita;
  }

  
 // Ciclo per ripetere l'input in caso di errore
while (true) {
    // Richiesta di input all'utente
    const parolaUtente = prompt('Inserisci una parola (o scrivi "esci" per terminare): ');
  
    // Controllo per terminare il programma
    if (parolaUtente.toLowerCase() === 'esci') {
      break;
    }
  
// Controllo se è vuoto o un numero
if (parolaUtente === '') {
    alert('Errore: non hai inserito nessuna parola.');
    console.log('Errore: l\'input è vuoto.');
  } else if (!isNaN(parseInt(parolaUtente))) {
    alert('Errore: non puoi inserire un numero.');
    console.log('Errore: l\'input deve essere una parola.');
  }else {
    // Se non è vuoto e non è un numero, verifica se è palindroma
    if (isPalindroma(parolaUtente)) {
      alert('La parola è un palindromo!');
      console.log(`${parolaUtente} è un palindromo!`);
    } else {
      alert('La parola non è un palindromo.');
      console.log(`${parolaUtente} non è un palindromo.`);
    }
  }
}