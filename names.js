//Crea una funzione che accetta due parametri: firstName, lastName. La funzione dovrebbe restituire un oggetto con le proprietà firstName e lastName.

const createName = (firstName, lastName) => {
    return {
        firstName: firstName,
        lastName: lastName
    };
}

module.exports = createName;


