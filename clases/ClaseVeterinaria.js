//Clase Veterinaria
class Veterinaria {
    constructor(nombre, direccion, telefono) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
    }
    getNombreVeterinaria() {
        return this.nombre;
    }

    getDireccionVeterinaria() {
        return this.direccion;
    }

}
//Metodo de llamar los datos de la veterinaria
const veterinaria1 = new Veterinaria("Clínica Perros", "Calle Siempre viva, Ciudad Bogota", "555-17859");
console.log("Nombre y dirección de la veterinaria:", veterinaria1.getNombreVeterinaria(), "-", veterinaria1.getDireccionVeterinaria());