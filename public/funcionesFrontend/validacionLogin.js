window.onload = function () {

    let smallEmailLogin = document.querySelector(".smallEmailLogin")
    let emailLogin = document.querySelector('#email');
    emailLogin.addEventListener("blur", () => {
        if (emailLogin.value == "") {
            smallEmailLogin.innerHTML = "Ingrese un email"
        } else {
            smallEmailLogin.innerHTML = ""
        }
    })


    let smallPasswordLogin = document.querySelector(".smallPasswordLogin")
    let passwordLogin = document.querySelector('#password');
    passwordLogin.addEventListener("blur", () => {
        if (passwordLogin.value == "") {
            smallPasswordLogin.innerHTML = "Ingrese una contraseña"
        } else {
            smallPasswordLogin.innerHTML = ""
        }
    })
}