import dogDB from './dogDB.js'
import catDB from './catDB.js'

let id = localStorage.getItem("petId");
showDetail(id)

function showDetail(id) {
    let imageDetail = document.querySelector(".image_pet")
    let namePet = document.querySelector(".name-pet")
    let iconoHeart = document.querySelector(".iconoHeart")
    let personality = document.querySelector(".personality")
    let historyPet = document.querySelector(".history-pet")
    let contactName = document.querySelector(".name-contact")
    let race = document.querySelector(".race-pet")
    let placePet = document.querySelector(".place-pet")
    let imgContact = document.querySelector(".img-user")

    let typePet = localStorage.getItem("typePet")
    if (typePet == "dog") {
        var petId = dogDB[id]
    } else {
        var petId = catDB[id]
    }
    iconoHeart.innerHTML = ''

    var mfavourite = []
    var redy
    mfavourite = JSON.parse(localStorage.getItem("petFav"))

    if (localStorage.getItem('petFav')) {
        redy = mfavourite.filter((item2) => item2.name == petId.name)
       
        if (redy.length > 0) {
            let iconoHeart = document.querySelector(".iconoHeart")
            iconoHeart.innerHTML = ''
            iconoHeart.innerHTML += `
            <a class='heart' href='#' ><img src="img/favourite-active.png" onClick="favourite()"/></a>
        `
        } else {
            let iconoHeart = document.querySelector(".iconoHeart")
            iconoHeart.innerHTML = ''
            iconoHeart.innerHTML += `
            <a class='heart' href='#' ><img src="img/favourite.png" onClick="favourite()"/></a>`
        }
    } else {
        let iconoHeart = document.querySelector(".iconoHeart")
        iconoHeart.innerHTML = ''
        iconoHeart.innerHTML += `
        <a class='heart' href='#' ><img src="img/favourite.png" onClick="favourite()"/></a>`
    }

    imgContact.innerHTML = ''
    imageDetail.innerHTML = ''
    namePet.innerHTML = ''
    personality.innerHTML = ''
    historyPet.innerHTML = ''
    contactName.innerHTML = ''
    placePet.innerHTML = ''
    race.innerHTML = ''

    imageDetail.innerHTML += `
        <img src="${petId.image}">
    `
    namePet.innerHTML += `
    <p class="Headline1">${petId.name}
        <img src="${petId.sex}">
    </p>
    `
    race.innerHTML += `
        <div class="row">
            <div class="col-6">
                <div class="row">
                    <div class="col-2">
                        <img src="img/race.png">
                    </div>
                    <div class="col-10">
                        <p class=" body2Regular">${petId.race}</p>
                    </div>
                </div>
            </div>
            <div class="col-6">
                <div class="row">
                    <div class="col-2">
                        <img src="img/age.png">
                    </div>
                    <div class="col-10">
                        <p class="body2Regular">${petId.age}</p>
                    </div>
                </div>
            </div>
        </div>
    `

    placePet.innerHTML += `
        <div class="row">
            <div class="col-1">
                <img src="img/location.png">
            </div>
            <div class="col-8">
                <p class="body2Regular">${petId.location}</p>
            </div>
        </div>
    `

    for (let i = 0; i < 3; i++) {

        switch(petId.character[i]){
            case "loving":
                
                personality.innerHTML += `
                <div class="col cards loving me-2">
                    <div class="col-4">
                        <img class= "image-personality ps-2" src="img/loving.png">
                    </div>
                    <div class="col-4">
                        <p class="body1Regular">Cariñoso</p>
                    </div>
                </div>`
    
                break;
            case "restless":
               
                personality.innerHTML += `
                <div class="col cards restless me-2">
                    <div class="col-4">
                        <img class= "image-personality ps-3" src="img/restless.png">
                    </div>
                    <div class="col-4">
                        <p class="body1Regular ms-2">Inquieto</p>
                    </div>
                </div>`
    
                break;			
            case "tender":
    
                personality.innerHTML += `
                <div class="col cards tender me-2">
                    <div class="col-4">
                        <img class= "image-personality ps-3" src="img/tender.png">
                    </div>
                    <div class="col-4">
                        <p class="body1Regular ms-1">Tierno</p>
                    </div>
                </div>`
    
                break;			
            case "curious":
                
                personality.innerHTML += `
                <div class="col cards curious me-2">
                    <div class="col-4">
                        <img class= "image-personality ps-3" src="img/curious.png">
                    </div>
                    <div class="col-4">
                        <p class="body1Regular ms-1">Curioso</p>
                    </div>
                </div>`
    
                break;			
            case "lazy":
                
                personality.innerHTML += `
                <div class="col cards lazy me-2">
                    <div class="col-4">
                        <img class= "image-personality ps-3" src="img/lazy.png">
                    </div>
                    <div class="col-4">
                        <p class="body1Regular ms-1">Perezoso</p>
                    </div>
                </div>`
    
                break;			
            case "calm":
                
                personality.innerHTML += `
                <div class="col cards calm me-2">
                    <div class="col-4">
                        <img class= "image-personality ps-3" src="img/calm.png">
                    </div>
                    <div class="col-4">
                        <p class="body1Regular ms-1">Tranquilo</p>
                    </div>
                </div>`
    
                break;			
            case "aventure":	
            
            personality.innerHTML += `
            <div class="col cards aventure me-2">
                <div class="col-4">
                    <img class= "image-personality ps-3" src="img/aventure.png">
                </div>
                <div class="col-4">
                    <p class="body1Regular ms-1">Aventurero</p>
                </div>
            </div>`
    
                break;	
            default:
                personality.innerHTML += `
                <div class="col cards patient me-2">
                    <div class="col-4">
                        <img class= "image-personality ps-3" src="img/patient.png">
                    </div>
                    <div class="col-4">
                        <p class="body1Regular ms-1">Paciente</p>
                    </div>
                </div>`
                    
        }
        
    }
    historyPet.innerHTML += `
    <div class="row">
        <div class="col-12 Headline2">
            <p class="Headline2">Historia de ${petId.name}</p>
        </div>
    </div>
    <div class="row">
        <div class="col-12">
            <p class="body1Regular">${petId.history}</p>
        </div>
    </div>
    `

    contactName.innerHTML += `
    <p class="body2Bold">${petId.user}</p>
    `
    imgContact.innerHTML += `
    <img id="image-contact" src="${petId.userimg}">
    `
}
function contact() {
    let id = localStorage.getItem("petId");
    var petId = dogDB[id]

    localStorage.setItem("contactName",petId.user)
}
document.querySelector(".btn-connect").onclick = contact;

