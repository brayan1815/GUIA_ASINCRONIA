// Crea una función asincrónica que realice una llamada a un archivo local en formato json y
// luego manipule los datos recibidos para mostrar información específica.

async function llamadoJson() {

  const llamado = await fetch("../../JSON/ejercicio17.json");
  let datos = await llamado.json();
  console.log("Todos los datos: ")
  console.log(datos);

  let filtrado = datos.filter((datos) => datos.edad >= 18);
  console.log("Datos filtrados: ");
  console.log(filtrado)

}


llamadoJson();