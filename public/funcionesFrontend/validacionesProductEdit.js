window.onload = function () {
    validarNoEstaVacio(".smallProductEditName", '#nombre', "Ingrese un nombre para el producto");
    validarNoEstaVacio(".smallProductEditPrice", '#precio', "Ingrese un precio para el producto");
    validarNoEstaVacio(".smallProductEditCategoria", '#categoria', "Ingrese una categoria para el producto");
    validarNoEstaVacio(".smallProductEditDescription", '#detalle', "Ingrese una descripcion para el producto");
}


function validarNoEstaVacio(smallClassName, inputId, mensajeDeError) {
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