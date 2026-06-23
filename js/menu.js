//Sacar usuario y dinero de localstorage
const usuario = localStorage.getItem("usuariovalido");
const monto = parseFloat(localStorage.getItem("monto"));

document.getElementById("usuario").textContent = usuario;
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
