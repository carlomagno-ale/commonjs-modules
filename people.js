/*Importa la tua funzione da names.js
Importa la tua funzione da hobbies.js
Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con due proprietà: fullName ed hobbies. All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto. */

const createName = require('./names.js');
const hobbies = require('./hobbies.js');

/*console.log(createName('Name','Last name'))
console.log(hobbies('hobby1','hobby2','hobby3'))*/

function person() {
    return {
        fullName: createName('Name', 'Last name'),
        hobbies: hobbies('Hobby1', 'Hobby2', 'Hobby3')
    };
}

console.log(person());
