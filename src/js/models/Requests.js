export default class Requests {

    static base_url = 'https://blog-m2.herokuapp.com/'

    static async registerUsers(data) {
        return await fetch(`${Requests.base_url}users/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .catch(err => console.log(err))
    }

    static async userLogin(data) {
        return await fetch(`${Requests.base_url}users/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(response => {
            localStorage.setItem("@kenzie-token", response.token)
            localStorage.setItem("@kenzie-userId", response.userId)
            return response
        }).catch(err => {
            console.log(err)
        })
    }

    static async getUsersById(idUser) {
        return await fetch(`${Requests.base_url}users/${idUser}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("@kenzie-token")}`,
            }
        })
        .then(response => response.json())
        .catch(err => console.log(err))
    }

    static async getPage(numPage) {
        return await fetch(`${Requests.base_url}posts?page=${numPage}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("@kenzie-token")}`,
            }
        })
        .then(response => response.json())
        .catch(err => console.log(err))
    }

    static async getPost(idPost) {
        return await fetch(`${Requests.base_url}posts/${idPost}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("@kenzie-token")}`,
            }
        })
        .then(response => response.json())
        .catch(err => console.log(err))
    }

    static async addPost(content) {
        return await fetch(`${Requests.base_url}posts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("@kenzie-token")}`,
            },
            body: JSON.stringify(content)
        })
        .then(response => response.json())
        .catch(err => console.log(err))
    }

    static async editPost(idPost, content) {
        return await fetch(`${Requests.base_url}posts/${idPost}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("@kenzie-token")}`,
            },
            body: JSON.stringify(content)
        })
        .then(response => response.json())
        .catch(err => console.log(err))
    }

    static async deletePost(idPost) {
        await fetch(`${Requests.base_url}posts/${idPost}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("@kenzie-token")}`,
            }
        })
    }
}