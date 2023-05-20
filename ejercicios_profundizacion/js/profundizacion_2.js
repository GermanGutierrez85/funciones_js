"use strict";

/* Inove Coding School
 * Tarea! Ejercicios avanzados de condicionales.
 */

// Deben generar el enlace de este documento hacia index.html

// Práctica numérica
// Realice un programa que solicite el ingreso de tres números
// enteros, y luego en cada caso informe si el número es par
// o impar.
// Para cada caso imprimir el resultado en pantalla.
const numero1= prompt("Ingrese el primer numero");
const numero2= prompt("Ingrese el segundo numero");
const numero3= prompt("Ingrese el tercer numero");
if(numero1 % 2 == 0){
    alert("El primer numero es par");
}else{
    alert("El primer numero es impar");
}
if(numero2 % 2 == 0){
    alert("El segundo numero es par");
}else{
    alert("El segundo numero es impar");
}
if(numero3 % 2 == 0){
    alert("El tercer numero es par");
}else{
    alert("El tercer numero es impar");
}