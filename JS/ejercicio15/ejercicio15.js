// Realiza una llamada a un archivo local Muestra en formato json, luego muestre los datos
// obtenidos en la consola.

fetch("../JSON/ejercicio15.json").then(function (data) {
  // console.log(data)
  const respuesta = data.json().then(function (dato) {
    console.log(dato)
  })
})