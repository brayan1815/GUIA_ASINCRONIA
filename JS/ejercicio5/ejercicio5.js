// Crear una función every que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva true si todas las llamadas al callback devolvieron true


function every(array,callback){ 
    let respuesta=true;
    for(let n=0;n<array.length;n++){
        if(!callback(array[n])) respuesta=false;
    }
    return respuesta;
}

function multiploTres(numero){
    if(numero%3==0) return true;
    else return false;
}

const array=[3,6,8,12];

console.log(every(array,multiploTres));