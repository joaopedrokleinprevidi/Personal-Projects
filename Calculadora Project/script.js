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

function exibirDadosNoDisplay(dado) {
    const conteudoAtualDoDisplay = paragrafoDisplay.innerHTML;
    paragrafoDisplay.innerHTML = conteudoAtualDoDisplay + ' ' + dado;
}

function tratamentoDeDadosParaNumeros(dado){ 
    if (!(dado === '0' && numbers.length === 0)) {
        numbers.push(dado);
    };
     console.log("numbers = " + numbers) }

function tratamentoDeDadosParaSinais(dado){
    console.log("dado = " + dado)

    const sequenciaNumericaDeCalculo = Number(numbers.join(''))
    calculo.push(sequenciaNumericaDeCalculo)
    console.log("calculo = " + calculo)
    
    numbers = [];

    obterSinal(dado); 
}

function obterSinal(dado){
    return sinalRecebido = dado
}

function exibirResultadoFinal(dado){
    paragrafoDisplay.innerHTML = dado;
}

function calcular(){
    const sequenciaNumericaDeCalculo = Number(numbers)
    calculo.push(sequenciaNumericaDeCalculo)
    console.log("calculo = " + calculo)
    numbers = []

    let sinal = obterSinal(sinalRecebido)

    if (calculo.length >= 2) {
        let resultado;
    switch (sinal){
        case '+':
            resultado = calculo.reduce((valorPrevio, valorAtual) => valorPrevio + valorAtual);
            break
        case '-':
            resultado = calculo.reduce((valorPrevio, valorAtual) => valorPrevio - valorAtual);
            break
        case '*':
            resultado = calculo.reduce((valorPrevio, valorAtual) => valorPrevio * valorAtual);
            break 
        case '/':
            resultado = calculo.reduce((valorPrevio, valorAtual) => valorPrevio / valorAtual);
            break
        }
        console.log("calculei = " + calculo)
        exibirResultadoFinal(resultado)
        calculo = [resultado]
    }
}

