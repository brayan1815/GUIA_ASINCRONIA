// Realiza tres Promises, algunas de las cuales se resuelvan y otras se rechacen. Utiliza
// Promise.allSettled() para obtener información sobre el estado de todas las Promises.

let promesa1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promesa 1");
  }, 1000);
})
let promesa2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promesa rechazada");
  }, 1000);
})
let promesa3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promesa 3");
  }, 1000);
})

Promise.allSettled([promesa1, promesa2, promesa3]).then(resultados => console.log(resultados));