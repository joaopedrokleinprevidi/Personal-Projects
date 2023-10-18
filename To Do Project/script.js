var selectButtonSubmit = document.querySelector('.submitButton');
var selectAdicionarButton = document.querySelector('.adicionarButton');
var selectForm = document.querySelector(".selectForm");
var selectInputName = document.querySelector("#nameInput");
var selectInputColor = document.querySelector("#colorInput");
var selectInputValue = document.querySelector("#valueInput");
var selectInputHour = document.querySelector("#hourInput");
var inputSelect = document.querySelector("#selectInput");
var inputSelectYes = document.querySelector("#selectInputYes");
var inputSelectNo = document.querySelector("#inputSelectNo");
var selectInputDate = document.querySelector("#dateInput");
var selectDivListContainer = document.querySelector("#ListItensContainer");

function criarItem(){
    //criando item da lista e atribuindo valor nome + css pra td
    
    var DivItemList = document.createElement("div");
    DivItemList.classList.add("divItemList", "itemListConcluido");
    selectDivListContainer.appendChild(DivItemList);

    var nomeArmazenado = selectInputName.value;

    var p_ValoresItem = document.createElement("p");
    p_ValoresItem.innerHTML = nomeArmazenado;
    DivItemList.appendChild(p_ValoresItem);

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



selectAdicionarButton.classList.remove('esconderButton')
selectForm.classList.remove('formListHeader');
selectForm.classList.add('displayNoneFormListHeader');



selectAdicionarButton.addEventListener('click', ()=>{

//remove botao de adicionar, aparece painel e botao de submit
selectAdicionarButton.classList.add('esconderButton');
selectForm.classList.add('formListHeader');
selectForm.classList.remove('displayNoneFormListHeader');
selectButtonSubmit.classList.remove('esconderButton');

//se o botao de submit for clicado, cria item da lista
selectForm.addEventListener('submit', (e)=> {
        e.preventDefault();
        
        criarItem(); 

        selectForm.classList.remove('formListHeader');
        selectForm.classList.add('displayNoneFormListHeader');
        selectAdicionarButton.classList.remove('esconderButton');
        selectForm.reset();
    })
console.log(selectInputName.value);
})

