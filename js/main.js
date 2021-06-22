var listaGames = []

const url = 'https://projeto-final-ppw.herokuapp.com/api/112135'
var section = document.querySelector("#listaGames")
var form = document.querySelector("#formCadastro")
var inputName = document.querySelector("#name")
var inputLink = document.querySelector("#link")
var inputPhoto = document.querySelector("#photo")
var inputData = document.querySelector("#data")
var inputTag = document.querySelector("#tag")
form.addEventListener('submit' , Cadastro)

function Cadastro(evento){
    evento.preventDefault()
    let game = {
        "name": inputName.value,
        "link": inputLink.value,
        "photo" : inputPhoto.value,
        "data" : inputData.value,
        "tag" : inputTag.value
        
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
    section.textContent = ''
    for(const game of listaGames){

        const div = document.createElement('div')
        div.innerHTML =`<div class="game">
        <img class="game-photo" src="${game.photo}">
        <h2 class="game-name">${game.name} <span class="tag">(${game.tag})</span></h2>
        <p><strong>Ano:</strong> ${game.data}</p>
        ${game.link}
        </div>
        `  
        const botao = document.createElement('button')
        botao.textContent = "Desativar"
        botao.value = game._id
        botao.onclick = deletaGames

        div.appendChild(botao)
        section.appendChild(div)
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