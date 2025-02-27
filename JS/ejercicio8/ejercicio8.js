// Crear una función findIndex que acepte un array y un callback y que: • por cada
// elemento del array ejecute el callback pasándole dicho elemento como argumento
// • devuelva el índice del elemento pasado como argumento del primer callback que
// devuelva true
// • sí ningún callback devuelve true, devuelva undefined

function findIndex(arreglo,callback){
    let res;
    for(let n=0;n<arreglo.length;n++){
        if(callback(arreglo[n])){
            res=n;
            break;
        }
    }
    return res;
}

function multiploCinco(numero){
    if(numero%5==0) return true;
    else return false;
}

let array=[3,6,14,15,16];

alert(findIndex(array,multiploCinco));