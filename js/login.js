// Credenciables usables
const usuariovalido = "usuario@wallet.com"
const passwordvalido = "numero1"

//Para evitar errores limpiar localStorage
localStorage.clear();

//Guardado de usuario
localStorage.setItem("usuariovalido", usuariovalido)
console.log(usuariovalido, passwordvalido)

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

        // Redirir al menú principal
        window.location.href = "menu.html";
    } else { 
         mensajeerror.textContent = "Correo o contraseña incorrectos. Intente nuevamente.";
    mensajeerror.style.display = "block";

    form.reset()}})
