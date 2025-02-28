// Crea una Promise que se rechace después de 2 segundos y captura el error para imprimir
// "Error: Promise rechazada".

function promesaRechazada() {
  let promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Promise Recahzada"))
    }, 2000);
  })
  return promesa;
}

promesaRechazada().catch(alert);