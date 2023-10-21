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
    caixaAlta: caixaAlta
}