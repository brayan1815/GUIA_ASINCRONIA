// En el siguiente código hay una llamada programada setTimeout, luego se ejecuta un cálculo
// pesado que demora más de 100 ms en finalizar.
// ¿Cuándo se ejecutará la función programada y por qué se ejecutará?
// a) Después del bucle.
// b) Antes del bucle.
// c) Al comienzo del bucle.
// ¿Qué va a mostrar alert()?

let i=0;

setTimeout(() => {
    alert(i);
}, 100);

for(let j=0;j<100000000;j++){
    i++;
}

//RTA: despues del bucle, ya que este proceso demora mas de 100 ms, y aunque en setTimeout este programado para ejercutarse dentro de 100 ms, java Script es de un solo hilo, por lo que hasta que no termine el bucle no se podran ejecutas mas acciones. esto ocurre por el flujo del Event Loop

//El alerta mostrara 100000000, ya que despues de completado el bucle el valor de i sera diferente.