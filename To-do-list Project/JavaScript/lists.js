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

    //criando o elemento filho do pai_painel (principal == inputs here)
    //dando classe de css com suas configurações
    var painel_filho = document.createElement("div");
    painel_filho.classList.add('painel_filho-config');
    pai_painel.appendChild(painel_filho);

    
    //criando o elemento filho do pai painel == button "div"
    //dando class com flexbox ao elemento pai do botão
    var painel_filhoButton = document.createElement("div");
    painel_filho.appendChild(painel_filhoButton);
    painel_filhoButton.classList.add('painel_filhoButton-config')
    //criando elemento para "fechar" pai_painel
    //dando classe de css com suas configurações 
    var buttonCancel = document.createElement("button");
    buttonCancel.textContent = "x";
    buttonCancel.classList.add('buttonCancel-config');
    buttonCancel.classList.add('buttonCancel-config:hover');
    painel_filhoButton.appendChild(buttonCancel);
    //adicionando evento de click ao botao de fechar painel
    buttonCancel.addEventListener('click', ()=>{
        pai_painel.classList.remove('pai_painel-flex');
        pai_painel.removeChild(painel_filho);
        pai_painel.removeChild(painel_filhoButton);
        pai_painel.removeChild(painel_filhoSubmit);
    })





    //criando input pra digitar nome
    var label_inputText = document.createElement("label")
    label_inputText.innerHTML = "Nome: ";
    label_inputText.setAttribute("for", "name");
    var input_text = document.createElement("input");
    input_text.setAttribute("type", "text");
    input_text.setAttribute("for", "name");
    input_text.setAttribute("class", "input_text-configs");
    //definindo evento de input ao usuario digitar e armazenando valor
   /* var nomeArmazenado;
    input_text.addEventListener('input', function(){
        nomeArmazenado = this.value;
    })

    //exemplo de exibindo o valor, testando se esta funcionando o armazenamento
    function exibirValor(){
        alert("O valor inserido é: " + nomeArmazenado);
    }
    exibirValor(); */
    //debugando o código abaixo
    var consoleInput = input_text.getAttribute("class");
    console.log(consoleInput);

    painel_filho.appendChild(label_inputText);
    painel_filho.appendChild(input_text);

    //criando botao
    var painel_filhoSubmit = document.createElement("div");
    painel_filhoSubmit.classList.add("painel_filhoSubmit-config")
    painel_filho.appendChild(painel_filhoSubmit);

    var buttonSubmit = document.createElement("button");
    buttonSubmit.classList.add("buttonSubmit-config");
    buttonSubmit.classList.add("buttonSubmit-config:hover");
    buttonSubmit.innerHTML = "Concluído";
    painel_filhoSubmit.appendChild(buttonSubmit);
    

}})

