var adicionar_button = document.querySelector('#adicionar_button');
var remover_button = document.querySelector('#remover_button');
var editar_button = document.querySelector('#editar_button');
var pai_painel = document.querySelector('.pai_painel');
var main_html = document.querySelector('#main_html');
pai_painel.classList.remove('pai_painel-flex');


//criando elemento pai da function exibirValor() para definir flexbox para todos os itens da lista
var pai_itemList = document.createElement("div");
pai_itemList.classList.add("pai_itemList-config");
main_html.appendChild(pai_itemList)

var itemListElement = document.querySelectorAll('.itemList-config')

//criando array e contagem dos elementos da lista
var arrayItens_Pai = [];
var cont = 1;


//refatorar todo o código seguindo as seguintes intruções: 
// provavelmente apenas a parte de criar o painel ficará exatamente igual
// o resto ou eu mudarei polindo e ajustando(ex, botao de add, botao de remove), ou será excluido(ex: code do botao de edit)
// vamo lá ne meu guri, tu é foda!!! sempre continue de cabeça erguida e marcha nos estudo
// todo plantio tem sua colheita, então apenas plante !

/* 
0- Arrumar o read me e deixar corretamente, revisar o código, polir ele, e colocar anotações mais instrutivas
1- Colocar um span dentro da div do ItemList, de maneira que fique um botão de editar e remover do lado dos itens da lista
1.1- Criar os botões(AddEventListener) de editar e remover dentro do addEventListener do botão adicionar
2- Fazer todo o código dentro de uma função, pra dessa maneira evitar os bugs por escopo, como estou fazendo apenas pelo DOM. Fica mais complicado esta questão. Por isso tudo em apenas um escopo.
2.1- Ficará mais intuito, e mais fácil de escrever, por estar no mesmo escopo, poderei criar uma função para abrir o painel e economizar linhas de código
*/

