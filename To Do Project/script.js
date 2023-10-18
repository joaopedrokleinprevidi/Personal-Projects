var selectButtonAdicionar = document.querySelector('#adicionarButton');
var selectForm = document.querySelector(".displayNoneFormListHeader");
var selectInputName = document.querySelector("#nameInput");
var selectInputColor = document.querySelector("#colorInput");
var selectInputValue = document.querySelector("#valueInput");
var selectInputHour = document.querySelector("#hourInput");
var inputSelect = document.querySelector("#selectInput");
var inputSelectYes = document.querySelector("#selectInputYes");
var inputSelectNo = document.querySelector("#inputSelectNo");
var selectInputDate = document.querySelector("#dateInput");
var selectDivListContainer = document.querySelector("#ListItensContainer");

selectForm.classList.remove('formListHeader');



selectButtonAdicionar.addEventListener('click', ()=> {
    //abre configurações para item da lista
    selectForm.classList.add('formListHeader');

    selectButtonAdicionar.innerHTML = "Concluído";
    //ao clicar em "Concluído" === cria item para lista e fornece valores recebidos
    selectButtonAdicionar.addEventListener('click', (e)=> {
        e.preventDefault();
        selectForm.classList.remove('formListHeader');
        selectButtonAdicionar.innerHTML = "Adicionar";

//preciso pegar o valor dos inputs e colocar no "p_ValoresItem"


        //criando item da lista
        var DivItemList = document.createElement("div");
        DivItemList.classList.add("divItemList");
        selectDivListContainer.appendChild(DivItemList);

        //criando paragrafo da lista, que contem as config de cada item
        var p_ValoresItem = document.createElement("p");
        p_ValoresItem.innerHTML = selectInputName.value;
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

    })

})