import manipulador from './manipulation.js';
import ingredientes from './ingredientes.js';

//console.log(ingredientes);
//console.log(typeof ingredientes);
//console.log(Array.isArray(ingredientes));

//console.log(ingredientes[0])

manipulador.capitalizarObjetos(ingredientes, 'nome');

/*
var ingredientes = ['água', 'mel', 'sal', 'mostarda'];
var resultadoCapitalizado = manipulador.capitalizar(ingredientes);
var resultadoOrdenacao = manipulador.ordenar(resultadoCapitalizado);
var resultadoCaixaAlta = manipulador.caixaAlta(ingredientes);

console.log(resultadoCapitalizado);
console.log(resultadoOrdenacao);
console.log(resultadoCaixaAlta); */