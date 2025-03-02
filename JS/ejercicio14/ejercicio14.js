// Crea tres Promises consecutivas, donde cada una se resuelva después de 1 segundo y
// devuelva un número diferente. Luego, encadena las tres Promises para sumar los resultados
// y mostrar el resultado final.

new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
}).then((resultado) => {
  console.log(resultado)
    return new Promise((resolve)=>{
      setTimeout(() => {
        resolve(resultado+1)
      }, 1000);
    })  
  
}).then((resultado) => {
  console.log(resultado)
  return new Promise((resolve)=>{
    setTimeout(() => {
      resolve(resultado+1)
    }, 1000);
  })
}).then(console.log);


