import Requests from "./Requests.js"
import Posts from "./Posts.js"

export default class Acess {
    static cardLogin() {
        const login = document.querySelector("#acess")
        login.innerText = ""
        
        const h1 = document.createElement("h1")
        const form = document.createElement("form")
        const inputEmail = document.createElement("input")
        const inputPassword = document.createElement("input")
        const btnLogin = document.createElement("button")
        const criarConta = document.createElement("p")

        h1.classList.add("title")
        h1.innerText = "Login"
        form.classList.add("form__inputs")

        inputEmail.classList.add("input")
        inputEmail.id = "email"
        inputEmail.placeholder = "Email"
        inputEmail.name = "email"
        inputEmail.type = "text"

        inputPassword.classList.add("input")
        inputPassword.id = "password"
        inputPassword.name = "password"
        inputPassword.type = "text"
        inputPassword.placeholder = "Senha"

        btnLogin.innerText = "Login"
        btnLogin.classList.add("btn")
        btnLogin.type = "submit"
        btnLogin.id = "btnLogin"
        criarConta.innerHTML = `não tem conta <a href='' id='criar'>clique aqui</a> para criar`
        criarConta.classList.add("textUser")

        form.append(inputEmail, inputPassword, btnLogin)
        login.append(h1, form, criarConta)
    }

    static cardCadastrar() {
        const cadastrar = document.querySelector("#acess")
        cadastrar.innerText = ""
        
        const h1 = document.createElement("h1")
        const form = document.createElement("form")
        const inputUsuario = document.createElement("input")
        const inputEmail = document.createElement("input")
        const inputFotoPerfil = document.createElement("input")
        const inputPassword = document.createElement("input")
        const btnCadastrar = document.createElement("button")
        const contaCriada = document.createElement("p")

        h1.classList.add("title")
        h1.innerText = "Cadastrar"
        form.classList.add("form__inputs")
        inputUsuario.classList.add("input")
        inputUsuario.id = "username"
        inputUsuario.placeholder = "Nome de usuário"
        inputEmail.classList.add("input")
        inputEmail.id = "email"
        inputEmail.placeholder = "Email"
        inputFotoPerfil.classList.add("input")
        inputFotoPerfil.id = "avatarUrl"
        inputFotoPerfil.placeholder = "Foto de perfil"
        inputPassword.classList.add("input")
        inputPassword.id = "password"
        inputPassword.placeholder = "Senha"
        btnCadastrar.innerText = "Cadastrar"
        btnCadastrar.classList.add("btn")
        btnCadastrar.type = "submit"
        btnCadastrar.id = "btnCadastrar"
        contaCriada.innerHTML = `criou sua conta <a href='' id='logar'>clique aqui</a> para logar`
        contaCriada.classList.add("textUser")
        

        form.append(inputUsuario, inputEmail, inputFotoPerfil, inputPassword)
        cadastrar.append(h1, form, btnCadastrar, contaCriada)
    }

    static async loginOrRegister() {
        const inputs = document.querySelectorAll(".input")
        const dados = {}

        inputs.forEach(input => {
            dados[input.id] = input.value
            input.value = ""
        })

        if (inputs.length > 2) {
            return await Requests.registerUsers(dados)
        } else {
            await Requests.userLogin(dados)
            window.location.href = "../../../index.html"
        }
    }

    static async printErr(messageErr) {
        console.log(messageErr)
        const body = document.querySelector("body")
        const err = document.createElement("h2")
        err.innerText = messageErr
        body.insertAdjacentHTML("afterbegin", `
        <h2>${messageErr}</h2>
        `)
    }
}