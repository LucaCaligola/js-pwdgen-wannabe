
const nome = ( prompt ("Scrivi il tuo nome"));
const cognome = ( prompt ("Scrivi il tuo cognome"));
const colore = ( prompt ("Scrivi il tuo colore preferito"));

const password = nome + cognome + colore;
console.log (password);

document.getElementById ('output').innerHTML= 'La tua password è: ' + password;