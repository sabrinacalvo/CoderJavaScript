// Capturo todos los valores del formulario.
const Nombre = document.querySelector(".nombre")
const Dni = document.querySelector(".dni")
const Especialidad = document.querySelector(".select-especialidad")
const Medico = document.querySelector(".select-medico")
const Mediopago = document.querySelector(".select-pago")
const Dia = document.querySelector(".select-dia")
const Hora = document.querySelector(".select-hora")
const ButtonAgregarTurno = document.querySelector(".button")
const ButtonActualizar = document.querySelector(".buttondos")
const ListadoTurnos = document.querySelector(".listado-turnos")
// Defino mi Local Storage.
const baseDatos = window.localStorage 
// Objeto Turno guarda los datos de la visita medica.
class Turno {
    constructor(nombre, dni, especialidad, mediopago, medico, dia, hora){
        this.id = Math.random(1, 100),
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


// Arreglo de Turnos, parte de la primera entrega.
// Defino turnos preexistentes.
const arrTurnos = [
    new Turno("Maria Perez", "45321657", "traumatologia"," obrasocial", "Ali Pablo", "Lunes", "18:00"),
    new Turno("Juan Lopez", "32345678", "traumatologia", "particular", "Ali Pablo", "Miercoles", "20:00"),
    new Turno("Jose Garcia", "57645231", "traumatologia", "particular", "Ali Pablo", "Viernes", "19:00")
]

// Carga la base de datos con turnos, si no tiene datos preexistentes.
if (baseDatos.length==0){
    for(let i=0; i<arrTurnos.length; i++)
        guardarTurnoEnDb(baseDatos,arrTurnos[i])
}

ButtonActualizar.onclick = () => {
    window.location.href = ''
}

ButtonAgregarTurno.onclick = (e) => {
    e.preventDefault();
    // Creo mi objeto para guardar los datos del turno.
    let Contacto = new Turno(
        Nombre.value,
        Dni.value,
        Especialidad.value,
        Mediopago.value,
        Medico.value,
        Dia.value,
        Hora.value)

    // Desestructuracion objeto contacto
    let { medico, hora, dia } = Contacto
    Swal.fire({
        title: 'Queres guardar el turno?',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: 'Guardar',
        denyButtonText: `No Guardar`,
    }).then((result) => {
        if (result.isConfirmed) {
            if (esHorarioDisponible(baseDatos, medico, hora, dia) && validarEdad(Contacto.dni) && !hayCamposVacios(Contacto)) {
                Swal.fire('Turno guardado!', '', 'success'),
                guardarTurnoEnDb(baseDatos, Contacto),
                window.location.href = ''
                
                
            }else{
                Swal.fire('Horario/dia no disponible or campos vacios!', '', 'info');
            }
        } else if (result.isDenied) {
            Swal.fire('Turno NO guardado', '', 'info')
        }
    })
    
}

// Cargo todos los turnos de la base de Datos en el <DIV> del Index "ListadoTurno"
cargarTurnosDesdeDb(baseDatos, ListadoTurnos)