var pai_lists = document.querySelector('#pai_lists');

var button_adicionar = document.querySelector('#button_adicionar');
var button_remover = document.querySelector('#button_remover');

/* 
criar uma variavel lista atual recebendo o valor 3.
se o usario clicar pra adicionar, o valor que vai aparecer(conteudo) para ele é de lista_atual++
se o usuario clicar pra remover, o valor que vai aparecer para ele é de lista_atual--;
ou seja adicionando +1 ou tirando -1
*/

var listaAtual = 4;

button_adicionar.addEventListener('click', ()=> {
    if (listaAtual == 6){
        console.log("Você já adicionou o máximo de listas")
    }else {
    var newLista = document.createElement('div');
    newLista.classList.add('lists');
    newLista.innerHTML = "Lista " + listaAtual;
    pai_lists.appendChild(newLista);
    listaAtual++;
}
})

button_remover.addEventListener('click', ()=> {
    if (listaAtual == 4){
        console.log("Você já removeu o máximo de listas")
    } else {
    var removeLista = pai_lists.lastChild;
    if (removeLista) {
        pai_lists.removeChild(removeLista);
        listaAtual--;
    }
}
})