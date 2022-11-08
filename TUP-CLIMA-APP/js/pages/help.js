let Envio = document.getElementById('envio');
Envio.addEventListener("click", function () {
    Validacion()
})

function validarEmail(mail) {
    if (/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(mail)){
        return true;
    } else {
        return false;
    }
}

function limpiarAlerta() {
    document.getElementById('error').style.display = "none"
    document.getElementById('success').style.display = "none"
}

function Validacion() {
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    if (nombre == "" || email == "" || mensaje == "" ) {
        alert("Por favor, complete los campos")
    } else {
        if (validarEmail(email) == false) {
            document.getElementById('error').style.display = "block"
            document.getElementById('success').style.display = "none"
        } else {
            document.getElementById('error').style.display = "none"
            document.getElementById('success').style.display = "block"
        }
    }
}