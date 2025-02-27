// . Crear una función find que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva el elemento pasado como argumento del primer callback que devuelva
// true • sí ningún callback devuelve true, devuelva undefined

function find(array,callback){
    let res;
    for(let n=0;n<array.length;n++){
        if(callback(array[n])){
            res=array[n]
            break;
        }
    }
    return res
}

function mayorCinco(numero){
    if(numero>5)return true;
    else return false;
}

array=[1,2,8,3,4,5];

alert(find(array,mayorCinco));