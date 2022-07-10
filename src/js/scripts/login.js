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
    if (event.target.id == "btnCadastrar"){
    const acess = await Acess.loginOrRegister()
    if(acess.message){
        Acess.printErr(acess.message)
    } else {
        localStorage.setItem("@kenzie.userId", acess.id)
        Acess.cardLogin()
        document.querySelector("#btnLogin").addEventListener("click", btnLoginRegister)
    }
    } else if (event.target.id == "btnLogin") {
        const acess = await Acess.loginOrRegister()
        if (acess.userId) {
            window.location.href = "../../../index.html"
        } else {
            Acess.printErr(acess.message)
        }
    }
}