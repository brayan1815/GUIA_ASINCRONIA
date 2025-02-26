// Escriba una función imprimirNumeros(desde, hasta) que genere un número cada segundo,
// comenzando desde desde y terminando con hasta.
// Haz dos variantes de la solución describiendo el paso a paso de cada una de ellas:
// • Usando setInterval.
// • Usando setTimeout anidado.

let desde,hasta;
while(true){
  desde=parseInt(prompt("Por favor ingrese el numero desde el cual va a iniciar la secuencia: "));
  hasta=parseInt(prompt("Por favor ingrese el numero hasta el cual va a ir la secuencia: "));
  if(desde<hasta)break;
  else alert("El numero desde el cual inicia la secuencia debe ser menor al numero en el cual termina.")
}

const imprimirNumeros=function(desde,hasta){//se declara la funcion imprimiNumeros que recibe como parametros la variable desde y hasta
    console.log(desde); //se muestra el valor de la variable desde
    desde++;//se aumenta uno a la variable desde
    if(desde<=hasta){//si la variable desde es menor o igual a la variable hasta se llamara nuevamente a la funcion imprimirNumeros, el llamado a la funcion se realizara cada 1000 milisegundos (1 segundo)
    setTimeout(() => {
        imprimirNumeros(desde,hasta);
    }, 1000);
    }
}

imprimirNumeros(desde,hasta);