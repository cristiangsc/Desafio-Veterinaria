import Animal from "./Animal.js";

export default class Mascota extends Animal {
    constructor(nombre, direccion, telefono, tipo, nombreAnimal = "", enfermedad = "sin antecedentes") {
        super(nombre, direccion, telefono, tipo);
        this._nombreAnimal = () => nombreAnimal;
        this._enfermedad = () => enfermedad;
    }

    get nombreAnimal() {
        return this._nombreAnimal();
    }
    set nombreAnimal(new_name) {
        return (this._nombreAnimal = () => new_name);
    }

    get enfermedad() {
        return this._enfermedad();
    }
    set enfermedad(new_enfermedad) {
        return (this._enfermedad = () => new_enfermedad);
    }
}