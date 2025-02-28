// Crea una Promisa que se resuelva después de 3 segundos y luego imprima "Promisa
// resuelta" cuando se cumpla.

function mostrarPromesa() {
  return new Promise((resolve)=>{
    setTimeout(() => {
      resolve("Promisa resuelta");
    }, 3000);
  })
}

mostrarPromesa().then(alert);