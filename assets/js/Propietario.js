export default class Propietario {
    constructor(nombre = "sin nombre", direccion = "sin dirección", telefono = 0) {
        this._nombre = () => nombre;
        this._direccion = () => direccion;
        this._telefono = () => telefono;
    }

    get nombre() {
        return this._nombre();
    }
    set nombre(new_name) {
        return (this._nombre = () => new_name);
    }

    get direccion() {
        return this._direccion();
    }
    set direccion(new_direccion) {
        return (this._direccion = () => new_direccion);
    }

    get telefono() {
        return this._telefono();
    }
    set telefono(new_telefono) {
        return (this._telefono = () => new_telefono);
    }

    datosPropietario() {
        return `El nombre del pripietario es: ${this.nombre},
        el domicilio es : ${this.direccion} y
        el número de telefónico de contacto: ${this.telefono}`;
    }
}