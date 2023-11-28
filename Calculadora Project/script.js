const sectionButtonsDaCalculadora = document.querySelector('#calculadoraButtons')
const allButtons = document.querySelectorAll(".all-buttons")
const paragrafoDisplay = document.querySelector("#p-do-display")

allButtons.forEach( (element) => {
    element.addEventListener('click', (event) => {
        pegarDadosDoElemento(event)
    })
})

function pegarDadosDoElemento(event) {
    const clickedElement = event.currentTarget;
    const dadoDoElemento = clickedElement.getAttribute('data-i')

    if (!isNaN(dadoDoElemento)){
        //faça algo se o dado do elemento for número
        const dadoNumerico = Number(dadoDoElemento);
        exibirDadosNoDisplay(dadoNumerico);
    }
    else {
        //faça algo se o dado do elemento NÃO for número
        exibirDadosNoDisplay(dadoDoElemento)
    }
}

function exibirDadosNoDisplay(dado) {
    const conteudoAtualDoDisplay = paragrafoDisplay.innerHTML;
    paragrafoDisplay.innerHTML = conteudoAtualDoDisplay + ' ' + dado;
}

/*
let array = [5, 10];

let resultadoPositivo = array.reduce((valorPrevio, valorAtual) => valorPrevio + valorAtual);

let resultadoNegativo = array.reduce((valorPrevio, valorAtual) => valorPrevio - valorAtual);

let resultadoMultiplicado = array.reduce((valorPrevio, valorAtual) => valorPrevio * valorAtual);

let resultadoDividido = array.reduce((valorPrevio, valorAtual) => valorPrevio / valorAtual);
*/