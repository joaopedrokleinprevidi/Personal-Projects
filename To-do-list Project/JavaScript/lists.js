var adicionar_button = document.querySelector('#adicionar_button');
var remover_button = document.querySelector('#remover_button');
var editar_button = document.querySelector('#editar_button');
var pai_painel = document.querySelector('.pai_painel');
pai_painel.classList.remove('pai_painel-flex');


adicionar_button.addEventListener('click', ()=> {

    //deixando o pai_painel visivel com flexbox ao usuário clicar
    pai_painel.classList.add('pai_painel-flex');

    //criando o elemento filho do pai_painel
    //dando classe de css com suas configurações
    var painel_filho = document.createElement("div");
    painel_filho.classList.add('painel_filho-config');
    pai_painel.appendChild(painel_filho);

    //criando elemento para "fechar" pai_painel
    //dando classe de css com suas configurações 
    var buttonCancel = document.createElement("button");
    buttonCancel.textContent = "x";
    buttonCancel.classList.add('buttonCancel-config');
    buttonCancel.classList.add('buttonCancel-config:hover');
    painel_filho.appendChild(buttonCancel);






})