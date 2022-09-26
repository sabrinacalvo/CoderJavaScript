function validarEdad(valor) {
    return valor < 46000000 ? true : false;
}



function esHorarioDisponible(baseDatos, medico, hora, dia){
    // Recorro el storage uno por uno para buscar si existe un turno con un medico y horario dado.
    // Si existe el turno, retorna FALSE = HORARIO NO DISPONIBLE
    var clave, tempTurno;
    var valor = true;
    for(var i=0;i < baseDatos.length; i++) {
        clave = baseDatos.key(i);
        tempTurno = JSON.parse(baseDatos.getItem(clave));
        console.log("Revisando TURNO: " + tempTurno);
        if((tempTurno.medico == medico) && (tempTurno.hora == hora) && (tempTurno.dia == dia)) {
            alert("Horario NO Disponible: " + "Medico: " + medico + "Horario: " + hora + "Hs")
            valor = false;
        }
    }
    return valor;
}
