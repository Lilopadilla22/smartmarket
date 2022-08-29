window.onload = function () {
    validarFront(".smallProductName", '#productName', "Ingrese un nombre para el producto")
    validarFront(".smallProductPrice", '#precio', "Ingrese un Precio")
    validarFront(".smallCategory", '#categoria', "Ingrese una categoria")
    validarFront(".smallDescription", '#detalle', "Ingrese una descripcion")
    validarFront(".smallImage", '#file', "Ingrese una imagen")

}

function validarFront(smallClassName, inputId, mensajeDeError) {
    let smallText = document.querySelector(smallClassName)
    let input = document.querySelector(inputId);
    input.addEventListener("blur", () => {
        if (input.value == "") {
            smallText.innerHTML = mensajeDeError
        } else {
            smallText.innerHTML = ""
        }
    })
}



