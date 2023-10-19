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

function criarItem() {

    //criando item da lista e atribuindo valor nome + css pra td
    var DivItemList = document.createElement("div");
    DivItemList.classList.add("divItemList");
    selectDivListContainer.appendChild(DivItemList);

    var itemObject = {
        position: cont,
        nome: selectInputName.value
    };
    itemObject.nome = itemObject.nome.charAt(0).toUpperCase() + itemObject.nome.slice(1);

    var p_ValoresItem = document.createElement("p");
    p_ValoresItem.innerHTML = cont + "- " + itemObject.nome;
    DivItemList.appendChild(p_ValoresItem);

    arrayItensObject.push(itemObject);
    cont++;

    //criando botoes para adicionar/editar/remover
    var feitoButton = document.createElement("button");
    feitoButton.classList.add('buttonsItemList', 'feitoButton');
    DivItemList.appendChild(feitoButton);

    var editarButton = document.createElement("button");
    editarButton.classList.add('buttonsItemList', 'editarButton');
    DivItemList.appendChild(editarButton);

    var removerButton = document.createElement("button");
    removerButton.classList.add('buttonsItemList', 'removerButton');
    DivItemList.appendChild(removerButton);
}

function submitButton(e) {
    e.preventDefault();
    criarItem();
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
        cont--;
        //erro no contador caso eu remova item que nao seja o ultimo da lista (tirar contador?)

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
console.log(selectInputName.value);