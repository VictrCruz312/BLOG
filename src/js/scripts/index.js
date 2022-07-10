import Posts from "../models/Posts.js";
import Requests from "../models/Requests.js"

function eventLogout() {
    document.querySelector(".cabecalho__logout").addEventListener("click", () => {
        localStorage.clear()
    })
}

function eventPaginas() {
    document.querySelector(".posts__trocarPage").addEventListener("click", async (event) => {
        const page = document.querySelector(".trocarPage__numberPage")
        if (event.target.id == "anteriorPage") {
            if (parseInt(page.id.split("-")[1]) != 1){
                const idPage = parseInt(page.id.split("-")[1]) - 1
                await Posts.loadPosts(await Requests.getPage(idPage))
                page.id = `Page-${idPage}`
                return page.innerText = `Página atual: ${idPage}`
    
            }
        } else if (event.target.id == "proximaPage") {
            const idPage = parseInt(page.id.split("-")[1]) + 1
            await Posts.loadPosts(await Requests.getPage(idPage))
            page.id = `Page-${idPage}`
            return page.innerText = `Página atual: ${idPage}`
        }
    })
}

function eventAddPost() {
    document.querySelector(".posts__Create").addEventListener("click", async (event) => {
        if (event.target.id == "sendPost") {
            const textPost = document.querySelector("#textPost")
            await Requests.addPost({content: textPost.value})
            const page = document.querySelector(".trocarPage__numberPage")
            textPost.value = "";
            await Posts.loadPosts(await Requests.getPage(page.id.split("-")[1]))
        }
    })
}

// function eventEditAndDelete() {
//     document.querySelector(".post__containerBtns").addEventListener("click", async(event) => {
//         const eventId = event.target.id.split("-")
//         if (eventId[0] == "idPostEdit"){
//             Posts.modalEdit(await Requests.getPost(parseInt(eventId[1])))
//         } else if (eventId[0] == "idPostDelete"){

//         }
//     })
// }

await Posts.loadPosts(await Requests.getPage(1))
eventPaginas()
eventLogout()
eventAddPost()
// eventEditAndDelete()