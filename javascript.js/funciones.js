// Guardar un objeto Turno en base de datos
const guardarTurnoEnDb = (baseDatos, nuevoTurno) =>{
    baseDatos.setItem(nuevoTurno.id, JSON.stringify(nuevoTurno));
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
     let divTurno = document.createElement('table')
          let imgTurno = document.createElement('img')
     let nombreTurno = document.createElement('td')
     let dniTurno = document.createElement('td')

     let especialidadTurno = document.createElement('td')
     let medicoTurno = document.createElement('td')
     let mediopagoTurno = document.createElement('td')
     let horarioTurno = document.createElement('td')
     let diaTurno = document.createElement('td')
     let iconoBorrar = document.createElement('td')

    // Asigno los valores a los elementos de HTML.
      imgTurno.src="https://i.pinimg.com/originals/7b/d9/56/7bd95674bd85d7061c85860ab56d6bc5.gif"
      imgTurno.setAttribute('height', '30px');
      imgTurno.setAttribute('width', '15px');
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
     divTurno.appendChild(imgTurno)//imagen
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
// Funcion para traer una imagen de la API Pixabay de imagenes gratis.
*/
function traerAPIImagen(){

    const output = document.querySelector(".output");
    var API_KEY = '30352043-48886b822a1da773034303f30';
    var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent('hospital');
    
    let listaImagenes = '';
    fetch(URL)
        .then((response) => { return response.json(); }) // respuesta va a formato JSON
        .then((data) => { let imagenes = data;
            for(let elem=0;elem<=2;elem++) { 
                let indice = Math.floor(Math.random() * 20)
                listaImagenes += `<div style="display:table-cell";align="center"><center><img src="${imagenes.hits[indice].previewURL}"></center></div>`
            }
            output.innerHTML = listaImagenes;
        })
        .catch(err => { // Para mostrar el error
            console.log(err)
        });
        
}


