let $ = document
let body = $.body
let information = $.querySelector(".information")
let textResult = $.getElementById("head-text")
let footer = $.getElementById("footer")

let eventKeyElem = $.getElementById("event-key")
let eventLocationElem = $.getElementById("event-location")
let eventWhichElem = $.getElementById("event-which")
let eventCodeElem = $.getElementById("event-code")



let btnCopyEvent =  document.querySelector(".btn-copy__event")
let btnCopyLocation =  document.querySelector(".btn-copy__location")
let bgnCopyWhich = document.querySelector(".btn-copy__which")
let btnCopyCode = document.querySelector(".btn-copy__code")







// all 
document.body.addEventListener("keydown",function(e){
    e.preventDefault()
    
    information.classList.remove("d-none")
    information.classList.add("d-flex")
    footer.classList.remove("d-none")
    footer.classList.add("d-flex")

    textResult.innerHTML =  e.key
    eventKeyElem.innerHTML = e.key
    eventLocationElem.innerHTML = e.location
    eventWhichElem.innerHTML = e.which
    eventCodeElem.innerHTML = e.code


})

// Copy Methods
btnCopyEvent.addEventListener("click",function(){
    navigator.clipboard.writeText(eventKeyElem.innerHTML)

})
btnCopyLocation.addEventListener("click",function(){
    navigator.clipboard.writeText(eventLocationElem.innerHTML)
})
bgnCopyWhich.addEventListener("click",function(){
    navigator.clipboard.writeText(eventWhichElem.innerHTML)
})
btnCopyCode.addEventListener("click",function(){
    navigator.clipboard.writeText(eventCodeElem.innerHTML)
})
