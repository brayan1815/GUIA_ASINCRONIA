// ¿Cuál es el resultado del código a continuación?

let i = 0;

setTimeout(() => alert(i), 100);

for (let j = 0; j < 100000000; j++){
  i++;
}

//Se mostrara un mensaje de alerta con el valor 100000000, ya que este sera el valor que toma i despues de que se complete el bucle.