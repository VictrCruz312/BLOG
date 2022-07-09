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
    const acess = await Acess.loginOrRegister()
    if(acess.message){
        Acess.printErr(acess.message)
    } else {
        localStorage.setItem("@kenzie.userId", acess.id)
        Acess.cardLogin()
        document.querySelector("#btnLogin").addEventListener("click", btnLoginRegister)
    }
    }
}

let content = {
    "content": "eu sou um novo post teste"
}

// console.log(await Requests.addPost(content))
// console.log(await Requests.getPage(1))
// console.log(await Requests.deletePost(4499))
// console.log(await Requests.getPage(1))