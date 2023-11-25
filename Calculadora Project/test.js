function go(){
    const buttonDataValue = document.querySelector('#buttonDataValue');
    let valor = JSON.parse(buttonDataValue.getAttribute("data-p"))
    console.log(valor)

    let array = [5, 10];

    let resultados = array.reduce((valorPrevio, valorAtual) => valorPrevio + valorAtual);
    console.log(resultados);
}




/*
let resultadoNegativo = array.reduce((valorPrevio, valorAtual) => valorPrevio - valorAtual);

let resultadoMultiplicado = array.reduce((valorPrevio, valorAtual) => valorPrevio * valorAtual);

let resultadoDividido = array.reduce((valorPrevio, valorAtual) => valorPrevio / valorAtual);
*/
