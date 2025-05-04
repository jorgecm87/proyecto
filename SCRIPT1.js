let VarGlobal1="texto de variable global"

function FCambioColor() {
    let vtexto1 =document.getElementById("HERRAMIENTAS");
    vtexto1.textContent= "texto cambiado por funcion FCambioColor"; 
    vtexto1.style.color="BLUE"; 
    vtexto1.insertAdjacentHTML("beforeend",
                                 "<br>este texto es adicional <br>");
    vtexto1.style.backgroundColor="green";

    vtexto1.insertAdjacentHTML("beforeend", VarGlobal1);

}
