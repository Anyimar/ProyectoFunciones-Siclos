//referenciando componentes del dom
let sumar = document.getElementById("btn-sumar");
let restar = document.getElementById("btn-restar");

//añádiendo escuchas
sumar.addEventListener("click", adicion);
restar.addEventListener("click", sustraccion);


//desclarando funciones
function adicion() {
    var valor1 = parseInt(document.getElementById("valor1").value); 
    var valor2 = parseInt(document.getElementById("valor2").value);
    var resultado = valor1 + valor2;
    document.querySelector(".resultado").innerHTML = resultado;
}

function sustraccion() {
    var valor1 = parseInt(document.getElementById("valor1").value); 
    var valor2 = parseInt(document.getElementById("valor2").value);
    var rest = valor1 - valor2;

    if (rest < 1) {
        document.querySelector(".resultado").innerHTML = "0"        
    } else {
        document.querySelector(".resultado").innerHTML = rest;
    }
}
