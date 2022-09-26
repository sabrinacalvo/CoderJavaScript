const Nombre = document.querySelector(".nombre")
const Dni = document.querySelector(".dni")
const Especialidad = document.querySelector(".select-especialidad")
const Medico = document.querySelector(".select-medico")
const Mediopago = document.querySelector(".select-pago")
const Dia = document.querySelector(".select-dia")
const Hora = document.querySelector(".select-hora")
const ButtonAgregarTurno = document.querySelector(".button")

const ListadoTurnos = document.querySelector(".listado-turnos")
console.log(ListadoTurnos)

const baseDatos = window.localStorage 

ButtonAgregarTurno.onclick = () => {
    let Contacto = {
        id: Math.random(1, 100),
        nombre: Nombre.value,
        dni: Dni.value,
        especialidad: Especialidad.value,
        medico: Medico.value,
        mediopago: Mediopago.value,
        dia: Dia.value,
        hora: Hora.value,
    }

    // Desestructuracion objeto
    let { medico, hora, dia } = Contacto
    // Valido si el turno esta disponible. 
    if (esHorarioDisponible(baseDatos, medico, hora, dia)) {
        // Valido si es mayor de edad para agendar turno.
       (validarEdad(Contacto.dni) ? guardarTurno(baseDatos, Contacto) : alert("Debe ser mayor de edad"))
    }
    }

cargarTurnos(baseDatos, ListadoTurnos)


class Turno {
    constructor(nombre, dni, especialidad, mediopago, medico, dia, hora){
        this.nombre = nombre;
        this.dni = dni;
        this.especialidad = especialidad;
        this.medico = medico;
        this.dia = dia;
        this.hora = hora;
        this.mediopago = mediopago;
        this.mostrar = function () { console.log("Detalles de usuario: " + "\n" + this.nombre + "\n" + this.dni) }
    }
}

 const arrTurnos = [
  new Turno("Maria Perez", "45.321.657", "traumatologia"," obrasocial", "Ali Pablo", "Lunes", "seis"),
  new Turno("Juan Lopez", "32.345.678", "traumatologia", "particular", "Ali Pablo", "Miercoles", "ocho"),
  new Turno("Jose Garcia", "57.645.231", "traumatologia", "particular", "Ali Pablo", "Viernes", "siete")

 ]

// esta funcion se encarga de mostrar  todos los turnos

function mostrarTurnos(arrTurnos) {

    const contenedorDeTurnos = document.getElementById("formulario");
    contenedorDeTurnos.innerHTML = "";
    // por cada uno
    arrTurnos.forEach(turno => {
        const divTurno = document.createElement("div");
        divTurno.classList.add("turno");
        divTurno.innerHTML =  `
        <h1>${turno.nombre}</h2>
        <h3>${turno.dni}</h3>
        <p> ${turno.especialidad}</p>
        <p>${turno.mediopago}</p>
        <p>${turno.medico}</P>
        <p>${turno.dia}</P>
        <p>${turno.hora}</P><hr>
       
    `;
 
    contenedorDeTurnos.appendChild(divTurno);
    })
}
mostrarTurnos(arrTurnos);







