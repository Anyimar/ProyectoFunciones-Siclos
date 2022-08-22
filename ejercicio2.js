//botones 
var boton1 = document.getElementById("btn-1");
var boton2 = document.getElementById("btn-2");
var boton3 = document.getElementById("btn-3");
var boton4 = document.getElementById("btn-4");
var boton5 = document.getElementById("btn-5");
var boton6 = document.getElementById("btn-6");

boton1.addEventListener("click", color1);
boton2.addEventListener("click", color2);
boton3.addEventListener("click", color3);
boton4.addEventListener("click", color4);
boton5.addEventListener("click", color5);
boton6.addEventListener("click", color6);

function color1() {
    var intro = document.getElementById('caja');
    intro.style.backgroundColor = '#e53e3e';
}

function color2() {
    var intro = document.getElementById('caja');
    intro.style.backgroundColor = '#dd6b20';
}

function color3() {
    var intro = document.getElementById('caja');
    intro.style.backgroundColor = '#faf089';
}

function color4() {
    var intro = document.getElementById('caja');
    intro.style.backgroundColor = '#48bb78';
}

function color5() {
    var intro = document.getElementById('caja');
    intro.style.backgroundColor = '#81e6d9';
}

function color6() {
    var intro = document.getElementById('caja');
    intro.style.backgroundColor = '#d53f8c';
}