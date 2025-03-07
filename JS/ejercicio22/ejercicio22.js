// Crear un objeto proxy usando la clase Proxy

const persona={
    nombre:"",
    apellido:"",
    edad:0,
}

let Brayan=new Proxy(persona,{
    set(objeto,valor,propiedad){
        objeto[valor]=propiedad;
    }
})

Brayan.nombre="Brayan";
Brayan.apellido="Fernandez";
Brayan.edad=17;

console.log(Brayan)

