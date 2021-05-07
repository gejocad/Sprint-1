import messageDB from './messageDB.js'

function showMessages() {

    let enlaceMessages = document.querySelector(".connect-message")
    let messages = messageDB

    enlaceMessages.innerHTML = ''

    messages.forEach(item => {

        var latest_received = messages[messages.length - 1].time_received
        var index = latest_received.length - 1

        enlaceMessages.innerHTML += `
            <div class="message row mb-4" id="contact${item.id}">
                <div class="col-2">
                    <div class="col-4 img-user">
                        <img id="image-contact" src="${item.image}">
                    </div>
                </div>
                <div class="col-9">
                    <div class="row">
                        <div class="col-10 name-user">
                            <p class="body1Bold user">${item.user}</p>
                        </div>
                        <div class="col-2 time-message">
                            <p class="caption time">${item.time_received[index]}</p>
                        </div>
                    </div>
                    <div class="col main-message">
                        <p class="body2Regular contain-message">${item.received[index].substring(0, 55)}...</p>
                    </div>
                </div>
                <div class="col-1">
                    <img class="ver-message" src="img/right.png" alt="">
                </div>
            </div>`
    })
}
window.addEventListener('load', e => {
    document.querySelector("#contact0").addEventListener('click', function () {
        localStorage.setItem("contactId", 0)
    })
    document.querySelector("#contact1").addEventListener('click', function () {
        localStorage.setItem("contactId", 1)
    })
   
})

showMessages()

