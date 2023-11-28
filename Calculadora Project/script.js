const sectionButtonsDaCalculadora = document.querySelector('#calculadoraButtons')
const allButtons = document.querySelectorAll(".all-buttons")
const paragrafoDisplay = document.querySelector("#p-do-display")
const sinalDeIgual = document.querySelector('#sinalDeIgual')

let numbers = [];
let calculo = [];
let sinalRecebido = null;

allButtons.forEach( (element) => {
    element.addEventListener('click', (event) => {
        pegarDadosDoElemento(event)
    })
})

sinalDeIgual.addEventListener('click', calcular())

function pegarDadosDoElemento(event) {
    const clickedElement = event.currentTarget;
    const dadoDoElemento = clickedElement.getAttribute('data-i')


    if (!isNaN(dadoDoElemento)){
        //faça algo se o dado do elemento for número
        exibirDadosNoDisplay(dadoDoElemento);
        
        numbers = [numbers + dadoDoElemento];
    }
    else {
        //faça algo se o dado do elemento NÃO for número
        exibirDadosNoDisplay(dadoDoElemento);
        
        const sequenciaNumericaDeCalculo = Number(numbers)
        calculo.push(sequenciaNumericaDeCalculo)
        numbers = []

        sinalRecebido = dadoDoElemento;
    }

}

function exibirDadosNoDisplay(dado) {
    const conteudoAtualDoDisplay = paragrafoDisplay.innerHTML;
    paragrafoDisplay.innerHTML = conteudoAtualDoDisplay + ' ' + dado;
}

function exibirResultadoFinal(dado){
    paragrafoDisplay.innerHTML = dado;
}

function calcular(){
    switch (sinalRecebido){
        case '+':
            let somaPositivo = calculo.reduce((valorPrevio, valorAtual) => valorPrevio + valorAtual);
            exibirResultadoFinal(somaPositivo)
            break
        case '-':
            let somaNegativo = calculo.reduce((valorPrevio, valorAtual) => valorPrevio - valorAtual);
            exibirResultadoFinal(somaNegativo)
            break
        case '*':
            let somaMultiplicacao = calculo.reduce((valorPrevio, valorAtual) => valorPrevio * valorAtual);
            exibirResultadoFinal(somaMultiplicacao)
            break 
        case '/':
            let somaDivisao = calculo.reduce((valorPrevio, valorAtual) => valorPrevio / valorAtual);
            exibirResultadoFinal(somaDivisao)
            break
        }
    
}

