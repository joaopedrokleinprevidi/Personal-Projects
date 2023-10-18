var selectButtonAdicionar = document.querySelector('#adicionarBotão');
var selectForm = document.querySelector("form");
var selectInputName = document.querySelector("nameInput");
var selectInputColor = document.querySelector("colorInput");
var selectInputValue = document.querySelector("valueInput");
var selectInputHour = document.querySelector("hourInput");
var inputSelect = document.querySelector("selectInput");
var inputSelectYes = document.querySelector("selectInputYes");
var inputSelectNo = document.querySelector("inputSelectNo");
var selectInputDate = document.querySelector("dateInput");
var selectDivListContainer = document.querySelector("ListItensContainer");

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



        var DivItemList = document.createElement("div");
        DivItemList.classList.add("divItemList");
        DivItemList.appendChild("ListItensContainer");
    })

})