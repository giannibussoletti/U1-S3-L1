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
// ---->  SI PUÒ ULTERIORMENTE ACCORCIARE! SI TOGLIE LA PAROLA RETURN E SI TOLGONO LE GRAFFE
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

// NUOVO OPERATORE -> SPREAD OPERATOR --> ... (TRE PUNTI DI SPOSPENSIONE)
// serve ad effettuare una copia di proprietà o elementida una sorgente ad una destinazione

let a = 5
let b = a // b vale 5
a = 10
console.log(b) // b vale comunque 5 perché b non segue la vita di a ma prende il valore di a quando è stata dichiarata sopra di lui

// stesso esempio ma con entita COMPLESSE
let objA = { value: 5 }
let objB = objA

objA.value = 10
console.log(objB.value) // questo vale 10

// quando si tratta di dati PRIMITIVI (come a e b, che erano numeri) con l'operatore =
// JS crea una VERA COPIA della variabile
// quando però utilizziamo l'operatore = per creare una copia di un'entità COMPLESSA, JS non DUPLICA
// l'oggetto/array! crea semplicemente un nuovo "puntatore" per accedere alla stessa locazione di memoria
// quindi objB = objA non duplica ma semplicemente objB punta allo stesso punto di informazioni di objA,
//  quindi cambiare un valore in objA lo cambia automaticamente in objB perché puntano alla stessa memoria

// PER CREARE OBJA E OBJB IN MODO SEPARATO, SCOLLEGATO, NON POSSIAMO RICORRERE AD objB = objA (come avremmo fatto
// con variabili primitive)

// creiamo una VERA COPIA di entità complesse tramite lo SPREAD OPERATOR

const objectA = { value: 5 }
const objectB = { ...objectA } // ho creato un nuovo "guscio" con le graffe e ci ho trasportato
// dentro tutte le proprietà di objectA
// d'ora in poi LE PROPRIETÀ di objectB vivono di vita propria.

// sintassi alternativa allo spread operator per creare una VERA COPIA di objectA
// utilizzando il metodo -- > Object.assign({}, objectA)

// a questo punto posso modificare objectA SENZA condizionare il valore di objectB
objectA.value = 10
console.log(objectB.value) // 5

// ESEMPIO CON GLI ARRAY
const arrA = [5, 6, 7]
const arrB = [...arrA] // VERA COPIA

arrA.push(8) // la length di A ora è 4
console.log(arrB.length) // 3

// OBJECT DESTRUCTURING (destrutturazione degli oggetti)

const cantautore = {
  firstName: "Al",
  lastName: "Yankovich",
  age: 60,
}

// ora vogliamo salvare in variabili separate il nome, cognome, età di Al Bano
// const firstName = cantautore. firstName
// const lastName = cantautore.lastName
// const age = cantautore.age

// L'OBJECT DESTRUCTURING ci fornisce una scorciatoia
const { firstName, lastName, age } = cantautore
// questa scorciatoia crea direttamente delle variabili con il nome delle chiavi
// all'interno dell'oggetto andandole ad estrarre in una nuova variabile

// parliamo di stringhe ...
// in JS ci sono 2 delimitatori di stringhe:
const str1 = "ciaone!"

const str2 =
  "Si utilizzano entrambi quando in una stringa dovete inserire un apostrofo ... l'albero"

//però in realtà c'è un TERZO MODO: i BACKTICKS

const myFirstName = "Stefano"
const myLastName = "Casasola"

const message = "Il mio nome è " + myFirstName + " e il mio cognome è " + myLastName
// 'Il mio nome è Stefano e il mio cognome è Casasola'

const betterMessage = `Il mio nome è ${myFirstName}
e il mio cognome è ${myLastName}`

// I BACKTICKS `` PERMETTONO DI SPEZZARE UNA LINEA DI STRINGA ANDANDO ACCAPO
// il simbolo del dollaro $ permette invece ci richiamare la variabile in una stringa
// senza dover usare virgole o più +. e mi permette inoltre di usare virgolette "" e
// accenti '' come caratteri di string e non come apertura e chiusura di una frase

