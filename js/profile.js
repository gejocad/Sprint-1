import profileDB from './profileDB.js'

function mostrasDatosUser() {

    if (localStorage.getItem('User')) {
        var user = JSON.parse(localStorage.getItem("User"))
        let data = document.querySelector(".data")
        data.innerHTML = ''
        data.innerHTML += `
            <p class="body1Regular name">${user[0].name + ' ' + user[0].lastname}</p>
            <p class="buttom btn-edit">Editar Cuenta</p>
            `
        document.querySelector("#name").value = user[0].name
        document.querySelector("#lastName").value = user[0].lastname
        document.querySelector("#email").value = user[0].email

        var name = document.getElementById("name");
        var lastName = document.getElementById("lastName");
        var email = document.getElementById("email");
        var botonEnviar = document.getElementById("formUser");

        botonEnviar.addEventListener('submit', (e) => {

            e.preventDefault()
            var user = []
            user[0] = {
                name: name.value,
                lastname: lastName.value,
                email: email.value,
            }
            localStorage.setItem("User", JSON.stringify(user));
        })
    } else {
        let data = document.querySelector(".data")
        let user = profileDB
        data.innerHTML = ''
        data.innerHTML += `
            <p class="body1Regular name">${user[0].name + ' ' + user[0].lastname}</p>
            <p class="buttom btn-edit">Editar Cuenta</p>
            `
        document.querySelector("#name").value = user[0].name
        document.querySelector("#lastName").value = user[0].lastname
        document.querySelector("#email").value = user[0].email

        var name = document.getElementById("name");
        var lastName = document.getElementById("lastName");
        var email = document.getElementById("email");
        var botonEnviar = document.getElementById("formUser");

        localStorage.setItem("User", JSON.stringify(user));

        botonEnviar.addEventListener('submit', (e) => {

            e.preventDefault()
            var user = []
            user[0] = {
                name: name.value,
                lastname: lastName.value,
                email: email.value,
            }
            localStorage.setItem("User", JSON.stringify(user));
        })
    }
}
mostrasDatosUser()