var selectButtonAdicionar = document.querySelector('#adicionarBotão');
var selectForm = document.querySelector("form")

selectForm.classList.remove('formListHeader');


selectButtonAdicionar.addEventListener('click', ()=> {
    selectForm.classList.add('formListHeader');


    selectButtonAdicionar.innerHTML = "Concluído";
    selectButtonAdicionar.addEventListener('click', ()=> {
        selectForm.classList.remove('formListHeader');
        selectButtonAdicionar.innerHTML = "Adicionar";
    })

})