function favourite() {
    let typePet = localStorage.getItem("typePet")
    if (typePet == "dog") {
        var petId2 = []
        if (localStorage.getItem('petFav')) {
            var content
            petId2 = JSON.parse(localStorage.getItem("petFav"))
            content = petId2.filter((item2) => item2.name == dogDB[id].name)

            if (content.length > 0) {
                let iconoHeart = document.querySelector(".iconoHeart")
                iconoHeart.innerHTML = ''
                iconoHeart.innerHTML += `
                <a class='heart' href='#' ><img src="img/favourite.png.png" onClick="favourite()"/></a>
                `
                const index = petId2.findIndex(item => item.name === content[0].name)
                petId2.splice(index, 1)
                localStorage.setItem("petFav", JSON.stringify(petId2))

                window.location.reload();

            } else {
                let iconoHeart = document.querySelector(".iconoHeart")
                iconoHeart.innerHTML = ''
                iconoHeart.innerHTML += `
                <a class='heart' href='#' ><img src="img/favourite-active.png" onClick="favourite()"/></a>
                `
                petId2.push(dogDB[id])
                localStorage.setItem("petFav", JSON.stringify(petId2))

                window.location.reload();
            }
        } else {
            let iconoHeart = document.querySelector(".iconoHeart")
            iconoHeart.innerHTML = ''
            iconoHeart.innerHTML += `
            <a class='heart' href='#' ><img src="img/favourite.png" onClick="favourite()"/></a>
            `
            petId2.push(dogDB[id])
            localStorage.setItem("petFav", JSON.stringify(petId2))

            window.location.reload();
        }

    } else {
        var petId2 = []
        if (localStorage.getItem('petFav')) {
            var redy
            petId2 = JSON.parse(localStorage.getItem("petFav"))

            redy = petId2.filter((item2) => item2.name == catDB[id].name)
            if (redy.length > 0) {
                
                const index = petId2.findIndex(item => item.name === redy[0].name)
                petId2.splice(index, 1)
                localStorage.setItem("petFav", JSON.stringify(petId2))
                let iconoHeart = document.querySelector(".iconoHeart")
                iconoHeart.innerHTML = ''
                iconoHeart.innerHTML += `
                <a class='heart' href='#' ><img src="img/favourite.png" onClick="favourite()"/></a>
                `
                window.location.reload();
            } else {
                petId2.push(catDB[id])
                localStorage.setItem("petFav", JSON.stringify(petId2))
                let iconoHeart = document.querySelector(".iconoHeart")
                iconoHeart.innerHTML = ''
                iconoHeart.innerHTML += `
                <a class='heart' href='#' ><img src="img/favourite.png" onClick="favourite()"/></a>
                `
                window.location.reload();
            }
        } else {
            let iconoHeart = document.querySelector(".iconoHeart")
            iconoHeart.innerHTML = ''
            iconoHeart.innerHTML += `
            <a class='heart' href='#' ><img src="img/favourite.png" onClick="favourite()"/></a>
            `
            petId2.push(catDB[id])
            localStorage.setItem("petFav", JSON.stringify(petId2))
            window.location.reload();
        }
    }
}

document.querySelector(".heart").onclick = favourite;