adicionar_button.addEventListener('click', () => {

    //verificando se o painel já existe, pra nao duplicar
    var painel_filho = document.querySelector('.painel_filho-config');

    if (!painel_filho) {
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
        function buttonC() {
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
        input_text.addEventListener('input', function () {
            nomeArmazenado = this.value;
        })

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


        buttonSubmit.addEventListener('click', () => {
            if (nomeArmazenado == undefined) {
                buttonC();
            }
            else {
                function exibirValor() {

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

                    //sipa eu tenha q por um for aqui depois em
                    itemList.textContent = cont + "- " + arrayItem;
                    cont++;


                    //fechando o painel de config de item da lista, e removendo filhos criados para evitar bugs e a aplicação fluir corretamente
                    buttonC();

                }
                exibirValor();
            }
        })

    };
})


var selectItemList = document.querySelector('.itemList-config');
var selectPaiItemList = document.querySelector('.pai_itemList-config')

remover_button.addEventListener("click", () => {
    if (pai_itemList.lastChild) {
        arrayItens_Pai.pop();
        cont--;
        pai_itemList.removeChild(pai_itemList.lastChild);
    }
})

//preciso criar mais configurações pros itens da lista, como (cor, hora, etc);
//preciso criar o botão de editar:
//ao clicar no botão editar, criará um painel que terá como principal funcionalidade escolher o número do item que você quer editar
//ou seja, se você tem por exemplo 10 itens na sua lista, e quer editar o item número 5, você chama o item número 5, e abaixo colocará as modificações
//este número 5, retornará o paiArray, e este paiarray entrará no arrayfilho e fará as respectivas modificações

editar_button.addEventListener("click", () => {
    //verificando se o painel já existe, pra nao duplicar
    var painel_filho = document.querySelector('.painel_filho-config');

    if (!painel_filho) {
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
        function buttonC() {
            pai_painel.classList.remove('pai_painel-flex');
            pai_painel.removeChild(painel_filho);
            painel_filho.removeChild(painel_filhoButton);
            painel_filho.removeChild(painel_filhoSubmit);
        };
        //adicionando evento de click ao botao de fechar painel
        buttonCancel.addEventListener('click', buttonC);

        //criando seletor de item da lista para editar
        var label_inputTxt = document.createElement("label");
        label_inputTxt.innerHTML = "Qual item deseja editar?";
        label_inputTxt.setAttribute("for", "edit");
        var input_Txt = document.createElement("input");
        input_Txt.setAttribute("type", "number");
        input_Txt.setAttribute("for", "edit");
        input_Txt.setAttribute("class", "input_text-configs");
        input_Txt.setAttribute("id", "input_txt");
        var numEditSelecionado;
        input_Txt.addEventListener("input", () => {
            numEditSelecionado = this.value;
        })

        painel_filho.appendChild(label_inputTxt);
        painel_filho.appendChild(input_Txt);

        //criando input pra digitar nome
        var label_inputText = document.createElement("label")
        label_inputText.innerHTML = "Nome: ";
        label_inputText.setAttribute("for", "name");
        var input_text = document.createElement("input");
        input_text.setAttribute("type", "text");
        input_text.setAttribute("for", "name");
        input_text.setAttribute("class", "input_text-configs");
        input_text.setAttribute("id", "inputNome");
        //definindo evento de input ao usuario digitar e armazenando valor
        var nomeArmazenado;
        input_text.addEventListener('input', function () {
            nomeArmazenado = this.value;
        })

        painel_filho.appendChild(label_inputText);
        painel_filho.appendChild(input_text);

        //criando botao 
        var painel_filhoSubmit = document.createElement("span");
        painel_filhoSubmit.classList.add("painel_filhoSubmit-config")
        painel_filho.appendChild(painel_filhoSubmit);

        var buttonSubmit = document.createElement("button");
        buttonSubmit.classList.add("buttonSubmit-config");
        buttonSubmit.classList.add("buttonSubmit-config:hover");
        buttonSubmit.innerHTML = "Confirmar";
        painel_filhoSubmit.appendChild(buttonSubmit);


        buttonSubmit.addEventListener('click', () => {

            console.log(numEditSelecionado);
            //Se o número do item estiver dentro dos limites válidos
            if (numEditSelecionado >= 1 && numEditSelecionado <= arrayItens_Pai.length) {

                //pega o número digitado que o dentro da array
                var itemToEdit = arrayItens_Pai[numEditSelecionado - 1]; //Subtrai 1 porque o indice começa em 0
                console.log(itemToEdit.getAttribute(value))
                editarItem(itemToEdit);
                buttonC(); //Fecha o painel de edição
            } else {
                console.log("Número de item inválido. Insira um número válido.");
            }


        })
    }
})

function editarItem(itemToEdit) {

    //mostrando o valor atual para o usuário
    var selectNome = document.querySelector('#inputNome');
    selectNome.innerHTML = nomeArmazenado;

    // Quando o usuário clicar no botão "Concluído" dentro do painel de edição, atualize os valores do item com os novos valores inseridos
    buttonSubmit.addEventListener('click', () => {
        var nomeArmazenadoEdit;
        selectNome.addEventListener("input", () => { nomeArmazenadoEdit = this.value });
        itemToEdit[0] = nomeArmazenadoEdit; // Atualizando o nome do item no array
        // Você pode adicionar mais campos de edição e atualizar o item de acordo com a estrutura dos seus dados
    })
}


// posso usar o split para remover o item da array, e o insert para adicionar o novo

// dentro do botão adicionar toda vez que eu criar um item, esse item vai ter outro botão de editar, dentro dele
// de cada itemList terá este botão para editar
// este botão para editar retornará o respectivo elemento da array pai 
// dentro do painel que abrirá para editar, ele pegará todas as info do arrayfilho dentro daquele arraypai
// e deixara como placeholder ou visivel para o usuario
// ao usuario digitar novos valores, sera excluido o antigo arrayfilho
// e o arrayfilho atualizado (editado) sera inserido no local com os valores editados


//preciso usar o localStorage para que o conteúdo fique salvo mesmo se o usuario carregar, voltar, ou fechar a página.
//preciso estilizar o itemList-config para deixar ele mais bonito
//preciso verificar erros e bugs nas interações e funcionalidades, ver se acho bugs, e corrigilo
