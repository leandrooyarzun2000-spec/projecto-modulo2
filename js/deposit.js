//Conseguir informacion de formulario
const formulario = document.getElementById("depositar");
//Recuperar Monto actual de LocalStorage
let monto = Number(localStorage.getItem("monto"));

//Evento al accionar boton
formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    //Sacar variable de deposito
    let deposito = Number(document.getElementById("deposito").value);
//Operacion
    monto = monto + deposito;
//Guardar monto nuevo en LocalStorage
    localStorage.setItem("monto", monto);
    alert("Su nuevo saldo es: $" + monto)
    window.location.href = "menu.html";
})
