// ciclo while

// var medioPago = 0;
// do {
//   medioPago = Number(prompt("ingrese el medio de pago: 1-Efectivo 2-Tarjeta 3-salir"));
//   if (medioPago == 1) {
//     console.log("usted abono en efectivo");
//   } else if (medioPago == 2) {
//     console.log("usted abono con tarjeta");
//   }
// } while (medioPago != 3);

//ciclo For

// const TOTALEVALUACIONES = 10;
// for (let i = 1; i < TOTALEVALUACIONES; i++) {
//   console.log("evaluacion numero: " + i);
//   let nota1 = prompt("ingrese el valor de la nota " + i);
//   console.log("valor de la nota: " + nota1);
// }


 // Simulador interactivo

var nombreCompleto = "";
var dni = 0;
var fechaUsuario = "";
var horaUsuario = "";
var especialidad = "";
var arrHoras = ["0","18", "18:30", "19", "19:30"]
var arrDias = ["0","Lunes","Martes","Miercoles","Jueves"]
var arrEspecialidades = ["0","Médica Clinica","Traumatologia"]

function solicitarDatos() {
  alert("Bienvenidos al PORTAL DEL PACIENTE");
  nombreCompleto = prompt("Ingrese su nombre");
  while (nombreCompleto === "") {
    nombreCompleto = prompt("Ingrese su nombre").toUpperCase();
  }

  dni = prompt("Ingrese su DNI: ");
  while (dni == "") {
    dni = prompt("Ingrese su DNI: ");
  }
}

function solicitarTurno() {
  especialidad = Number(prompt("Especialidad: \n1-Médica Clinica  \n2-Traumatologia"));
  while (especialidad == "") {
    especialidad = Number(prompt("Ingresar la Especialidad: "));
  }

  fechaUsuario = Number(prompt("Ingresar Día del turno: \n1-Lunes \n2-Martes \n3-Miercoles"));
  while (fechaUsuario == "") {
    fechaUsuario = Number(prompt("Ingresar Día: "));
  }

  horaUsuario = Number(prompt("Ingresar Hora Disponible: \n1-18:00hs  \n2-18:30hs  \n3-19:00hs   \n4-19:30hs"));
  while (horaUsuario == "") {
    horaUsuario = prompt("Ingresar Hora: ");
  }
}

 function realizarPago(){
    let MedioPago = 0;
    let pagado = false;
    do{
        MedioPago = Number(prompt("ingrese el medio de pago: 1-Particular 2-Swiss Medical 3-salir"));
        if (MedioPago == 1) {
         console.log("SE ABONA EN CONSULTORIO");
         pagado = true;
        } else if (MedioPago == 2) {
        console.log("ACUDIR CON EL CARNET DE SU OBRA SOCIAL");
        pagado = true;
        }
    } while (MedioPago != 3 && !(pagado));
    if (MedioPago ==3 && !(pagado)) {
        console.log("No se ha registrado metodo de pago, debera abonar en consultorio")
    }
}

function mostrarResume() {
  alert("Paciente: " + nombreCompleto + "\nDNI: " + dni + "\nEspecialidad: " + arrEspecialidades[especialidad] + "\nFecha del turno: " + arrDias[fechaUsuario] + "\nHora: " + arrHoras[horaUsuario] + "Hs");
}

solicitarDatos();
solicitarTurno();

realizarPago();
mostrarResume();

    

  
  









