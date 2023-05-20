"use strict";

/* Inove Coding School
 * Tarea! Ejercicios avanzados de condicionales.
 */

// Deben generar el enlace de este documento hacia index.html

// Ejercicios de práctica numérica
// Realice un programa que solicite por propmt 2 números
// Calcule la diferencia entre ellos e informe por pantalla
// si el resultado es positivo, negativo o cero.
const numero1= prompt("Ingrese el primer numero");
const numero2= prompt("Ingrese el segundo numero");
let resultado= parseInt(numero1 - numero2);
if(resultado > 0){
    alert("Positivo");
}else{
    if(resultado < 0){
        alert("Negativo");
    }else{
        alert("Cero");
    }
}