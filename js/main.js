import dogDB from './dogDB.js';
import catDB from './catDB.js';


function listCats(){

    let listcat = document.querySelector(".listcat")
    let cat = catDB

    listcat.innerHTML=''

    cat.forEach(item => {

        listcat.innerHTML += `
        <div class="col pets">
                <a href="pet.html" class="enlace-view-pet">
                    <div class="card bg-dark text-white gradiente" id="pet${item.id}" data-pet=${item.id}>                
                        <img src="${item.image}" class="card-img" alt="...">
                        <div class="card-img-overlay">
                                <h5 class="card-title body2Bold">${item.name}</h5>
                                <p class="card-text body2Regular">${item.race}</p>
                        </div>
                    </div>
                </a>
            </div>`
        
    });

  
    localStorage.setItem("typePet", "cat")
        
        document.querySelector("#pet0").addEventListener('click', function () {
            localStorage.setItem("petId", 0)
        })
        document.querySelector("#pet1").addEventListener('click', function () {
            localStorage.setItem("petId", 1)
        })
        document.querySelector("#pet2").addEventListener('click', function () {
            localStorage.setItem("petId", 2)
        })
        document.querySelector("#pet3").addEventListener('click', function () {
            localStorage.setItem("petId", 3)
        }) 
       
  

}

function listDogs(){

    let listdog = document.querySelector(".listdog")
    let dog = dogDB

    listdog.innerHTML=''

    dog.forEach(item => {

        listdog.innerHTML += `
        <div class="col pets">
                <a href="pet.html" class="enlace-view-pet">
                    <div class="card bg-dark text-white gradiente" id="pet${item.id}" data-pet=${item.id}>                
                        <img src="${item.image}" class="card-img" alt="...">
                        <div class="card-img-overlay">
                                <h5 class="card-title body2Bold">${item.name}</h5>
                                <p class="card-text body2Regular">${item.race}</p>
                        </div>
                    </div>
                </a>
            </div>`
        
    });

    localStorage.setItem("typePet", "dog")
        
        document.querySelector("#pet0").addEventListener('click', function () {
            localStorage.setItem("petId", 0)
        })
        document.querySelector("#pet1").addEventListener('click', function () {
            localStorage.setItem("petId", 1)
        })
        document.querySelector("#pet2").addEventListener('click', function () {
            localStorage.setItem("petId", 2)
        })
        document.querySelector("#pet3").addEventListener('click', function () {
            localStorage.setItem("petId", 3)
        }) 
       
    

}

document.querySelector(".btn-dog").onclick = listDogs;
document.querySelector(".btn-cat").onclick = listCats;

