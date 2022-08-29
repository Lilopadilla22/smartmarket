window.onload = function () {
    validarFront(".smallProductEditName", '#nombre', "Ingrese un nombre para el producto");
    validarFront(".smallProductEditPrice", '#precio', "Ingrese un precio para el producto");
    validarFront(".smallProductEditCategoria", '#categoria', "Ingrese una categoria para el producto");
    validarFront(".smallProductEditDescription", '#detalle', "Ingrese una descripcion para el producto");
    validarFront(".smallProductEditImage", "#imagen", "Si no agrega imagen, se mantendra la del producto")
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