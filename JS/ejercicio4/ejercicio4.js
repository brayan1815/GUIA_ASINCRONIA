// 4. Crear una función filter que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • sí dicho callback devuelve true, pushea el elemento a un nuevo array
// • devuelva el array final con los elementos que pasaron el "filtro".

const filter=function(array,callback){
    let array_pares=[];
    for(let n=0;n<array.length;n++){
        if(callback(array[n])) array_pares.push(array[n]);
    }
    return array_pares;
}

function num_par(numero){
    if(numero%2==0){
        return true
    }else return false;
}

const array=[5,4,81,9,51,9,51,98,156,65,9,0,1,6,81,561,9,19,1,89,8,615,1,65,198,1];

console.log(filter(array,num_par));