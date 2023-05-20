"use strict";

/* Inove Coding School
 * Tarea! Ejercicios básicos de condicionales.
 */

// Ejemplos variables de texto
// Comparadores
// Ingrese dos palabras cualesquiera y realice las sigueintes
// comparaciones entre ellas
const texto1 = prompt('Ingrese la primera palabra:');

const texto2 = prompt('Ingrese la segunda palabra:');

//  Compare cual de las dos palabras es mayor (alfabéticamente)
//  Imprima en pantalla según corresponda
if(texto1.length > texto2.length){
    console.log(texto1 + " es mayor a " + texto2);
}else{
    if(texto1.length < texto2.length){
    console.log(texto1 + " es menor a " + texto2);
}else{
    console.log(texto1 + " es igual a " + texto2);
}}

const copiaTexto1 = texto1  // Copia de la variable texto1

// Verifique que copiaTexto1 es igual a texto1
// Imprima en pantalla según corresponda
console.log(texto1 != copiaTexto1);

// Verifique que copiaTexto1 es distinta a texto2
// Imprima en pantalla según corresponda
console.log(texto2 === copiaTexto1);