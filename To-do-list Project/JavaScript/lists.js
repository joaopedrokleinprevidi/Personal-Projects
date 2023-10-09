var adicionar_button = document.querySelector('#adicionar_button');
var remover_button = document.querySelector('#remover_button');
var editar_button = document.querySelector('#editar_button');
var pai_painel = document.querySelector('.pai_painel');
pai_painel.classList.remove('pai_painel-flex');


adicionar_button.addEventListener('click', ()=> {

    //verificando se o painel já existe, pra nao duplicar
    var painel_filho = document.querySelector('.painel_filho-config');

    if (!painel_filho){
        //Se não existir, criar

    //deixando o pai_painel visivel com flexbox ao usuário clicar
    pai_painel.classList.add('pai_painel-flex');

    //criando o elemento filho do pai_painel
    //dando classe de css com suas configurações
    painel_filho = document.createElement("div");
    painel_filho.classList.add('painel_filho-config');
    pai_painel.appendChild(painel_filho);

    //criando elemento para "fechar" pai_painel
    //dando classe de css com suas configurações 
    var buttonCancel = document.createElement("button");
    buttonCancel.textContent = "x";
    buttonCancel.classList.add('buttonCancel-config');
    buttonCancel.classList.add('buttonCancel-config:hover');
    painel_filho.appendChild(buttonCancel);
    //adicionando evento de click ao botao de fechar painel
    buttonCancel.addEventListener('click', ()=>{
        pai_painel.classList.remove('pai_painel-flex');
        pai_painel.removeChild(painel_filho);
    })
    
}})

// ler este código com mais calma e tentar entende-lo cabo a rabo
// pedir para o chat gpt me explicar o código também, pra concluir se eu realmente entendi
// (Opcional) pedir para alguém olhar o código e me dizer oque achou