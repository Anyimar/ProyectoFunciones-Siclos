var boton1 = document.getElementById("btn-1");
boton1.addEventListener("click", pintarCaja);

function pintarCaja() {
    alert("si escucha");
    var intro = document.getElementById('caja');
    intro.style.backgroundColor = '#e53e3e';
}