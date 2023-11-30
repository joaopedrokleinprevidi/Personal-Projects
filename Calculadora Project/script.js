const sectionButtonsDaCalculadora = document.querySelector('#calculadoraButtons')
const allButtons = document.querySelectorAll(".all-buttons")
const paragrafoDisplay = document.querySelector("#p-do-display")
const sinalDeIgual = document.querySelector('#sinalDeIgual')
const clear = document.querySelector('#clearAllText')
const back = document.querySelector('#backText')


let primeiroValor = '';
let segundoValor = '';
let sinalAritmetico = '';
let resultado = '';


allButtons.forEach( (element) => {
    element.addEventListener('click', (event) => {
        pegarDadosDoElemento(event)
        console.log("1", primeiroValor)
        console.log("2", segundoValor)
    })
})

sinalDeIgual.addEventListener('click', calcular)
clear.addEventListener('click', clearAllText)
back.addEventListener('click', backText)

function pegarDadosDoElemento(event) {
    const clickedElement = event.currentTarget;
    const dadoDoElemento = clickedElement.getAttribute('data-i')

    if (!isNaN(dadoDoElemento)){
        exibirDadosNoDisplay(dadoDoElemento);
        tratamentoDeDadosParaNumeros(dadoDoElemento);
    }
    else {
        exibirDadosNoDisplay(dadoDoElemento);
        tratamentoDeDadosParaSinais(dadoDoElemento);
    }
}

function exibirDadosNoDisplay(dado) {  const conteudoAtualDoDisplay = paragrafoDisplay.innerHTML; paragrafoDisplay.innerHTML = conteudoAtualDoDisplay + dado; }

function tratamentoDeDadosParaNumeros(dado){ 
    if (sinalAritmetico == ''){ primeiroValor = primeiroValor + dado; }
    else { segundoValor = segundoValor + dado; }    
}

function tratamentoDeDadosParaSinais(dado){ sinalAritmetico = dado; }

function obterSinal(dado){ return sinalRecebido = dado }

function exibirResultadoFinal(dado) { paragrafoDisplay.innerHTML = dado; }

function calcular(){
    resultado = eval(`${primeiroValor} ${sinalAritmetico} ${segundoValor}`);
    exibirResultadoFinal(resultado)

    sinalAritmetico = ''
    segundoValor = ''
    primeiroValor = resultado;
    }

function clearAllText() {
    paragrafoDisplay.innerHTML = '';
    sinalAritmetico = '';
    primeiroValor = '';
    segundoValor = '';
    resultado = '';
}

function backText() {
    const texto = paragrafoDisplay.textContent;

    if(!resultado == ''){
        paragrafoDisplay.textContent = texto.substring(0, texto.length - 1);
        resultado = resultado.toString().substring(0, resultado.length - 1);
    }
    else if(segundoValor !== ''){
    paragrafoDisplay.textContent = texto.substring(0, texto.length - 1);
    segundoValor = segundoValor.toString().substring(0, segundoValor.length - 1);
    }else if(sinalAritmetico !== ''){
    paragrafoDisplay.textContent = texto.substring(0, texto.length - 1);
    sinalAritmetico = ''
    }else {
    paragrafoDisplay.textContent = texto.substring(0, texto.length - 1);
    primeiroValor = primeiroValor.toString().substring(0, primeiroValor.length - 1);
    }
    console.log("1", primeiroValor)
    console.log("2", segundoValor)
}




//utilizar o eval para resolver a operação
//tenho que ter 3 variaveis
//1 contendo o primeiro valor
//2 contendo o sinal aritmetico
//3 contendo o segundo valor
//chamar funçao calcular para realizar calculo a partir da 2 variavel (sinal aritmetico)
/*
`${primeiroValor} ${sinalAritmetico} ${segundoValor}`
*/
//essa template so é executada quando a pessoa clicar no sinal de igual
//usando o EVAL essa String contendo os valores e o sinal é calculada automaticamente

//sera necessario uma quarta variavel para salvar o resultado dos calculos