import manipulador from './manipulation.js';
import ingredientes from './ingredientes.js';

//console.log(ingredientes);
//console.log(typeof ingredientes);
//console.log(Array.isArray(ingredientes));

//console.log(ingredientes[0])
var ingredientes = ['água', 'mel', 'sal', 'mostarda'];
manipulador.capitalizarObjetos(ingredientes, 'nome');
manipulador.capitalizarObjetos(ingredientes)



/*
var resultadoCapitalizado = manipulador.capitalizar(ingredientes);
var resultadoOrdenacao = manipulador.ordenar(resultadoCapitalizado);
var resultadoCaixaAlta = manipulador.caixaAlta(ingredientes);

console.log(resultadoCapitalizado);
console.log(resultadoOrdenacao);
console.log(resultadoCaixaAlta); */