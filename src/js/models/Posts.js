import Requests from "./Requests.js"

export default class Posts {
    static async loadPosts(dataPost) {
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

            dataPost.data.reverse().forEach((post) => {
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
                </li>
                `)

                const postType = document.querySelector(".listPosts__post")
                if (post.user.id == parseInt(localStorage.getItem("@kenzie-userId"))){
                    postType.insertAdjacentHTML("beforeend", `
                        <div class="post__containerBtns">
                            <button class="post__btnEdit" id= "idPostEdit-${post.id}">Editar</button>
                            <button class="post__btnDelete" id= "idPostDelete-${post.id}">Apagar</button>
                            <span class="post__date">${datePost}</span>
                        </div>
                    `)
                    Posts.eventPosts()
                } else {
                    postType.insertAdjacentHTML("beforeend", `
                        <div class="post__containerBtns">
                            <span class="post__date">${datePost}</span>
                        </div>
                    `)
                }
            })
        }
    }

    static eventPosts() {
        document.querySelector(".post__containerBtns").addEventListener("click", async(event) => {
            const eventId = event.target.id.split("-")
            const page = document.querySelector(".trocarPage__numberPage")
            if (eventId[0] == "idPostEdit"){
                Posts.modalEdit(await Requests.getPost(parseInt(eventId[1])))
            } else if (eventId[0] == "idPostDelete"){
                await Requests.deletePost(eventId[1])
                await Posts.loadPosts(await Requests.getPage(page.id.split("-")[1]))

            }
        })
    }

    static errLoginUnautorized(err) {
        const listPosts = document.querySelector(".posts__listPosts")
        listPosts.innerText = ""
        listPosts.insertAdjacentHTML("afterbegin", `
            <h2>${err}</h2>
        `)
    }

    static modalEdit(postEdit) {
        if (postEdit.user.id == localStorage.getItem("@kenzie-userId")){
            const editPost = document.querySelector(".modalEdit")
            editPost.style.display = "block"
            const div = document.createElement("div")
            const btnSair = document.createElement("button")
            const textarea = document.createElement("textarea")
            const button = document.createElement("button")
    
            div.classList.add("modal__editPost")
            btnSair.classList.add("editPost__btnSair")
            btnSair.insertAdjacentHTML("afterbegin", `<img src="./src/assets/icon-sair.png" alt=""id="sairDoModal">`)
            textarea.value = postEdit.content
            button.type = "submit"
            button.id = `idPost-${postEdit.id}`
            button.classList.add("editPost__btnSalvar")
            button.innerText = "salvar"
    
            div.append(btnSair, textarea, button)
            editPost.append(div)
            document.querySelector("#sairDoModal").addEventListener("click", () => {
                editPost.innerText = ""
            })
            document.querySelector(".modal__editPost").addEventListener("click", async (event) => {
                const valueText = document.querySelector(".modal__editPost textarea")
                const page = document.querySelector(".trocarPage__numberPage")
    
                if (event.target.className == "editPost__btnSalvar"){
                    await Requests.editPost(postEdit.id, {content: valueText.value})
                    editPost.innerText = ""
                    await Posts.loadPosts(await Requests.getPage(page.id.split("-")[1]))
                }
            })
        }
    }
}