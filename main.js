var listaGames = []

const url = 'https://projeto-final-ppw.herokuapp.com/api/112135'
var ul = document.querySelector("#listaGames")
var form = document.querySelector("#formCadastro")
var inputName = document.querySelector("#name")
var inputLink = document.querySelector("#link")
form.addEventListener('submit' , cadastro)

function cadastro(evento){
    evento.preventDefault()
    let game = {
        "name": inputName.value,
        "link": inputLink.value
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
        console.log(resposta.statusText)
        console.log(resposta.status)
        recebeGames()
    })
}

function deletaGames(){
}

function imprimeGames(){
    ul.textContent = ''
    for(const game of listaGames){
        const li = document.createElement('li')
        li.textContent = `${game.name} (${game.link})`
        
        const botao = document.createElement('button')
        botao.textContent = "Deletar"
        botao.onclick = deletaGames
        li.appendChild(botao)
        ul.appendChild(li)
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