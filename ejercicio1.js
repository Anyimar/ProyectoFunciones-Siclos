var form = document.getElementById("formulario");
form.addEventListener("submit", function ( event ) {
    // evitar el envio del formulario
    event.preventDefault();
    limpiarErrrores();

    //obteniendo campos
    let nombre = document.getElementById("nombre").value;
    let asunto = document.getElementById("asunto").value;
    let mensaje = document.getElementById("mensaje").value;

    //validar campos vacios
    llenarCampo(nombre, asunto, mensaje);
    
    let resultado = validar(nombre, asunto, mensaje);
    
    if (resultado == true) {
        exito();
    }

}, false);

function limpiarErrrores(){
    document.querySelector(".errorNombre").innerHTML = ""
    document.querySelector(".errorAsunto").innerHTML = ""
    document.querySelector(".errorMensaje").innerHTML = ""
}

function llenarCampo(nom, asu, men) {
    if (nom == "") {
        document.querySelector(".errorNombre").innerHTML = "Campo requerido"
    }

    if (asu == "") {
        document.querySelector(".errorAsunto").innerHTML = "Campo requerido"
    }

    if (men == "") {
        document.querySelector(".errorMensaje").innerHTML = "Campo requerido"
    }

}

function validar(nom, asu, men) {
    let aprobar = true;
    let patron = /[0-9]/gim;

    if (patron.test(nom)) {
        document.querySelector(".errorNombre").innerHTML = "Solo se admiten letras"
        aprobar = false;
    } 

    if (patron.test(asu)) {
        document.querySelector(".errorAsunto").innerHTML = "Solo se admiten letras"
        aprobar = false;
    }  

    if (patron.test(men)) {
        document.querySelector(".errorMensaje").innerHTML = "Solo se admiten letras"
        aprobar = false;
    } 

    return aprobar;
}