// ES6 = ECMA SCRIPT 6, nome ufficiale di javascript
// Una delle più ricche implementazioni del linguaggio è rappresentato dalla versione del 2015 di cui abbiamo già
// visto alcuni esempi

// Let e const
// Arrow functions
// Nuovi metodi degli array
// Spread operator
// Destructuring
// Rest parameters, default parameters
// Template literals e metodi addizionali sulle stringhe
// Classi
// Nuovi metodi della libreria Math
// Promises

// ES6  è stata una delle revisioni più importanti di JS, con implementazioni
// che usiamo ancora oggi

// VARIABILI
// nel linguaggio moderno di JS si usano
// let e const
// per dichiarare le variabili che hanno una visibilità di BLOCCO, ovvero non
// raggiungibili al di fuori del blocco in cui sono state dichiarate(delimitato da delle parentesi graffe). anche il foglio
// di script è un blocco detto globale quindi

// VARIABILE GLOBALE
let myNumber = 19 // visibilità globale perché non dichiarata all'interno di graffe

if (myNumber > 10) {
  myNumber = 50
  let anotherNumber = 0 // Visibilità solo all'interno del ciclo if
}

// anotherNumber = 100 // questa variabile che è stata dichiarata all'interno dell'if
// quindi non è raggingibili all'estern

// inoltre ES6 ha introdotto una maniera di dichiarare delle variabili NON riassegnabili: const

// FUNZIONI
// i modi di dichiarara una funzione in JS sono stadi DIVERSI negli anni:

// - metodo vecchio -> funzioni con nome che utlizzano la parola chiave function

function nomeDellaFunziona() {}
// Questo metodo è da evitare perché javascript porta questo tipo di funzione
// in testa alla pagina creando un problema di HOISTING. Facendo in modo che la
// funzione anche se viene richiesta prima della sua dichiarazione sul foglio di script
// creando casini

// - metodo moderno e corretto -> funzioni ANONIME dichiarate con la parola function
// questa volta assegnata ad una costante

const ciaoVar = function () {
  console.log(
    "Questo messaggio verra stampato solo dopo che la funzione è stata dichiarata e poi chiamata",
  )
}

ciaoVar() // <- richiamo della funzione

// Esiste un TERZO modo per dichiarare le funzioni in JS! e non richiede la parola function
// le ARROW FUNCTIONS (funzioni freccia)

const moltiplica = (n1) => {
  // le tonde sono sempre per richiamare il parametro della funzione
  // al posto della parola function si usa la FAT ARROW => (simbolo uguale + simbolo maggiore)
  // e poi si aprono le graffe in cui inserire cosa deve fare la funzione
  return n1 * 5
}

// INOLTRE:
// se una funzione freccia:
// - è monoriga
// - fa un return
// ---->  SI PUò ULTERIORMENTE ACCORCIARE! SI TOGLIE LA PAROLA RETURN E SI TOLGONO LE GRAFFE
const moltiplicaAccorciata = (n1) => n1 * 5

// altro esempio di arrow function completamente accoricata
const salutamiBrevemente = () => "Ciao Stefano"
// in questo caso equivale a:
const salutamiLungamente = function () {
  return "Ciao Stefano"
}

// i due tipi di dichiarazione non funzionano sempre allo stesso modo per esempio
// con le parole riservate "this" "super" che approfondiremo più avanti

// NB: nel caso usassimo una funzione freccia e volessimo solo ritornare il valore
// andrebbero omesse sia le graffe {} sia la parola "return" esempio

const numberOne = () => {
  32 //<--- non ritornerò il valore di 32 ma sarebbe visto come un blocco di codice
  // andrebbe comunque messa la parola "return"
}
