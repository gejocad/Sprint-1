let pet_favorita = []
pet_favorita = JSON.parse(localStorage.getItem("petFav"))
showFavoritos(pet_favorita)

function showFavoritos(fav) {
    let section1 = document.querySelector(".section1")
    let section2 = document.querySelector(".section2")
  
    
    section1.innerHTML = ''
    section2.innerHTML = ''
    var numCol = 1
    fav.forEach(item => {
        
        if (numCol == 1) {
            section1.innerHTML += `
            <a href="pet.html" class="enlace-view-pet">
                <div class="card bg-dark text-white gradiente" id="pet${item.id}" data-pet=${item.id}>                
                    <img src="${item.image}" class="card-img" alt="...">
                    <div class="card-img-overlay">
                            <h5 class="card-title body2Bold">${item.name}</h5>
                            <p class="card-text body2Regular">${item.race}</p>
                    </div>
                </div>
            </a>`
            numCol = 2
        }
        else {
            section2.innerHTML += `
            <a href="pet.html" class="enlace-view-pet">
                <div class="card bg-dark text-white gradiente" id="pet${item.id}" data-pet=${item.id}>
                    <img src="${item.image}" class="card-img" alt="...">
                    <div class="card-img-overlay">
                        <h5 class="card-title body2Bold">${item.name}</h5>
                        <p class="card-text body2Regular">${item.race}</p>
                    </div>
                </div>
            </a>`
            numCol = 1
        }
    });
}

