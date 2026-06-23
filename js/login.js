// Credenciables usables
const usuariovalido = "usuario@wallet.com"
const passwordvalido = "numero1"

//Informacion de HTML
const form = document.querySelector("#formulario");
const mensajeerror = document.querySelector("#mensajeerror");

//Evento Login
form.addEventListener("submit", function (event) {
    event.preventDefault();

    //Valores Login    
    const email = document.querySelector("#inputuno").value;
    const password = document.querySelector("#inputdos").value;

    // Validacion de Login
    if (email === usuariovalido && password === passwordvalido) {

        //Añadir dinero base a cuenta//
        if (localStorage.getItem("monto") === null) {
            localStorage.setItem("monto", 50000);
        }
        // Redirir al menú principal
        window.location.href = "menu.html";

    } else {
        mensajeerror.textContent = "Correo o contraseña incorrectos. Intente nuevamente.";
        mensajeerror.style.display = "block";

        form.reset()
    }
}
)
