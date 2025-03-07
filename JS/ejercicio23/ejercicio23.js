// 23. Usar un proxy para la validación de los valores de propiedades
// • Cuando declaremos que el atributo es numérico solo perimimos que ingresen
// números
// • Cuando declaremos que el atributo es alfanumérico solo permitimos que ingresen
// letras
// • Cuando declaremos que el atributo es un email, solo permitimos que ingresen
// correos
// • Cuando declaremos que el atributo es de tipo date, solo permitimos que ingresen
// fechas
// • Para todos los atributos no se puede ingresar espacios en blanco tanto al inicio como
// al final de estos y se debe mostrar el error personalizado por consola

const persona={
    nombre:"",
    apellido:"",
    telefono:0,
    correo:"",
    edad:0,
    fecha_nacimiento:""
}

let regexTex=/^[a-z][a-z\s]+$/i
let regeNum=/^[0-9]+$/
let regexCorreo=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/  
let regexFecha=/^([0-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/(\d{4})$/;

let Brayan=new Proxy(persona,{
    set(objeto,propiedad,valor){
        if((propiedad=="nombre" || propiedad=="apellido") && !regexTex.test(valor)){
            return console.error(`la propiedad ${propiedad} solo permite el ingreso de letras sin espacios al inicio y al final`)
        }
        if((propiedad=="telefono" || propiedad=="edad") && !regeNum.test(valor)){
            return console.error(`La propiedad ${propiedad} solo admite valores numericos sin espacios al inicio y al final`)
        }
        if(propiedad=="correo" && !regexCorreo.test(valor)){
            return console.error(`La propiedad ${propiedad} no admite espacios em blanco, tenga en cuenta que el correo ingresado debe ser valido`)
        }
        if(propiedad=="fecha_nacimiento" && !regexFecha.test(valor)){
            return console.error(`el valor ingresado para la propiedad ${propiedad} no cumple con las caracteristicas requeridas`)
        }
        objeto[propiedad]=valor;
    }
})
Brayan.nombre="hola "
Brayan.telefono=35228
Brayan.correo="brayanfernandezjimenez18@gmail.com"
Brayan.edad="15"
Brayan.fecha_nacimiento="18/09/2007"

console.log(Brayan)
