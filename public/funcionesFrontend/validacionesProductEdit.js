window.onload = function () {
    validarNoEstaVacio(".smallProductEditName", '#nombre', "Ingrese un nombre para el producto")
}

function validarNoEstaVacio(smallClassName, inputId, mensajeDeError) {
    let smallText = document.querySelector(smallClassName)
    let input = document.querySelector(inputId);
    input.addEventListener("blur", () => {
        if (input == "") {
            smallText.innerHTML = mensajeDeError
        } else if (input.value.length < 1) {
            smallText.innerHTML = mensajeDeError
        }
    })
}

