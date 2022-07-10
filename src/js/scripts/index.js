import Posts from "../models/Posts.js";
import Requests from "../models/Requests.js"

document.querySelector(".cabecalho__logout").addEventListener("click", () => {
    localStorage.clear()
})

document.querySelector(".posts__trocarPage").addEventListener("click", async (event) => {
    const page = document.querySelector(".trocarPage__numberPage")
    if (event.target.id == "anteriorPage") {
        if (parseInt(page.id.split("-")[1]) != 1){
            const idPage = parseInt(page.id.split("-")[1]) - 1
            await Posts.uploadPost(await Requests.getPage(idPage))
            page.id = `Page-${idPage}`
            return page.innerText = `Página atual: ${idPage}`

        }
    } else if (event.target.id == "proximaPage") {
        const idPage = parseInt(page.id.split("-")[1]) + 1
        await Posts.uploadPost(await Requests.getPage(idPage))
        page.id = `Page-${idPage}`
        return page.innerText = `Página atual: ${idPage}`
    }
})


await Posts.uploadPost(await Requests.getPage(1))