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
 * 2. En la función generarInvitados():
 *    Crear una variable global que indique si se debe solicitar 1, 2 o 3 nombres de invitados.
 *    Según la cantidad especificada utilice condicionales para solicitar la cantidad de nombres
 *    correctos.
*/
const CANTIDAD_DE_INVITADOS= parseInt(prompt('Ingrese la cantidad de invitados'));
/**
 * Esta funcion solicita una cantidad de invitados.
 * En caso de que la cantidad sea menor o igual a 3 invitados, va a solicitar sus nombre y apellidos.
 * @returns {String}
 */
function generarInvitados(){
    let number= CANTIDAD_DE_INVITADOS;
    if(number == 1){
        let nombre1=prompt('Ingrese Nombre y Apellido');
        alert(`Solo has invitado a ${nombre1}`);
    }else{
        if(number == 2){
            let nombre1=prompt('Ingrese Nombre y Apellido');
            let nombre2=prompt('Ingrese Nombre y Apellido');
            alert(`Has invitado a ${nombre1} y ${nombre2}`);
        }else{
            if(number == 3){
                let nombre1=prompt('Ingrese Nombre y Apellido');
                let nombre2=prompt('Ingrese Nombre y Apellido');
                let nombre3=prompt('Ingrese Nombre y Apellido');
                alert(`Has invitado a ${nombre1} , ${nombre2} y ${nombre3}` );
            }else{
                if(number>3){
                    alert('Para!!! son muchos invitados!');
                }else{
                    alert('No invitaste a nadie :(');
                }
                
            }

        }
    }
    return
}

generarInvitados();
