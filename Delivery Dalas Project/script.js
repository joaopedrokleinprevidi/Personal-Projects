var ingredientes = ['água', 'mel', 'sal', 'mostarda'];
var ingredientesModificado = []

for (var i = 0; i < ingredientes.length; i++) {
    var letraInicial = ingredientes[i].charAt(0).toUpperCase() + ingredientes[i].slice(1);
    ingredientesModificado[i] = letraInicial;
}

var arrayOrdenado = ingredientesModificado.sort(function(a,b) {
    return a.localeCompare(b);
})
console.log(arrayOrdenado);