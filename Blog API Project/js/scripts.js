const url = "https://jsonplaceholder.typicode.com/posts"

const loadingElement = document.querySelector("#loading")
const postsContainer = document.querySelector("#posts-container")

const postPage = document.querySelector("#post")
const postContainer = document.querySelector("#post-container")
const commentsContainer = document.querySelector("#comments-container")

// Get id from URL
const urlSearchParams = new URLSearchParams(window.location.search)
//método que permite extrair dados da URL, no caso pegaremos o ID.
const postID = urlSearchParams.get("id")

// Get all posts
async function getAllPosts() {
    
    const response = await fetch(url)
    //aguardando chegar a requisição para a url ( Link da API )
    
    const data = await response.json()
    //transformando os dados da API 

    loadingElement.classList.add("hide")
    //escondendo "loading"

    data.map(post => {
        const div = document.createElement("div")
        const title = document.createElement("h2")
        const body = document.createElement("p")
        const link = document.createElement("a")

        title.innerText = post.title
        body.innerText = post.body
        link.innerText = "Ler"
        link.setAttribute("href", `/post.html?id=${post.id}`)

        div.append(title, body, link)
        postsContainer.appendChild(div)
    })
    //fazendo um map, para ele percorrer cada dado da API
    //assim utilizando o DOM para colocar os dados na tela do usuário
    //essa api está retornando pra nós os dados "title" e "body", que no caso são os dados que iremos usar
}

// Get individual post

async function getPost(id) {
    
    //aqui estamos fazendo uma desestruturacao em um array, que contem a resposta de duas requisiçoes
    //estamos fazendo as requisiçoes junto para economizar memoria do servidor e trafego de rede
    //de maneira paralela acabamos economizando tempo também
    //por isso utilizamos o await promise.all , que nos permite aguardar mais de uma requisiçao ( que sao feitas juntas , economizando tempo, memoria, e trafego de rede)
    const [responsePost, responseComments] = await Promise.all([
        fetch(`${url}/${id}`), fetch(`${url}/${id}/comments`)
    ]) 

    const dataPost = await responsePost.json()

    const dataComments = await responseComments.json()

    loadingElement.classList.add("hide")
    postPage.classList.remove("hide")
}

if (!postID) {
    getAllPosts();
}else {
    getPost(postID)
}