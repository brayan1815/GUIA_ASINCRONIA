// Crea tres Promises que se resuelvan después de diferentes intervalos de tiempo y luego
// utilice Promise.all() para mostrar un mensaje cuando todas se hayan resuelto.

let promesa1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promesa 1");
  }, 1000);
})
let promesa2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promesa 2");
  }, 2000);
})
let promesa3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promesa 3");
  }, 3000);
})

Promise.all([promesa1, promesa2, promesa3]).then((valores) => {
  console.log(valores)
})