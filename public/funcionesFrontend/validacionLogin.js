window.onload = function () {

    let smallEmailLogin = document.querySelector(".smallEmailLogin")
    let emailLogin = document.querySelector('#email');
    emailLogin.addEventListener("blur", () => {
        if (emailLogin.value == "") {
            smallEmailLogin.innerHTML = "Ingrese un email"
        } else if (emailLogin.value.length < 2) {
            smallEmailLogin.innerHTML = "Ingrese un email"
        } else {
            smallEmailLogin.innerHTML = ""
        }
    })


    let smallPasswordLogin = document.querySelector(".smallPasswordLogin")
    let passwordLogin = document.querySelector('#password');
    passwordLogin.addEventListener("blur", () => {
        if (passwordLogin == "") {
            smallPasswordLogin.innerHTML = "Ingrese una contraseña"
        } else if (passwordLogin.value.length < 1) {
            smallPasswordLogin.innerHTML = "Ingrese una contraseña"
        } else {
            smallPasswordLogin.innerHTML = ""
        }
    })
}