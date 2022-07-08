import Acess from "../models/Acess.js"
document.querySelector(".container__log").addEventListener("click", (event) => {
    event.preventDefault()
    if (event.target.id == "criar"){
        Acess.cardCadastrar()
    } else {
        Acess.cardLogin()
    }
})
Acess.cardLogin()