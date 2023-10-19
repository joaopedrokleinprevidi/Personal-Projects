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

const listaDeItens = {}

function salvarItem( nome ) {
    const index = `item-${cont}`

    listaDeItens[index] = { nome }

    cont += 1
}

function atualizarItem ( index, nome ) { listaDeItens[index] = { nome } }

function criarItem( evento ) {

    const nomeInputEvent = evento.target.nome.value

    salvarItem(nomeInputEvent)
}

function editarItem( DivItemList ) {
    console.log('clicou para editar');
    selectButtonSubmit.classList.add('submitButton')
    
    const nomeInput = DivItemList.name.value
    
    selectForm.name.value = nomeInput
    
    selectForm.classList.add('formListHeader');
    selectAdicionarButton.classList.add('esconderButton');
}

function renderizarItens() {
    const fragmento = document.createDocumentFragment()
    selectDivListContainer.innerHTML = ''

    for( let index in listaDeItens ) {
        const item = listaDeItens[index]
        const cardItem = criarElemento( index, item.nome )

        fragmento.appendChild(cardItem)
    }

    selectDivListContainer.appendChild(fragmento);
}

function criarElemento( index, nomeInputEvent ) {

    //criando item da lista e atribuindo valor nome + css pra td
    var DivItemList = document.createElement("div");
    DivItemList.classList.add("divItemList");
    DivItemList.classList.add(`itemCount${cont}`)

    //data set serve para criar o proprio atributo, em vez de ter que passar de funçao em funçao...
    DivItemList.dataset('index', index)

    //var itemObject = {
    //    position: cont,
    //    nome: selectInputName.value
    //};

    const nomeEstilizado = nomeInputEvent.charAt(0).toUpperCase() + nomeInputEvent.slice(1);

    //console.dir(itemObject);

    var p_ValoresItem = document.createElement("p");
    p_ValoresItem.innerHTML = nomeEstilizado;
    p_ValoresItem.setAttribute('name', 'nome')
    DivItemList.appendChild(p_ValoresItem);

    //arrayItensObject.push(itemObject);
    //cont++;

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
    const targetEl = e.target;
    const parentEl = targetEl.closest('div');

    if (targetEl.classList.contains('feitoButton')) {
        console.log('clicou para finalizar');
        parentEl.classList.toggle('itemListConcluido');
    };

    if (targetEl.classList.contains('removerButton')) {
        console.log('clicou para remover');
        parentEl.remove()
        arrayItensObject.pop();
        console.dir(parentEl);
        }
   // 
   // if (targetEl.classList.contains('editarButton')) {
        //
    //}
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


selectButtonSubmit.addEventListener('click', enviarFormularioParaEdicao)

function enviarFormularioParaEdicao( evento ) {
    evento.preventDefault();

    const nomeInput = selectForm.nome.value
}