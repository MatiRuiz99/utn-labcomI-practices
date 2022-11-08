let submitButton = document.getElementById('submit-button');
submitButton.addEventListener("click", function () {

    Validacion()
    Limpiar()
})

function validarEmail(valor) {
    if (/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(valor)){
        return true;
    } else {
        return false;
    }
}

function limpiarAlerta() {
    document.getElementById('error').style.display = "none"
    document.getElementById('success').style.display = "none"
}

function Limpiar() {
    
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('sent-message').value = "";
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