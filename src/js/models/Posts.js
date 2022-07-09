import Requests from "./Requests.js"

export default class Posts {
    static async uploadPost(dataPost) {
        const listPosts = document.querySelector(".posts__listPosts")
        listPosts.innerText = ""
        const userImg = document.querySelector("#userImg")
        const userName = document.querySelector("#userName")

        if (dataPost.message) {
            Posts.errLoginUnautorized("você precisa fazer login para acessar os posts")
            const logoutLogin = document.querySelector(".cabecalho__logout")
            logoutLogin.innerText = "login"
        } else {
            const user = await Requests.getUsersById(localStorage.getItem("@kenzie-userId"))

            userImg.src = user.avatarUrl
            userName.innerText = user.username

            dataPost.data.forEach(post => {
                const datePost = `
                ${post.createdAt.split("-")[2][0]}
                ${post.createdAt.split("-")[2][1]}/
                ${post.createdAt.split("-")[1]}/
                ${post.createdAt.split("-")[0]}`

                listPosts.insertAdjacentHTML("afterbegin", `
                <li class="listPosts__post">
                    <figure class="post__figure"><img class="post__img" src="${post.user.avatarUrl}" alt=""></figure>
                    <div class="post__containerPost">
                        <h2 class="post__title">${post.user.username}</h2>
                        <p class="post__text">${post.content}</p>
                    </div>
                    <div class="post__containerBtns">
                        <button class="post__btnEdit" id= "idPost-${post.id}">Editar</button>
                        <button class="post__btnDelete" id= "idPost-${post.id}">Apagar</button>
                        <span class="post__date">${datePost}</span>
                    </div>
                </li>`
            )})
        }
    }

    static errLoginUnautorized(err) {
        const listPosts = document.querySelector(".posts__listPosts")
        listPosts.innerText = ""
        listPosts.insertAdjacentHTML("afterbegin", `
            <h2>${err}</h2>
        `)
    }
}