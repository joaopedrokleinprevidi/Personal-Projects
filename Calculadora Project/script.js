const sectionButtonsDaCalculadora = document.querySelector('#calculadoraButtons')
const allButtons = document.querySelectorAll(".all-buttons")
const paragrafoDisplay = document.querySelector("#p-do-display")
const sinalDeIgual = document.querySelector('#sinalDeIgual')
const clear = document.querySelector('#clearAllText')
const back = document.querySelector('#backText')
const displayDaCalculadora = document.querySelector('#display')

let primeiroValor = '';
let segundoValor = '';
let sinalAritmetico = '';
let resultado = '';

allButtons.forEach( (element) => {
    element.addEventListener('click', (event) => {
        pegarDadosDoElemento(event)
    })
})

sinalDeIgual.addEventListener('click', calcular)
clear.addEventListener('click', clearAllText)
back.addEventListener('click', backText)
displayDaCalculadora.addEventListener('scroll', ()=> {console.log("scrollando???")})
/* */
function pegarDadosDoElemento(event) {
    const clickedElement = event.currentTarget;
    const dadoDoElemento = clickedElement.getAttribute('data-i')

    if (!isNaN(dadoDoElemento) || dadoDoElemento == '.' ){
        exibirDadosNoDisplay(dadoDoElemento);
        tratamentoDeDadosParaNumeros(dadoDoElemento);
    }
    else {
        exibirDadosNoDisplay(sinalAritmetico);
        tratamentoDeDadosParaSinais(dadoDoElemento);
    }
}

function exibirDadosNoDisplay(dado) {  
    let conteudoAtualDoDisplay = paragrafoDisplay.innerHTML; 
    if((conteudoAtualDoDisplay.endsWith("+") || conteudoAtualDoDisplay.endsWith("-") || conteudoAtualDoDisplay.endsWith("/") || conteudoAtualDoDisplay.endsWith("*")) && (dado == "-" || dado == "/" || dado == "*" || dado == "+")){
        conteudoAtualDoDisplay = conteudoAtualDoDisplay.substring(0, conteudoAtualDoDisplay.length - 1)
        paragrafoDisplay.innerHTML = conteudoAtualDoDisplay + dado;
    } 
    if((conteudoAtualDoDisplay.endsWith(".")) && (dado == ".")){
        return null
    }

    paragrafoDisplay.innerHTML = conteudoAtualDoDisplay + dado;
    console.log("p", paragrafoDisplay)
}

function tratamentoDeDadosParaNumeros(dado){ 
    if (sinalAritmetico === '') {
            primeiroValor = primeiroValor + dado;
    } else{
            segundoValor = segundoValor + dado;
    }    
    console.log("1", primeiroValor)
    console.log('1', segundoValor)
}

function tratamentoDeDadosParaSinais(dado){ 

    if(sinalAritmetico == '') { sinalAritmetico = dado;}
    else{ calcular();} }

function exibirResultadoFinal(dado) { paragrafoDisplay.innerHTML = dado; }

function calcular(){
    resultado = eval(`${primeiroValor} ${sinalAritmetico} ${segundoValor}`);
    let resultadoNumerico = Number(resultado);
    resultado = String(resultado)

    if (resultado.includes('.')){
        exibirResultadoFinal(resultadoNumerico.toFixed(2) )
    }else {
        exibirResultadoFinal(resultado)
    }
    
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

    if(segundoValor !== ''){
    paragrafoDisplay.textContent = texto.substring(0, texto.length - 1);
    segundoValor = segundoValor.toString().substring(0, segundoValor.length - 1);
    }else if(sinalAritmetico !== ''){
    paragrafoDisplay.textContent = texto.substring(0, texto.length - 1);
    sinalAritmetico = ''
    }else {
    paragrafoDisplay.textContent = texto.substring(0, texto.length - 1);
    primeiroValor = primeiroValor.toString().substring(0, primeiroValor.length - 1);
    resultado = primeiroValor
    }
}