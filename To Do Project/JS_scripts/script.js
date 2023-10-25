var selectButtonSubmit = document.querySelector('.submitButton');
var selectAdicionarButton = document.querySelector('.adicionarButton');
var selectForm = document.querySelector(".selectForm");
var selectFeitoButton = document.querySelector('.feitoButton');
var selectInputName = document.querySelector("#nameInput");
var selectInputColor = document.querySelector("#colorInput");
var selectInputValue = document.querySelector("#valueInput");
var selectInputHour = document.querySelector("#hourInput");
var inputSelect = document.querySelector("#selectInput");
var inputSelectYes = document.querySelector("#selectInputYes");
var inputSelectNo = document.querySelector("#inputSelectNo");
var selectInputDate = document.querySelector("#dateInput");
var selectDivListContainer = document.querySelector("#ListItensContainer");

var cont = 1;
var arrayItensObject = [];
let colorFeitoButton = false;

const listaDeItens = {}

function criarItem( evento ) {

    const nomeInputEvent = evento.target.nome.value
    const colorInputEvent = evento.target.color.value

    salvarItem(nomeInputEvent, colorInputEvent)
}

function salvarItem( nome, color ) { //recebe valores da funçao criarItem()
    const index = `item-${cont}`

    listaDeItens[index] = { nome, color }

    cont += 1
}

function editarItem( DivItemList ) {
    console.log('clicou para editar');
    selectButtonSubmit.classList.add('submitButton')
    
    const nomeInput = DivItemList.name.value
    const colorInput = DivItemList.color.value
    
    selectForm.name.value = nomeInput
    selectForm.color.value = colorInput
    
    selectForm.classList.add('formListHeader');
    selectAdicionarButton.classList.add('esconderButton');
}

function atualizarItem ( index, nome ) { listaDeItens[index] = { nome } } //vai ser usado para editar

function renderizarItens() {
    const fragmento = document.createDocumentFragment()
    selectDivListContainer.innerHTML = ''

    //percorrendo todos os index do lista de itens
    for( let index in listaDeItens ) {
        const item = listaDeItens[index]
        const cardItem = criarElemento( index, item.nome )

        fragmento.appendChild(cardItem)
    }

    selectDivListContainer.appendChild(fragmento);
}

function corAlterada ( alvo, corAlterada ) { 
    alvo.style.backgroundColor = corAlterada
};

function criarElemento( index, nomeInputEvent) {

    //criando item da lista e atribuindo valor nome + css pra td
    var DivItemList = document.createElement("div");
    DivItemList.classList.add("divItemList");
    corAlterada( DivItemList, colorInputEvent );

    //data set serve para criar o proprio atributo, em vez de ter que passar de funçao em funçao...
    //DivItemList.dataset('index', index) comentei pq estava dando erro '-'

    const nomeEstilizado = nomeInputEvent.charAt(0).toUpperCase() + nomeInputEvent.slice(1);

    var p_ValoresItem = document.createElement("p");
    p_ValoresItem.innerHTML = nomeEstilizado;
    p_ValoresItem.setAttribute('name', 'nome')
    DivItemList.appendChild(p_ValoresItem);

    //criando botoes para adicionar/editar/remover
    var feitoButton = document.createElement("button");
    feitoButton.classList.add('buttonsItemList', 'feitoButton');
    
    var editarButton = document.createElement("button");
    editarButton.classList.add('buttonsItemList', 'editarButton');
    
    var removerButton = document.createElement("button");
    removerButton.classList.add('buttonsItemList', 'removerButton');
    
    DivItemList.append(feitoButton, editarButton, removerButton);
    

    editarButton.addEventListener('click', () => editarItem(DivItemList) )

    return DivItemList
}

function submitButton( evento ) {
    evento.preventDefault();

    criarItem(evento);
    renderizarItens()

    selectForm.classList.remove('formListHeader');
    selectForm.classList.add('displayNoneFormListHeader');
    selectAdicionarButton.classList.remove('esconderButton');
    selectForm.reset();
}

document.addEventListener('click', (e) => {
    var targetEl = e.target;
    const parentEl = targetEl.closest('div');

    if (targetEl.classList.contains('feitoButton')) {
        console.log('clicou para finalizar');
        parentEl.setAttribute("style", "background-color: lightgreen;");    

        //isso começou a dar bug, resolver.
    };

    if (targetEl.classList.contains('removerButton')) {
        console.log('clicou para remover');
        parentEl.remove()
        arrayItensObject.pop();
        console.dir(parentEl);
        }
})

selectAdicionarButton.classList.remove('esconderButton')
selectForm.classList.remove('formListHeader');
selectForm.classList.add('displayNoneFormListHeader');

selectAdicionarButton.addEventListener('click', () => {
    //remove botao de adicionar, aparece painel e botao de submit
    selectAdicionarButton.classList.add('esconderButton');
    selectForm.classList.add('formListHeader');
    selectButtonSubmit.classList.remove('esconderButton');
})

//se o botao de submit for clicado, cria item da lista
selectForm.addEventListener('submit', submitButton)

/*
selectButtonSubmit.addEventListener('click', enviarFormularioParaEdicao)

function enviarFormularioParaEdicao( evento ) {
    evento.preventDefault();

    const nomeInput = selectForm.nome.value
    const colorInput = selectForm.color.value
}
*/





/* 
BUGS : 
Ao excluir um item, ele some, mas quando vc adiciona outro, o item excluido volta a acontecer.
Ou seja ta renderizando a lista toda vez q cria, e é excluido a div no momento q clica no botao remover, mas o obj nao ta sendo excluido tbm

Ao concluir uma tarefa, ela fica verde, mas ao adicionar outra, volta a cor normal
Novamente mesmo erro, nao esta sendo alterado a cor no objeto em si, e toda vez q clica no botao Submit esta sendo renderizado a lista com os seus valores definidos por padrao ( no objeto )

valeuu"!!!!
*/