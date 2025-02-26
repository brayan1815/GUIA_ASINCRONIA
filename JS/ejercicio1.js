let num1 = prompt("Por favor ingrese el numero desde el cual va a iniciar la secuencia");
let num2 = prompt("Por favor ingrese el numero hasta el cual va a ir la secuencia");

function imprimirNumeros(desde, hasta) {
  for (let n = desde; n <= hasta; n++){
    setTimeout(() => {
      console.log(n);
    }, 1000);
  }
}

imprimirNumeros(num1,num2);