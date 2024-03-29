const sectionButtonsDaCalculadora = document.querySelector('#calculadoraButtons')
const allButtons = document.querySelectorAll(".all-buttons")
const paragrafoDisplay = document.querySelector("#p-do-display")
const sinalDeIgual = document.querySelector('#sinalDeIgual')

let operacoes = [null];
let sequenciaDeOperacoes = [];
let sinalRecebido = null;

allButtons.forEach( (element) => {
    element.addEventListener('click', (event) => {
        pegarDadosDoElemento(event)

    })
})

sinalDeIgual.addEventListener('click', calcular)

function pegarDadosDoElemento(event) {
    const clickedElement = event.currentTarget;
    const dadoDoElemento = clickedElement.getAttribute('data-i')

    if (!isNaN(dadoDoElemento)){
        //faça algo se o dado do elemento FOR um número
        exibirDadosNoDisplay(dadoDoElemento);
        tratamentoDeDadosParaNumeros(dadoDoElemento);
    }
    else {
        //faça algo se o dado do elemento NÃO for número
        exibirDadosNoDisplay(dadoDoElemento);
        tratamentoDeDadosParaSinais(dadoDoElemento);
    }
}

function exibirDadosNoDisplay(dado) { const conteudoAtualDoDisplay = paragrafoDisplay.innerHTML; paragrafoDisplay.innerHTML = conteudoAtualDoDisplay + ' ' + dado; }



function tratamentoDeDadosParaNumeros(dado){ operacoes = [operacoes + dado]; }

function tratamentoDeDadosParaSinais(dado){
    sequenciaDasOperacoesDoCalculo()
    obterSinal(String(dado));
}

function sequenciaDasOperacoesDoCalculo(){ 
    const sequenciaNumericaDeCalculo = Number(operacoes.join(''))
    console.log(sequenciaNumericaDeCalculo)
    sequenciaDeOperacoes.push(sequenciaNumericaDeCalculo)
    console.log("1", sequenciaNumericaDeCalculo)
    console.log("2", sequenciaDeOperacoes)
    
    operacoes = [null];
}

function obterSinal(dado){ return sinalRecebido = dado }

function exibirResultadoFinal(dado) { paragrafoDisplay.innerHTML = dado; }

function calcular(){
    sequenciaDasOperacoesDoCalculo()

    let sinal = obterSinal(sinalRecebido)

    if (sequenciaDeOperacoes.length >= 2) {
        let resultado;
    switch (sinal){
        case '+':
            resultado = sequenciaDeOperacoes.reduce((valorPrevio, valorAtual) => valorPrevio + valorAtual);
            break
        case '-':
            resultado = sequenciaDeOperacoes.reduce((valorPrevio, valorAtual) => valorPrevio - valorAtual);
            break
        case '*':
            resultado = sequenciaDeOperacoes.reduce((valorPrevio, valorAtual) => valorPrevio * valorAtual);
            break 
        case '/':
            resultado = sequenciaDeOperacoes.reduce((valorPrevio, valorAtual) => valorPrevio / valorAtual);
            break
        }
        exibirResultadoFinal(resultado)
        sequenciaDeOperacoes = [resultado]
        operacoes = [null]
        console.log(sequenciaDeOperacoes);
    }
}