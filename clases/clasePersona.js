//Clase personas
class Personas {
    constructor(nombre, apellido, edad, cedula) {
            this.nombre = nombre;
            this.apellido = apellido;
            this.edad = edad;
            this.cedula = cedula;
        }
        //Metodo de llamar los datos

    nombreCompleto() {
        console.log("Hola mi nombre es " + this.nombre + " mi edad es " + this.edad)
    }
}

// Crear una nueva persona
const newPeople = new Personas("Pedro ", "Ropero", 25, "123456789");

// Llamar datos de la perona con el metodo
newPeople.nombreCompleto()

module.exports = Personas