import Propietario from "./Propietario.js"

export default class Animal extends Propietario {
    constructor(nombre, direccion, telefono, tipo = "") {
        super(nombre, direccion, telefono);
        this._tipo = () => tipo;
    }

    get tipo() {
        return this._tipo();
    }

    set tipo(new_tipo) {
        return this._tipo = () => new_tipo;
    }

    tipo_animal() {
        return `El tipo de animal es un: ${this.tipo}`;
    }
}