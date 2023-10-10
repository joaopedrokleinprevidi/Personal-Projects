var adicionar_button = document.querySelector('#adicionar_button');
var remover_button = document.querySelector('#remover_button');
var editar_button = document.querySelector('#editar_button');
var pai_painel = document.querySelector('.pai_painel');
var main_html = document.querySelector('#main_html');
pai_painel.classList.remove('pai_painel-flex');

var arrayItens_Pai = [];
adicionar_button.addEventListener('click', ()=> {

    //verificando se o painel já existe, pra nao duplicar
    var painel_filho = document.querySelector('.painel_filho-config');

    if (!painel_filho){
        //Se não existir, criar

    //deixando o pai_painel visivel com flexbox ao usuário clicar
    pai_painel.classList.add('pai_painel-flex');

    //criando o elemento filho do pai_painel (principal == inputs here)
    //dando classe de css com suas configurações
    var painel_filho = document.createElement("span");
    painel_filho.classList.add('painel_filho-config');
    pai_painel.appendChild(painel_filho);

    
    //criando o elemento filho do pai painel == button "div"
    //dando class com flexbox ao elemento pai do botão
    var painel_filhoButton = document.createElement("span");
    painel_filho.appendChild(painel_filhoButton);
    painel_filhoButton.classList.add('painel_filhoButton-config')
    //criando elemento para "fechar" pai_painel
    //dando classe de css com suas configurações 
    var buttonCancel = document.createElement("button");
    buttonCancel.textContent = "x";
    buttonCancel.classList.add('buttonCancel-config');
    buttonCancel.classList.add('buttonCancel-config:hover');
    painel_filhoButton.appendChild(buttonCancel);
    //criando funçao para por no botao
    function buttonC(){
        pai_painel.classList.remove('pai_painel-flex');
        pai_painel.removeChild(painel_filho);
        painel_filho.removeChild(painel_filhoButton);
        painel_filho.removeChild(painel_filhoSubmit);
    };
    //adicionando evento de click ao botao de fechar painel
    buttonCancel.addEventListener('click', buttonC);


    //criando input pra digitar nome
    var label_inputText = document.createElement("label")
    label_inputText.innerHTML = "Nome: ";
    label_inputText.setAttribute("for", "name");
    var input_text = document.createElement("input");
    input_text.setAttribute("type", "text");
    input_text.setAttribute("for", "name");
    input_text.setAttribute("class", "input_text-configs");
    //definindo evento de input ao usuario digitar e armazenando valor
    var nomeArmazenado;
    input_text.addEventListener('input', function(){
        nomeArmazenado = this.value;
    })
     
    //debugando o código abaixo
    var consoleInput = input_text.getAttribute("class");
    console.log(consoleInput);

    painel_filho.appendChild(label_inputText);
    painel_filho.appendChild(input_text);

    //criando botao
    var painel_filhoSubmit = document.createElement("span");
    painel_filhoSubmit.classList.add("painel_filhoSubmit-config")
    painel_filho.appendChild(painel_filhoSubmit);

    var buttonSubmit = document.createElement("button");
    buttonSubmit.classList.add("buttonSubmit-config");
    buttonSubmit.classList.add("buttonSubmit-config:hover");
    buttonSubmit.innerHTML = "Concluído";
    painel_filhoSubmit.appendChild(buttonSubmit);
    buttonSubmit.addEventListener('click', ()=> {
        if(nomeArmazenado == undefined){
            buttonC();
        }
        else{
        function exibirValor(){
            //criando elemento pai da lista para definir flexbox
            var pai_itemList = document.createElement("div");
            pai_itemList.classList.add("pai_itemList-config");
            main_html.appendChild(pai_itemList)
            //criando elemento lista e dando config do css para ele
            var itemList = document.createElement("div");
            pai_itemList.appendChild(itemList);
            itemList.classList.add('itemList-config');
            
            //redifinindo variavel nome para ela receber seu valor e sempre a primeira letra ser em maíuscula
            nomeArmazenado = nomeArmazenado.charAt(0).toUpperCase() + nomeArmazenado.slice(1);
            
            //array pai, vai realizar a contagem total dos itens da lista, ele irá receber todos os novos itens da lista
            //array filho vai ser criado um novo toda vez que for adicionado um item a lista, este array conterá as informações do item

            //atribuindo ao array filho todas as informações do novo item da lista
            
            var arrayItem = [nomeArmazenado];
                //   itemList.textContent = arrayItem;
            //atribuindo o filho array(novo item) ao array pai para realizar a contagem da lista.
            arrayItens_Pai.push(arrayItem);

            //exibindo na tela a contagem do array pai (sequencia dos itens da lista)
            
            for (i = 1; i <= arrayItens_Pai.length; i++){
                itemList.textContent = i + "- " + arrayItem;
            }


            //fechando o painel de config de item da lista, e removendo filhos criados para evitar bugs e a aplicação fluir corretamente
            buttonC();

        }
        exibirValor();
    }})
    
}})

    // preciso remover o último filho (item_list) da div pai (pai_itemList) toda vez que clicar no botão "Remover";
    // preciso remover o ultimo item do ArrayItens_pai
    // para assim evitar bugs e remover corretamente, acho eu




//preciso usar o localStorage para que o conteúdo fique salvo mesmo se o usuario carregar, voltar, ou fechar a página.
//preciso estilizar o itemList-config para deixar ele mais bonito
//preciso verificar erros e bugs nas interações e funcionalidades, ver se acho bugs, e corrigilos
