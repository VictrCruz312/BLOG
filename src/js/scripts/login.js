import Acess from "../models/Acess.js"
import Requests from "../models/Requests.js"

Acess.cardLogin()
document.querySelector("#btnLogin").addEventListener("click", btnLoginRegister)

document.querySelector(".container__log").addEventListener("click", (event) => {
    event.preventDefault()
    if (event.target.id == "criar"){
        Acess.cardCadastrar()
        document.querySelector("#btnCadastrar").addEventListener("click", btnLoginRegister)
    } else if(event.target.id == "logar"){
        Acess.cardLogin()
        document.querySelector("#btnLogin").addEventListener("click", btnLoginRegister)
    }
})
async function btnLoginRegister(event) {
    if (event.target.id == "btnLogin" || event.target.id == "btnCadastrar"){
    console.log(await Acess.loginOrRegister())
    }
}