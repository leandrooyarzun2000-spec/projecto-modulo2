//Sacar usuario y dinero de localstorage
const usuario = localStorage.getItem("usuariovalido");
const monto = parseFloat(localStorage.getItem("monto"));

//Adicion de mostrar email a nav bar (muchas gracias profesor)
document.getElementById("usuario").textContent = usuario;
//Adicion de mostrar dinero al menu
document.getElementById("mostrardinero").textContent = "$" + monto;

//Boton Depositar
document.getElementById("depositar").addEventListener("click", function () {
    window.location.href = "deposit.html";
})
//Boton Enviar Dinero
document.getElementById("enviardinero").addEventListener("click", function () {
    window.location.href = "sendmoney.html";
})
//Boton Transaciones
document.getElementById("transaciones").addEventListener("click", function () {
    window.location.href = "transactions.html";
})
