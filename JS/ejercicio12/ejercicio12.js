// Define una función asincrónica que espere 1 segundo y luego devuelva una cadena que
// diga "Operación completada". Utiliza async/await.

async function funcionAsincronica() {
  let promesa= new Promise((resolve) => {
    setTimeout(() => {
      resolve("Operacion Completada")
    }, 1000);
  })
  let respuesta = await promesa;
  return respuesta;
}
funcionAsincronica().then(alert);