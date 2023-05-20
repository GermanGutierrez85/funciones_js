'use strict';

/* Inove Coding School
 * Ejemplos de código de clase.
 * Condicionales.
 */

// Ejemplo de condicional "if"

let numero = 20;

if (numero > 10) {

    console.log("El numero " + numero + " es mayor a 10");

}

// Ejemplo de condicional "if..else"

let tengoDinero = false;

console.log("Entramos al supermercado y seleccionamos los productos");

if (tengoDinero === true) {
    // Acá entra si tengoDinero es igual a true
    console.log("Se abona con efectivo la compra");
} else {
    // Acá entra si tengoDinero no es true
    console.log("La compra se abona con tarjeta");
}

console.log("Salimos del supermercado con nuestros productos");

// Ejemplo de condicional "if..else" anidado

let tarjeta = true;
let dinero = false;

console.log("Entramos al supermercado y seleccionamos los productos");

if (dinero === true) {
    // Acá entra si el dinero es igual a true
    console.log("Se abona con efectivo la compra");
} else {
    // Acá entra si el dinero no es true
    if (tarjeta === true) {
        // Acá entra si tenemos la tarjeta
        console.log("La compra se abona con tarjeta");
    } else {
        // Acá entra si NO tenemos la tarjeta
        console.log("No se puede realizar la compra");
    }
}
console.log("Salimos del supermercado");