const aVeryLongText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
Nostrum praesentium deserunt consequatur ex ipsa, natus minus iste voluptatibus
+numquam, soluta asperiores vitae harum possimus expedita qui enim est quidem saepe.
Lorem ipsum dolor sit amet ${myLastName} consectetur adipisicing elit. Deserunt iste sunt fuga 
nisi odio. Quas animi necessitatibus expedita possimus, id maxime placeat ratione 
provident, corrupti enim laboriosam. Eum, eligendi sint. Lorem ipsum dolor sit amet, 
consectetur adipisicing elit. Molestiae ${myFirstName} laudantium repellendus voluptatibus minus
optio quaerat magnam rerum eaque corrupti reprehenderit`

// METODI DELLE STRINGHE

const unaStringa = "il JAVASCRIPT, è un bel linguaggio"

// come per gli array anche le stringe hanno una index che parte da 0
unaStringa.toUpperCase() // "IL JAVASCRIPT  È UN BEL LINGUAGGIO"
unaStringa.toLowerCase() // "il javascript è un bel linguaggio"
unaStringa.slice(0, 10) // prende i primi 10 caratteri della frase le proprietà all'interno delle parentesi
// sono il punto di partenza e il numero di caratteri da prendere
unaStringa.charAt(2) // prende il singolo carattere nella frase --> "I" tramite la sua index
unaStringa.split(" " /* "i" ","*/) // trasforma la stringa in un array usando i simboli dati
// come proprietà, in questo caso lo spazio, ma potrebbe essere
// anche una lettera o un simbolo speciale

// startsWith(), endsWith(), includes() sono metodi delle stringe
// che ritornano una valore booleano

const course = "EPICODE"
course.startsWith("EP") // true --> parte dall'inizio della stringa e controlla se ci sono tutti i caratteri
course.endsWith("DE") // true --> parte dalla fine della stringa e controlla se ci sono tutti i caratteri
course.startsWith("PICO") // false
console.includes("CO") // true --> controlla se il valore dato si trova all'interno della stringa

course.indexOf("E") // 0 --> è il contrario di .charAt  dando la posizione index
// in cui compare per la prima volta il carattere richiesto

// METODI DEGLI ARRAY
// Un array è una struttura dati complessa in JS che memorizza diversi elementi all'interno di una singola
// variabile; gli elementi (a differenza degli oggetti) NON sono "etichettati" con una chiave, ma il fattore
// che li differenzia è solamente la loro POSIZIONE all'interno dell'array: c'è il PRIMO elemento dell'array
// il SECONDO, il TERZO e così via. La loro posizione (detta INDICE o INDEX in inglese) parte da ZERO.

const myArrayOfBeautifulPets = ["tarantula", "salamander", "alligator", "furby"]
myArrayOfBeautifulPets.push("ralph") // aggiunge in coda all'array
myArray0fBeautifulPets.pop() // elimina l'ultimo elemento dell'array
myArrayOfBeautifulPets.unshift("cobra") // aggiunge in cima all'array
myArrayOfBeautifulPets.shift() // rimuove il primo elemento dell'array

// per aggiungere o rimuovere in mezzo all'array si utilizza SPLICE()
// per inserire un altro elemennto tra salamandra ed alligatore

myArrayOfBeautifulPets.splice(2, 0, "anaconda") // dalla posizione DUE dell'array, tolgo ZERO elementi, aggiungo "anaconda"
myArrayOfBeautifulPets.splice(2)
// il primo elemento di un array ha sempre indice 0
// l'ultimo esemento ha sempre lenght-1

// ci siamo resi conto scorsa settimana che il ciclo FOR è uno strumento PERFETTO per ESPLORARE gli ARRAY!
// se noi facciamo un FOR con una i che comincia da 0 e finisce PRIMA di raggiungere la length
// di una array, otteniamo SEMPRE una i che è un INDICE VALIDO per quell'array!

for (let i = 0; i < myArrayOfBeautifulPets.length; i++) {
  // la i varrà nelle varie iterazioni del for: 0 - 1 - 2 - 3
  // quindi è sempre un NUMERO, ma rappresenta anche un indice valido per un elemento di myArrayOfBeautifulPet
  console.log(i) // 0 - 1 - 2 - 3
  console.log(myArrayOfBeautifulPets[i]) // 'tarantula' - 'salamander' - 'alligator' - 'furby'
}

// NUOVI METODI DEGLI ARRAY, INTRODOTTI CON ES6
// forEach(), map(), filter(), reduce()
