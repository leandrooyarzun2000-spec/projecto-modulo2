//Conseguir monto de LocalStorage
let monto = Number(localStorage.getItem("monto"));
//Datos de HTML
let transferencia = document.querySelector("#transferencia")
const errortransferencia = new bootstrap.Modal(
    document.getElementById("errortransferencia")
);
//Boton Formulario
transferencia.addEventListener("submit", function (event) {
    event.preventDefault();
    const destinatario = document.querySelector("#destinatario").value
    const montoenvio = Number(document.querySelector("#montoenvio").value)

    if (montoenvio > monto) {

        errortransferencia.show();
    }



    else {
        //Operacion
        monto = monto - montoenvio;
        //Poner el monto ya usado
        localStorage.setItem("monto", monto);
        alert("Transferencia exitosa!")
        //Redireccion a Menu
        window.location.href = "menu.html";
        //Añadir nuevo destinatario
        localStorage.setItem("destinatario", destinatario)
    }
})