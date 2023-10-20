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

function atualizarItem ( index, nome, color ) { listaDeItens[index] = { nome, color } } //vai ser usado para editar

function renderizarItens() {
    const fragmento = document.createDocumentFragment()
    selectDivListContainer.innerHTML = ''

    //percorrendo todos os index do lista de itens
    for( let index in listaDeItens ) {
        const item = listaDeItens[index]
        const cardItem = criarElemento( index, item.nome, item.color )

        fragmento.appendChild(cardItem)
    }

    selectDivListContainer.appendChild(fragmento);
}

function criarElemento( index, nomeInputEvent, colorInputEvent ) {

    //criando item da lista e atribuindo valor nome + css pra td
    var DivItemList = document.createElement("div");
    DivItemList.classList.add("divItemList");
    DivItemList.style.backgroundColor = colorInputEvent;

    //data set serve para criar o proprio atributo, em vez de ter que passar de funçao em funçao...
    //DivItemList.dataset('index', index)

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
        const selectFeitoButton = document.querySelector('.feitoButton');
        console.log('clicou para finalizar');
        selectFeitoButton.addEventListener('click', () => {
            if(targetEl.style.backgroundColor === colorInputEvent){
                targetEl.style.backgroundColor = 'lightgreen'
            }else{
                targetEl.style.backgroundColor = colorInputEvent
            }
        })
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