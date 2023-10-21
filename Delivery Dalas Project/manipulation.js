function capitalizarObjetos( colecao, atributo ) {
    console.log(typeof colecao[0]);
    if ( typeof colecao[0] == 'object' ) {
        var resultado = colecao.map( function( objeto ){ 
            var letraInicial = objeto[atributo].charAt(0).toUpperCase() + objeto[atributo].slice(1);
            objeto[atributo] = letraInicial;
            
            return objeto;
        })

        console.log(resultado);
    }
    else {
       var resultado = colecao.map ( function( string ) {
            var letraInicial =  string[atributo].chartAt(0).toUpperCase + string[atributo].slice(1);
            string[atributo] = letraInicial;

            return string;
       })

       console.log(resultado);
    }
}

function capitalizar(vetor) {
    var ingredientesModificado = []

    for (var i = 0; i < vetor.length; i++) {
        var letraInicial = vetor[i].charAt(0).toUpperCase() + vetor[i].slice(1);
        ingredientesModificado[i] = letraInicial;
    }
    return ingredientesModificado;
}

function ordenar(vetor) {
    return vetor.sort(function(a,b) {
        return a.localeCompare(b)
    })
    
}

function caixaAlta ( vetor ) {
    var modificado = [];
    for(var i = 0; i < vetor.lenght; i++){
        modificado[i] = vetor[i].toUpperCase();
    }
    
    return modificado;
}

export default {
    capitalizar: capitalizar,
    ordenar: ordenar,
    caixaAlta: caixaAlta,
    capitalizarObjetos: capitalizarObjetos
};