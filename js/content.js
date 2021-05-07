import messageDB from './messageDB.js'

let id = localStorage.getItem("contactId")
let nameC = localStorage.getItem("contactName")

showMessages(id)
function showMessages(id) {
    let dataContact = document.querySelector(".contact")
    let release = document.querySelector(".contain-message")
    var messages = messageDB
    messages.forEach(item => {
        if (nameC == item.user) {
            var id2 = item.id
            var messages2 = messageDB[id2]
            console.log(id2)
            dataContact.innerHTML = ''
            release.innerHTML = ''

            dataContact.innerHTML += `
            <div class="row">
                <div class="col mt-3 image-contact mb-3">
                    <img src="${messages2.image}">
                    <div class="col mt-1">
                        <p class="body1Bold">${messages2.user}</p>
                    </div>
                    <a class='get-back' href='menssage.html'><img src="img/back.png" /></a>  
                </div>
            </div>
            `
            for (let i = 0; i < messages2.sent.length; i++) {
                release.innerHTML += `
            <p class="body2Regular time-sent">${messages2.time_sent[i]}</p>
            <div class="message-sent row">
                <p class="main-message">${messages2.sent[i]}</p>
            </div>
            <p class="body2Regular time-received">${messages2.time_received[i]}</p>
            <div class="message-received row">
                <p class="main-message">${messages2.received[i]}</p>
            </div>
        `
            }
        }
        else {
            var messages3 = messageDB[id]
            //console.log(messages3)
            dataContact.innerHTML = ''
            release.innerHTML = ''

            dataContact.innerHTML += `
        <div class="row">
            <div class="col mt-3 image-contact mb-3">
                <img src="${messages3.image}">
                <div class="col mt-1">
                    <p class="body1Bold">${messages3.user}</p>
                </div>
                <a class='get-back' href='messenger.html'><img src="img/back.png" /></a>  
            </div>
        </div>
        `
            for (let i = 0; i < messages3.sent.length; i++) {
                release.innerHTML += `
        <p class="body2Regular time-sent">${messages3.time_sent[i]}</p>
        <div class="message-sent row">
            <p class="main-message">${messages3.sent[i]}</p>
        </div>
        <p class="body2Regular time-received">${messages3.time_received[i]}</p>
        <div class="message-received row">
            <p class="main-message">${messages3.received[i]}</p>
        </div>
        `
            }
        }
    });
   
    
}
