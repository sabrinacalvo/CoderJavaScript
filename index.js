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

 // null esta de relleno, para utilizar las posiciones de 1 en adelante.
const arrHorarios = [null,"18:00", "18:30", "19:00", "19:30", "20:00", "20:30"]
const arrDias = [null,"Lunes","Martes","Miercoles","Jueves","Viernes"]
const arrEspecialidades = [null,"Medico Clinico","Traumatologia"]
const arrMedioPago = [null,"Particular", "Obra Social", "Otros"]

 class Persona {
  constructor(_nombre, _dni) {
    this.nombre = _nombre,
      this.dni = _dni,
      this.mostrar = function () { console.log("Detalles de usuario: " + "\n" + this.nombre + "\n" + this.dni) }
  }
}

 class Turno {
  constructor(dia, horario, especialidad, medioPago) {
    this.dia = dia,
      this.horario = horario,
      this.especialidad = especialidad,
      this.medioPago = medioPago,
      this.mostrar = function () { console.log("Detalles de turno: " + "\n" + this.dia + "\n" + this.horario + "\n" + this.medioPago) }
  }
}

// Retorna una lista de items enumerados en STRING con los elementos de un arreglo.
function crearLista(arrlista) {
  let lista = "";
  for(let i = 1; i<arrlista.length; i++) {
    lista = lista + "\n" + i + " - "+ arrlista[i] // Ej: 1 - Elemento
  }
  return lista
}

// Creo una lista automatica para cada arreglo por si cambio o agrego mas opciones en los arreglos.
let diasLista = crearLista(arrDias)
let horariosLista = crearLista(arrHorarios)
let especialidadesLista = crearLista(arrEspecialidades)
let medioPagoLista = crearLista(arrMedioPago)

function solicitarDatos(usuario) {
  alert("Bienvenidos al PORTAL DEL PACIENTE");
  do {
    nombreCompleto = prompt("Ingrese su nombre: ");
  } while (nombreCompleto === "")
  usuario.nombre = nombreCompleto
  do {
    dni = prompt("Ingrese su DNI: ");
  } while (dni == "") 
   usuario.dni = dni
}

function solicitarTurno(turno) {
  do {
    especialidad = Number(prompt("Especialidad: " + especialidadesLista));
  } while (especialidad == "")
  turno.especialidad = arrEspecialidades[especialidad]
  do {
    diaUsuario = Number(prompt("Ingresar Día del turno: " + diasLista));
  } while (diaUsuario == "")
  turno.dia = arrDias[diaUsuario]
  do {
    horaUsuario = Number(prompt("Ingresar Hora de Turno Disponible: " + horariosLista));
  } while (horaUsuario == "") 
  turno.horario = arrHorarios[horaUsuario]
}

 function realizarPago(turno){
  let op = Number(prompt("ingrese el medio de pago: " + medioPagoLista));
  
  switch (op) {
    case 1: 
      turno.medioPago = arrMedioPago[op] + " ¡SE ABONA EN CONSULTORIO!"
      break;
    case 2: 
      turno.medioPago = arrMedioPago[op] + " ¡ACUDIR CON EL CARNET DE SU OBRA SOCIAL!"
      break;
    default:
      turno.medioPago = arrMedioPago[op] + " ¡No se ha registrado metodo de pago, debera abonar en consultorio!"
      break;
  }
}

function mostrarResumen(usuario, turno) {
  alert("Paciente: " + usuario.nombre + "\nDNI: " + usuario.dni + "\nEspecialidad: " + turno.especialidad + "\nFecha del turno: " + turno.dia + "\nHora: " + turno.horario + "Hs" + "\nMedioDePagoSeleccionado: " + turno.medioPago);
}

// Creo un obj Persona y un Turno
let usuarioNuevo = new Persona();
let turnoNuevo = new Turno();
let arrTurnosTotales = [];

// Creo y agrego Turnos al arreglo de turnosTotales
const turno1 = new Turno("Lunes", "18:00", "Traumatologia", "Obra social");
const turno2 = new Turno("Miercoles", "19:00", "Medico Clinico", "Particular");
const turno3 = new Turno("Viernes", "20:30", "Traumatologia", "Particular");
arrTurnosTotales.push(turno1,turno2,turno3);

/*
Comienzo de la simulacion
*/
solicitarDatos(usuarioNuevo);
solicitarTurno(turnoNuevo);
realizarPago(turnoNuevo);
arrTurnosTotales.push(turnoNuevo)
mostrarResumen(usuarioNuevo,turnoNuevo);


// Funcion que recibe un parametro arreglo, genera salida por consola de cada elemento, y retorna un mensaje.
function imprimirTurnosDados(collection, portal) {
  for (item of collection) {
    portal(item);
  }
return "Ya terminamos de listar los turnos por consola"
}

let a = imprimirTurnosDados(arrTurnosTotales,console.log);
console.log(a);




