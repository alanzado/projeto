var listaGames = []

const url = 'https://projeto-final-ppw.herokuapp.com/api/112135'
var ul = document.querySelector("#listaGames")
var form = document.querySelector("#formCadastro")
var inputName = document.querySelector("#name")
var inputLink = document.querySelector("#link")
var inputPhoto = document.querySelector("#photo")
var img = new Image("#photo")
form.addEventListener('submit' , Cadastro)

function Cadastro(evento){
    evento.preventDefault()
    let game = {
        "name": inputName.value,
        "link": inputLink.value,
        "photo" : inputPhoto.value
    }
    
    let texto = JSON.stringify(game)

    const opcoes = {
        method: "POST",
        body: texto,
        headers: {
            "content-type": "application/json"
        }
    }
    const requisicao = fetch(url, opcoes)
    requisicao.then(function(resposta){
        console.log(resposta.status)
        recebeGames()
    })
}

function deletaGames(evento){
    const id = evento.target.value
    const opcoes = {
        "method": "DELETE"
    }

    const requisicao = fetch(url + "/" + id, opcoes)
    requisicao.then(function(resposta){
        if(resposta.status == 200){
            recebeGames()
        }
    })
}

function imprimeGames(){
    ul.textContent = ''
    for(const game of listaGames){

        const div = document.createElement('div')
        div.innerHTML =`<img src=${game.photo}>
        <h1>${game.name}</h1>
        <p>${game.link}</p>        
        `  
        const botao = document.createElement('button')
        botao.textContent = "Desativar"
        botao.value = game._id
        botao.onclick = deletaGames

        div.appendChild(botao)
        ul.appendChild(div)
    }
}

function recebeGames(){
    const requisicao = fetch(url)
    requisicao.then( function(resposta){
        const json = resposta.json()
        json.then(function(games){
            listaGames = games
            imprimeGames()
        })
    })
}

recebeGames()