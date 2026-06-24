const formulario = document.getElementById("depositar");
let monto = Number(localStorage.getItem("monto"));

formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    let deposito = Number(document.getElementById("deposito").value);
    monto = monto + deposito;
    localStorage.setItem("monto", monto);
    alert("Su nuevo saldo es: $" + monto)
})
