window.onload = function () {
    validarNoEstaVacio(".smallProductName", '#productName', "Ingrese un nombre para el producto")
    validarNoEstaVacio(".smallProductPrice", '#precio', "Ingrese un Precio")
    validarNoEstaVacio(".smallCategory", '#categoria', "Ingrese una categoria")
    validarNoEstaVacio(".smallDescription", '#detalle', "Ingrese una descripcion")
    validarNoEstaVacio(".smallImage", '#file', "Ingrese una imagen")

}

function validarNoEstaVacio(smallClassName, inputId, mensajeDeError) {
    let smallText = document.querySelector(smallClassName)
    let input = document.querySelector(inputId);
    input.addEventListener("blur", () => {
        if (input.value == "") {
            smallText.innerHTML = mensajeDeError
        } else if (input.value.length < 1) {
            smallText.innerHTML = mensajeDeError
        } else {
            smallText.innerHTML = ""
        }
    })
}



