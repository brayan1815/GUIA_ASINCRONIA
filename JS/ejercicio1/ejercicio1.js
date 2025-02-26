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

const imprimirNumeros=function(desde){ //Se declara la funcion imprimirNumeros, esta recibe como parametro la variable desde, esta funcion imprimde la variable desde por consola
  console.log(desde);
}

let intervalo=setInterval(() => {//asignamos el intervalo dentro de una variable para tener mejor control de este
  imprimirNumeros(desde);//se llama a la funcion Imprimir numeros y se envia como argumento la variable desde
  desde++;//se aumenta en uno la variable desde
  if(desde>hasta){//en caso de que el la variable desde sea mayor a la variable hasta se cerrara el intervalo para que no se muestren numeros infinitamente
    clearInterval(intervalo);
  }
}, 1000);//se asiga un intervalo de 1000 milisegundos (1 segundo) entre cada llamado a la funcion