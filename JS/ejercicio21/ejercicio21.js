// Realiza una llamada a un archivo local en formato json y maneja posibles errores utilizando
// try/catch para mostrar un mensaje de error en caso de fallo.

try {
    fetch("../../JSON/ejercicio17.json").then(function(data){
        data.json().then(function(dato){
            console.log(dato);
        })
    })
} catch (error) {
    console.log("El error encontrado fue: "+error)
}