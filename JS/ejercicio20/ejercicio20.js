// Crea un bucle que realice llamadas asincrónicas utilizando async/await para procesar una
// lista de elementos uno por uno.

async function procesar(arreglo,callback) {
    for(let n=0;n<arreglo.length;n++){
        await callback(arreglo[n]).then(console.log);
    }
}

function procesarElemento(elemento){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("se ha procesado el elemento "+elemento)
        }, 1000);
    })
}

let arreglo=[1,5,2,5,1,28,2,8,2,9,2,6,23,5]

procesar(arreglo,procesarElemento)