//guardar turnos
 
const guardarTurno = (baseDatos, Contacto) =>{
    console.log("Guardado")
    baseDatos.setItem(Contacto.id, JSON.stringify(Contacto))
    window.location.href = ''
    const contactoTemporal = localStorage.getItem(Contacto.id);
        

    console.log(contactoTemporal)
    document.getElementById(".especialidad").innerHTML = nombre; 

   }

 //cargar Turno
 
 const cargarTurnos = (baseDatos, parentNode) =>{
      let claves = Object.keys(baseDatos)
      console.log(claves)
      for(clave of claves){
          let contacto = JSON.parse(baseDatos.getItem(clave))
          console.log(contacto)
          crearTurno(parentNode, contacto, baseDatos )
      }
 }

 const crearTurno = (parentNode, contacto, baseDatos) =>{
    console.log("parentNode:", parentNode)
     let divTurno = document.createElement('div')
     let nombreTurno = document.createElement('h3')
     let dniTurno = document.createElement('p')
     let especialidadTurno = document.createElement('p')
     let medicoTurno = document.createElement('p')
     let mediopagoTurno = document.createElement('p')
     let iconoBorrar = document.createElement('span')


     nombreTurno.innerHTML = contacto.nombre
     dniTurno.innerHTML = contacto.dni
     especialidadTurno.innerHTML = contacto.especialidad
     medicoTurno.innerHTML = contacto.medico
     mediopagoTurno.innerHTML = contacto.mediopago
     iconoBorrar.innerHTML = 'delete_forever'

     divTurno.classList.add('turno')
     console.log(divTurno)
     iconoBorrar.classList.add('material-symbols-outlined', 'icono')

     iconoBorrar.onclick = () =>{
        baseDatos.removeItem(contacto.id)
        window.location.href = ''
     }

     divTurno.appendChild(nombreTurno)
     divTurno.appendChild(dniTurno)
     divTurno.appendChild(especialidadTurno)
     divTurno.appendChild(medicoTurno)
     divTurno.appendChild(mediopagoTurno)
     divTurno.appendChild(iconoBorrar)
     console.log(divTurno)

     parentNode.appendChild(divTurno)

 }