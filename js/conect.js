import dogDB from './dogDB.js'
import catDB from './catDB.js'

let id = localStorage.getItem("petId");
showDetail(id)

function showDetail(id) {
    let contact = document.querySelector(".image-contact")

    let type_pet = localStorage.getItem("typePet")
    if (type_pet == "dog") {
        var petId = dogDB[id]
    } else {
        var petId = catDB[id]
    }

    contact.innerHTML = ''

    contact.innerHTML += `
    <img src="${petId.userimg}">
    <div class="col mt-1">
        <p class="body1Bold">${petId.user}</p>
    </div>
    <a class='get-back' href='pet.html' ><img src="img/back.png"/></a>
    `

}