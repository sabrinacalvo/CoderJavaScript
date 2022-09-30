
// Guardar un objeto Turno en base de datos
const guardarTurnoEnDb = (baseDatos, nuevoTurno) =>{
    baseDatos.setItem(nuevoTurno.id, JSON.stringify(nuevoTurno));
    //window.location.href = ''
    console.log("Turno guardado en Db!",localStorage.getItem(nuevoTurno.id));
}

 // Trae todos los turnos desde la DB
const cargarTurnosDesdeDb = (baseDatos, parentNode) =>{
      let claves = Object.keys(baseDatos)
      // Recorro todas claves de baseDatos para obtener todos los registros.
      for(clave of claves){
          let contacto = JSON.parse(baseDatos.getItem(clave))
          console.log("Turno revisado en db: ",contacto)
          crearTurno(parentNode, contacto, baseDatos )
      }
 }

const crearTurno = (parentNode, contacto, baseDatos) =>{
  
    // Creo los elemento de HTML que van a gurardar los datos.
     let divTurno = document.createElement('div')
     let nombreTurno = document.createElement('h3')
     let dniTurno = document.createElement('p')
     let especialidadTurno = document.createElement('p')
     let medicoTurno = document.createElement('p')
     let mediopagoTurno = document.createElement('p')
     let horarioTurno = document.createElement('p')
     let diaTurno = document.createElement('p')
     let iconoBorrar = document.createElement('span')

    // Asigno los valores a los elementos de HTML.
     nombreTurno.innerHTML = contacto.nombre
     dniTurno.innerHTML = contacto.dni
     especialidadTurno.innerHTML = contacto.especialidad
     medicoTurno.innerHTML = contacto.medico
     mediopagoTurno.innerHTML = contacto.mediopago
     diaTurno.innerHTML = contacto.dia
     horarioTurno.innerHTML = contacto.hora
     iconoBorrar.innerHTML = 'delete_forever'

     // Agrego tipo de class al DIV que guarda los datos del turno.
     divTurno.classList.add('turno')
     // Icono para boton de borrar el turno en HTML.
     iconoBorrar.classList.add('material-symbols-outlined', 'icono')
     // Cuando hago click en el icono de Borrar Turno
     iconoBorrar.onclick = () =>{
        swal.fire({
            icon:'info',
            title:'Turno Eliminado',
            confirmButtonText:'Aceptar',
        })
        
        baseDatos.removeItem(contacto.id)
        window.location.href = ''
     }

     // Al Div del turno le agrego el resto de los elementos / datos del turno.
     divTurno.appendChild(nombreTurno)
     divTurno.appendChild(dniTurno)
     divTurno.appendChild(especialidadTurno)
     divTurno.appendChild(medicoTurno)
     divTurno.appendChild(mediopagoTurno)
     divTurno.appendChild(horarioTurno)
     divTurno.appendChild(diaTurno)
     divTurno.appendChild(iconoBorrar)
  
     // Agrego el turno, al parentNode para agregar el turno creado.
     parentNode.appendChild(divTurno)
 }

function validarEdad(valor) {
    return valor < 46000000 ? true : false;
}

/*
// Recorro el storage uno por uno para buscar si existe un turno con un medico y horario dado.
// Si existe el turno, retorna FALSE = HORARIO NO DISPONIBLE
*/
function esHorarioDisponible(baseDatos, medico, hora, dia){
    var clave, tempTurno;
    var valor = true;
    for(var i=0;i < baseDatos.length; i++) {
        clave = baseDatos.key(i);
        tempTurno = JSON.parse(baseDatos.getItem(clave));
        console.log("Revisando TURNO: " + tempTurno.id);
        if((tempTurno.medico == medico) && (tempTurno.hora == hora) && (tempTurno.dia == dia)) {
            //console.log("Horario NO Disponible: " + "Medico: " + medico + "Horario: " + hora + "Hs")
            valor = false;
        }
    }
    return valor;
}

/*
/ Funcion que devuelve TRUE si algun campo esta con el valor por defecto.
*/
function hayCamposVacios(fichaDatos){
    return (fichaDatos.nombre=="" || fichaDatos.dni=="" || fichaDatos.especialidad=="free" ||
    fichaDatos.medico=='free' || fichaDatos.pago=="free" || fichaDatos.dia=='free' ||
    fichaDatos.hora=='free')}
/*
Funcion para limpiar los campos del formulario.
*/
function limpiarRegistros() {
    document.querySelector('.nombre').value = "";
    document.querySelector(".dni").value = "";
    document.querySelector(".select-especialidad").value = "free";
    document.querySelector(".select-medico").value = "free";
    document.querySelector(".select-pago").value = "free";
    document.querySelector(".select-dia").value = "free";
    document.querySelector(".select-hora").value = "free";
    document.querySelector(".button").value = "";
}

function saludar(){
    Swal.fire({
        title:'Bienvenido!',
        text: 'Agende su Turno',
        padding: '1rem',
        timer: 1500
    });
 }


