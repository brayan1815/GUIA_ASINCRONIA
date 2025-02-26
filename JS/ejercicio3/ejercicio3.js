// 3. Crear una función map que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • obtenga el resultado
// • lo pushee a un nuevo array

// GFPI-F-135 V02

// • devuelva el array final con el resultado de cada una de las llamadas al callback.

let array=[0,5,8,2,4,5,3,5,84,18,65,5,];

const map=function(array,callback){
    let array_nuevo=[];
    for(let n=0;n<array.length;n++){
        array_nuevo.push(callback(array[n]));
    }
    return array_nuevo;
}

const multi=function(num){
    mult=4*num;
    return mult;
}

console.log(map(array,multi));