const Personas = require("./clasePersona");

//Clase Animales 
class Animales {
    constructor(nombre, genero, raza) {
        this.nombre = nombre;
        this.genero = genero;
        this.raza = raza;
    }
    DatosMascota() {
        console.log("Mi perro es" + this.nombre + " Y es de la raza " + this.raza)
    }
}
// Crear un nuevo animal
const NewRegistre = new Animales("Tarzan", "Macho", "Pincher");

NewRegistre.DatosMascota()

module.exports = Animales