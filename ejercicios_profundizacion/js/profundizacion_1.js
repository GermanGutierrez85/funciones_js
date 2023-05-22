/**
 * @fileoverview Ejercitación de Funciones
 * @author       Inove coding School <alumnos@inove.com.ar>
 * @copyright    www.inove.com.ar
 *
 * Consignas:
 * Deberá enlazar este archivo javascript al documento HTML.
 * Del ejercicio visto en clase, realizar los cambios necesarios para que el sistema
 * admita:
 * 
 * 1. En la función promedio():
 *    Debe recibir 5 números como argumento y calcular el promedio.  Debe reportar por
 *    medio de alert(); y console.log(); el detalle de los datos recibidos.
*/
'use strict';
/**
 * Esta funcion solicita 5 valores numericos a eleccion y calcula el promedio.
 * @param {Number} a Valor numerico
 * @param {Number} b Valor numerico
 * @param {Number} c Valor numerico
 * @param {Number} d Valor numerico
 * @param {Number} e Valor numerico
 * @returns {Number}
 */
function promedio(a, b, c, d, e){
    const numero1= parseInt(prompt('ingese un numero'));
    const numero2= parseInt(prompt('ingese un numero'));
    const numero3= parseInt(prompt('ingese un numero'));
    const numero4= parseInt(prompt('ingese un numero'));
    const numero5= parseInt(prompt('ingese un numero'));
    /* const calculo=(`${(numero1 + numero2 + numero3 + numero4 + numero5)/2}`); */
    return `${(numero1 + numero2 + numero3 + numero4 + numero5)/2}`
}
let resultado = promedio();
alert(resultado);
console.log(resultado);
