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

 const persona = {
  nombre: "",
  dni : 0
 }

 function Turno(dia,horario,especialidad,medioPago){
  this.dia = dia,
  this.horario = horario,
  this.especialidad = especialidad,
  this.medioPago = medioPago
 }

var nombreCompleto = "";
var dni = 0;
var fechaUsuario = "";
var horaUsuario = "";
var especialidad = "";
var medioPago = "";

const arrTurnos = [null,"18:00", "18:30", "19:00", "19:30", "20:00", "20:30"]
const arrDias = [null,"Lunes","Martes","Miercoles","Jueves","Viernes"]
const arrEspecialidades = [null,"Medico Clinico","Traumatologia"]
const arrMedioPago = [null,"Particular", "Obra Social", "Particular"]

//var usuario = Object.create(persona)

function solicitarDatos() {
  alert("Bienvenidos al PORTAL DEL PACIENTE");
  do {
    nombreCompleto = prompt("Ingrese su nombre: ");
  } while (nombreCompleto === "")
  //usuario.nombre = nombreCompleto

  do {
    dni = prompt("Ingrese su DNI: ");
  } while (dni == "") 
   //usuario.dni = dni
}

function crearLista(arrlista) {
  let lista = "";
  for(let i = 1; i<arrlista.length; i++) {
    lista = lista + "\n" + i + " - "+ arrlista[i]
  }
  return lista
}

let diasLista = crearLista(arrDias)
let turnosLista = crearLista(arrTurnos)
let especialidadesLista = crearLista(arrEspecialidades)
let medioPagoLista = crearLista(arrMedioPago)

function solicitarTurno() {
  do {
    especialidad = Number(prompt("Especialidad: " + especialidadesLista)); 
  } while (especialidad == "")
     
  do {
    fechaUsuario = Number(prompt("Ingresar Día del turno: " + diasLista ));
  } while (fechaUsuario == "")

  do {
    horaUsuario = Number(prompt("Ingresar Hora Disponible: " + turnosLista));
  } while (horaUsuario == "") 
}

 function realizarPago(){
  let op = Number(prompt("ingrese el medio de pago: " + medioPagoLista));
  
  switch (op) {
    case 1: 
      console.log("SE ABONA EN CONSULTORIO");
      
      break;
    case 2: 
      console.log("ACUDIR CON EL CARNET DE SU OBRA SOCIAL");
      
      break;
    default:
      console.log("No se ha registrado metodo de pago, debera abonar en consultorio");
      
      break;
  }
    medioPago = arrMedioPago[op]
}

function mostrarResumen() {
  alert("Paciente: " + nombreCompleto + "\nDNI: " + dni + "\nEspecialidad: " + arrEspecialidades[especialidad] + "\nFecha del turno: " + arrDias[fechaUsuario] + "\nHora: " + arrTurnos[horaUsuario] + "Hs" + "\nMedioDePagoSeleccionado: " + medioPago);
}

solicitarDatos();
solicitarTurno();
realizarPago();
mostrarResumen();

    

  
  









