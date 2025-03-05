// Después de realizar una llamada a un archivo local en formato json, utiliza el método then()
// para filtrar los datos y mostrar solo los elementos que cumplan ciertos criterios (por ejemplo,
// mostrar solo los nombres que comiencen con "A").

fetch("../../JSON/ejercicio16.json").then(function (data) {
  data.json().then(function (dato) {
    const filtrado = dato.filter((dato) => dato.nombre[0] == "E")
    console.log(filtrado);
  })
})
