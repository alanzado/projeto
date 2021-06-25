const url = "https://projeto-final-ppw.herokuapp.com/api/112135";

var section = document.querySelector("#listaGames");
var inputName = document.querySelector("#name");
var inputLink = document.querySelector("#link");
var inputPhoto = document.querySelector("#photo");
var inputData = document.querySelector("#data");
var inputTag = document.querySelector("#tag");
var inputDesc = document.querySelector("#desc");

function imprimeGames() {
    section.textContent = "";
    for (const game of listaGames) {
        const div = document.createElement("div");
        div.innerHTML = `
        <div class="game">
        <img href=${game.link} class="game-photo" src="${game.photo}">
        <h2 class="game-name">${game.name} <span class="tag">(${game.tag})</span></h2>
        <p><strong>Lançamento:</strong> ${game.data}</p>
        <p><strong>Desconto:</strong> ${game.desc}</p>
        <p><strong><a target="_blank" href=${game.link} >CLIQUE PARA RESGATAR</a></strong></p>
        </div>
        `;
        section.appendChild(div);
    }
}

/*
function age(data) {
    let calculatedAge = new Date().getFullYear() - data;
    if (calculatedAge == 1) {
        return "ha 1 ano";
    } else if (calculatedAge == 0) {
        return "Novo";
    } else {
        return `ha ${calculatedAge} anos`;
    }
}*/

function recebeGames() {
    const requisicao = fetch(url);
    requisicao.then(function (resposta) {
        const json = resposta.json();
        json.then(function (games) {
            listaGames = games;
            imprimeGames();
        });
    });
}

recebeGames();