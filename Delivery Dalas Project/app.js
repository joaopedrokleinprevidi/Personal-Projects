import manipulador from './manipulation.js';
console.log(manipulador)
var ingredientes = ['água', 'mel', 'sal', 'mostarda'];
var resultadoCapitalizado = manipulador.capitalizar(ingredientes);
var resultadoOrdenacao = manipulador.ordenar(resultadoCapitalizado);
var resultadoCaixaAlta = manipulador.caixaAlta(ingredientes);

console.log(resultadoCapitalizado);
console.log(resultadoOrdenacao);
console.log(resultadoCaixaAlta);