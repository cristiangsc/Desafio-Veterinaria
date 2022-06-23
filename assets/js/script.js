//import Propietario from "./Propietario.js";
//import Animal from "./Animal.js";
import Mascota from "./Mascota.js";



const mascota = new Mascota("Cristian", "Pasaje 2", 9620619113, "perro", "Clara", "Cardiopatía")
    // console.log(propietario.datosPropietario());
    // console.log(animal);
console.log(mascota);
console.log(mascota.datosPropietario());
console.log(mascota.tipo_animal());
console.log(mascota.nombreAnimal);
console.log(mascota.enfermedad);

const formulario = document.querySelector('form')

formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    const propietario = document.getElementById('propietario').value
    const telefono = document.getElementById("telefono").value;
    const direccion = document.getElementById("direccion").value;
    const nombreMascota = document.getElementById("nombreMascota").value;
    const tipo = document.getElementById("tipo").value;
    const enfermedad = document.getElementById("enfermedad").value;
    const mascota = new Mascota(propietario, direccion, telefono, tipo, nombreMascota, enfermedad)
    let li = document.createElement("li");
    let li2 = document.createElement("li");
    document.querySelector("#resultado ul").appendChild(li).innerHTML = mascota.datosPropietario()
    document.querySelector("#resultado ul").appendChild(li2).innerHTML = `${mascota.tipo_animal()}, mienstras que el nombre de la mascota es: ${mascota.nombreAnimal} y la enfermedad es: ${mascota.enfermedad} .`
    limpiar()
})

const limpiar = () => {
    document.getElementById("propietario").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("direccion").value = "";
    document.getElementById("nombreMascota").value = "";
    document.getElementById("tipo").value = "";
    document.getElementById("enfermedad").value = "";
}