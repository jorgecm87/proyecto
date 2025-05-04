const herramientas = document.getElementById("herramientas");
const desarmador = document.getElementById("desarmador");
const tipoLlave = document.getElementById("tipo-llave");

function FCambioTexto() {
    herramientas.innerText = "Alicates de corte y de punta";
    herramientas.style.color = "blue";
}

function FCambioColor(){
    desarmador.classList.remove("color-azul");
    desarmador.classList.add("color-rojo");
}

function FCambioTag(){
    const nuevoElemento = document.createElement("h2");
    nuevoElemento.innerText = tipoLlave.innerText;
    tipoLlave.replaceWith(nuevoElemento);

    nuevoElemento.innerText = "Llave N° 10 y N° 12";
}