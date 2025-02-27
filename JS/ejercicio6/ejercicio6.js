// Crear una función some que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva true si al menos una de las llamadas al callback devolvió true

function some(arreglo, callback){
    let res= false;
    for(let n=0;n<arreglo.length;n++){
        if(callback(arreglo[n])) res=true;
    }
    return res;
}

function esPrimo(num){
    let cont=0;
    for(let n=0;n<=num;n++){
        if(num%n==0)cont++;
    }
    if(cont==2)return true;
    else return false;
}

const array=[6,8,10,3];
alert(some(array,esPrimo));