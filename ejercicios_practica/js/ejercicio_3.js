"use strict";

/* Inove Coding School
 * Ejercicios con funciones
 */

// Ejercicios con funciones

// function generarInvitados()

/*
Alumno: Crear la función "generarInvitados"
Esta función no recibe ningún paraḿetro de entrada

Dentro de esa función el sistema deberá solicitar
al usuario por prompt que ingrese tres nombres de 
tres invitados.

IMPORTANTE: Utilizar un "prompt" por cada invitado
que se solicite ingresar

Los tres nombres ingresados se deberán imprimir en consola
*/
function generarInvitados(){
    const nombre1= prompt("Ingrese Nombre y Apellido de su invitado");
    const nombre2= prompt("Ingrese Nombre y Apellido de su invitado");
    const nombre3= prompt("Ingrese Nombre y Apellido de su invitado");
    console.log("-Personas Invitadas-");
    console.log(nombre1);
    console.log(nombre2);
    console.log(nombre3);
}

// Definir y crear la función antes de esta llamada
generarInvitados();