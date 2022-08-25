// ciclo while

var medioPago = 0;
do {
  medioPago = Number(prompt("ingrese el medio de pago: 1-Efectivo 2-Tarjeta 3-salir"));
  if (medioPago == 1) {
    console.log("usted abono en efectivo");
  } else if (medioPago == 2) {
    console.log("usted abono con tarjeta");
  }
} while (medioPago != 3);

//ciclo For

const TOTALEVALUACIONES = 10;
for (let i = 0; i < TOTALEVALUACIONES; i++) {
  console.log("evaluacion numero: " + i);
  let nota1 = prompt("ingrese el valor de la nota " + i);
  console.log("valor de la nota: " + nota1);
}
