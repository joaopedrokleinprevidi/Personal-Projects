var pai_lists = document.querySelector('#pai_lists');

var button_adicionar = document.querySelector('#button_adicionar');
var button_remover = document.querySelector('#button_remover');
var list1 = document.querySelector('#list1');
var list2 = document.querySelector('#list2');
var list3 = document.querySelector('#list3');
var lists = document.querySelector('.lists');


/* 
criar uma variavel lista atual recebendo o valor 3.
se o usario clicar pra adicionar, o valor que vai aparecer(conteudo) para ele é de lista_atual++
se o usuario clicar pra remover, o valor que vai aparecer para ele é de lista_atual--;
ou seja adicionando +1 ou tirando -1
*/

var listaAtual = 4;

button_adicionar.addEventListener('click', ()=> {
    if (listaAtual == 6){
        alert("Você já adicionou o máximo de listas")
    }else {
    var newLista = document.createElement('div');
    newLista.classList.add('lists');
    newLista.innerHTML = "Lista " + listaAtual;
    var insert = pai_lists.appendChild(newLista);
    insert.classList.add('lists')
    insert.classList.add(`list${listaAtual}`) 
    insert.addEventListener('click', () => {
        if (insert.classList.contains("list4")) {
            window.location = "http://127.0.0.1:5500/To-do-list%20Project/HTML/lista4.html";
        }   
        if (insert.classList.contains("list5")) {
            window.location = "http://127.0.0.1:5500/To-do-list%20Project/HTML/lista5.html";
        }})
    console.log(insert.classList);
    listaAtual++;
}});

button_remover.addEventListener('click', ()=> {
    if (listaAtual == 4){
        alert("Você já removeu o máximo de listas")
    } else {
    var removeLista = pai_lists.lastChild;
    if (removeLista) {
        pai_lists.removeChild(removeLista);
        listaAtual--;
    }
}
})


//index === definindo local para cada
list1.addEventListener('click', ()=> {
    window.location = "http://127.0.0.1:5500/To-do-list%20Project/HTML/lista1.html";
})

list2.addEventListener('click', ()=> {
    window.location = "http://127.0.0.1:5500/To-do-list%20Project/HTML/lista2.html"
})

list3.addEventListener('click', ()=> {
    window.location = "http://127.0.0.1:5500/To-do-list%20Project/HTML/lista3.html"
})

lists.addEventListener('click', ()=> {
    var documentListAtual = document.querySelector(`.list${listaAtual}`);
    if(documentListAtual.classList.contains("list4"))
        window.location = "http://127.0.0.1:5500/To-do-list%20Project/HTML/lista4.html"
    if(documentListAtual.classList.contains("list5"))
        window.location = "http://127.0.0.1:5500/To-do-list%20Project/HTML/lista5.html"   
})