var form = document.getElementById("formulario");
form.addEventListener("submit", function ( event ) {
    // evitar el envio del formulario
    event.preventDefault();
    limpiarErrrores();

    //obteniendo campos
    let nombre = document.getElementById("nombre").value;
    let asunto = document.getElementById("asunto").value;
    let mensaje = document.getElementById("mensaje").value;
    
    let resultado = validar(nombre, asunto, mensaje);
    
    if (resultado == true) {
        exito();
    }

}, false);

function limpiarErrrores(){
    document.querySelector(".errorNombre").innerHTML = "" ;
    document.querySelector(".errorAsunto").innerHTML = "" ;
    document.querySelector(".errorMensaje").innerHTML = "";
};    

function validar(nom, asu, men) {
    let aprobar = true;
    let patron = /[0-9]/gim;
//solo se admiten numeros
    if (patron.test(nom)) {
        document.querySelector(".errorNombre").innerHTML = "Solo se admiten letras";
        aprobar = false;
    }; 

    if (patron.test(asu)) {
        document.querySelector(".errorAsunto").innerHTML = "Solo se admiten letras";
        aprobar = false;
    }; 

    if (patron.test(men)) {
        document.querySelector(".errorMensaje").innerHTML = "Solo se admiten letras";
        aprobar = false;
    }; 
//que no esten los campos vacios
    if (nom == "") {
        document.querySelector(".errorNombre").innerHTML = "Campo requerido";
        aprobar = false;
    };

    if (asu == "") {
        document.querySelector(".errorAsunto").innerHTML = "Campo requerido";
        aprobar = false;
    };

    if (men == "") {
        document.querySelector(".errorMensaje").innerHTML = "Campo requerido";
        aprobar = false;
    };


    return aprobar;
};

function exito(){
    document.querySelector(".resultado").innerHTML = "El    Mensaje a sido enviado con exito!!";
};