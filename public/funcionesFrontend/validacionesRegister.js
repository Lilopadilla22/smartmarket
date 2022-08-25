window.onload = function () {

    let smallFulname = document.querySelector(".smallFullname")
    console.log(smallFulname)
    let full_name = document.querySelector('#username');
    full_name.addEventListener("blur", () => {
        if (full_name.value == "") {
            smallFulname.innerHTML = "El campo nombre y apellido está vacio"
        } else if (full_name.value.length < 2) {
            smallFulname.innerHTML = "El campo nombre y apellido debe tener al menos 2 carácteres"
        } else {
            smallFulname.innerHTML = ""
        }
    })

    let smallEmail = document.querySelector(".smallEmail")
    let email = document.querySelector('#email');
    email.addEventListener("blur", () => {
        if (email == "") {
            smallEmail.innerHTML = "El campo email está vacio"
        } else if (email.value.length < 1) {
            smallEmail.innerHTML = "El campo email no puede estar vacío"
        } else {
            smallEmail.innerHTML = ""
        }

    })

    let smallPassword = document.querySelector(".smallPassword")
    let password = document.querySelector('#password');
    password.addEventListener("blur", () => {

        if (password.value == "") {
            smallPassword.innerHTML = "El campo contraseña está vacio";
        } else if (password.value.length < 8) {
            smallPassword.innerHTML = "El campo contraseña debe tener al menos 8 carácteres"
        } else {
            smallPassword.innerHTML = ""
        }

    })

    let smallRepeatPassword = document.querySelector(".smallRepeatPassword")
    let repeatPassword = document.querySelector('#repeatPassword');
    repeatPassword.addEventListener("blur", () => {

        if (repeatPassword == "") {
            smallRepeatPassword.innerHTML = "El campo repetir contraseña está vacio";
        } else if (repeatPassword.value != password.value) {
            smallRepeatPassword.innerHTML = "El campo repetir contraseña es incorrecto"
        } else {
            smallRepeatPassword.innerHTML = ""
        }
    })

    let smallCountry = document.querySelector(".smallCountry")
    let country = document.querySelector('#pais');
    country.addEventListener("blur", () => {

        if (country == "") {
            smallCountry.innerHTML = "El campo país está vacio"
        } else if (country.value.length < 1) {
            smallCountry.innerHTML = "El campo pais no puede estar vacío"
        } else {
            smallCountry.innerHTML = ""
        }
    })

    let smallAddress = document.querySelector(".smallAddress")
    let address = document.querySelector('#direccion');
    address.addEventListener("blur", () => {

        if (address == "") {
            smallAddress.innerHTML = "El campo dirección está vacio";
        } else if (address.value.length < 5) {
            smallAddress.innerHTML = "El campo dirección debe tener al menos 5 carácteres"
        } else {
            smallAddress.innerHTML = ""
        }
    })


}