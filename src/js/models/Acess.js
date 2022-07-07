export default class Acess {
    static cardLogin() {
        const login = document.querySelector("#acess")
        login.innerText = ""
        
        const h1 = document.createElement("h1")
        const div = document.createElement("div")
        const inputEmail = document.createElement("input")
        const inputPassword = document.createElement("input")
        const btnLogin = document.createElement("button")
        const criarConta = document.createElement("p")

        h1.classList.add("title")
        h1.innerText = "Login"
        div.classList.add("container__inputs")
        inputEmail.classList.add("input")
        inputEmail.id = "email"
        inputEmail.placeholder = "Email"
        inputPassword.classList.add("input")
        inputPassword.id = "password"
        inputPassword.placeholder = "Senha"
        btnLogin.innerText = "Login"
        btnLogin.classList.add("btn")
        criarConta.innerHTML = `não tem conta <a href='' id='criar'>clique aqui</a> para criar`
        criarConta.classList.add("textUser")

        div.append(inputEmail, inputPassword)
        login.append(h1, div, btnLogin, criarConta)
    }

    static cardCadastrar() {
        const cadastrar = document.querySelector("#acess")
        cadastrar.innerText = ""
        
        const h1 = document.createElement("h1")
        const div = document.createElement("div")
        const inputUsuario = document.createElement("input")
        const inputEmail = document.createElement("input")
        const inputFotoPerfil = document.createElement("input")
        const inputPassword = document.createElement("input")
        const btnLogin = document.createElement("button")
        const contaCriada = document.createElement("p")

        h1.classList.add("title")
        h1.innerText = "Cadastrar"
        div.classList.add("container__inputs")
        inputUsuario.classList.add("input")
        inputUsuario.id = "usuario"
        inputUsuario.placeholder = "Nome de usuário"
        inputEmail.classList.add("input")
        inputEmail.id = "email"
        inputEmail.placeholder = "Email"
        inputFotoPerfil.classList.add("input")
        inputFotoPerfil.id = "fotoPerfil"
        inputFotoPerfil.placeholder = "Foto de perfil"
        inputPassword.classList.add("input")
        inputPassword.id = "password"
        inputPassword.placeholder = "Senha"
        btnLogin.innerText = "Cadastrar"
        btnLogin.classList.add("btn")
        contaCriada.innerHTML = `criou sua conta <a href='' id='logar'>clique aqui</a> para logar`
        contaCriada.classList.add("textUser")
        

        div.append(inputUsuario, inputEmail, inputFotoPerfil, inputPassword)
        cadastrar.append(h1, div, btnLogin, contaCriada)
    }
}