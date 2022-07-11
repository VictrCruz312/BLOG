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
        inputEmail.type = "email"
        inputEmail.required = true

        inputPassword.classList.add("input")
        inputPassword.id = "password"
        inputPassword.name = "password"
        inputPassword.type = "password"
        inputPassword.placeholder = "Senha"
        inputPassword.required = true

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
        inputUsuario.type = "text"
        inputUsuario.placeholder = "Nome de usuário"
        inputUsuario.required = true

        inputEmail.classList.add("input")
        inputEmail.id = "email"
        inputEmail.type = "email"
        inputEmail.placeholder = "Email"
        inputEmail.required = true

        inputFotoPerfil.classList.add("input")
        inputFotoPerfil.id = "avatarUrl"
        inputFotoPerfil.type = "text"
        inputFotoPerfil.placeholder = "Foto de perfil"
        inputFotoPerfil.required = true

        inputPassword.classList.add("input")
        inputPassword.id = "password"
        inputPassword.type = "password"
        inputPassword.placeholder = "Senha"
        inputPassword.required = true

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
            return await Requests.userLogin(dados)
        }
    }

    static async printErr(messageErr) {
        const divErr = document.querySelector(".err")
        divErr.innerText = ""
        const err = document.createElement("h2")
        err.innerText = messageErr
        divErr.insertAdjacentHTML("afterbegin", `
        <h2>${messageErr}</h2>
        `)
    }
}