import ListaDeItens from './ListaDeItens.js';
import RenderizarItem from './render.js';

const listaDeItens = ListaDeItens();

function formulario () {
    const renderizarItem = RenderizarItem(mudarStatusDaTarefa, editarTarefa, removerTarefa);

    let submitAdicionarBttn = document.querySelector('#adicionarBtn');
    let selectFormHeader = document.querySelector('.invisibleFormListHeader');
    let selectForm = document.querySelector('.formListHeader');

    submitAdicionarBttn.addEventListener( 'click', mostrarFormulario );
    selectForm.addEventListener( 'submit', submitForm );

    function ocultarFormulario(){
        selectFormHeader.classList.add('invisibleFormListHeader');
    }

    function mostrarFormulario() { 
        selectFormHeader.classList.remove('invisibleFormListHeader');        
    }

    function getInputValues() {
        const nomeInputValue = selectForm.nome.value;
        const corInputValue = selectForm.cor.value
        const precoInputValue = selectForm.preco.value;
        const dataInputValue = selectForm.data.value;
        const alarmeInputValue = selectForm.selector[0].checked;
        //ALARME: true == ativado || false == desativado

        console.log(alarmeInputValue)

        return {
            nome: nomeInputValue,
            cor: corInputValue,
            preco: precoInputValue,
            data: dataInputValue,
            alarme: alarmeInputValue 
        }
    }

    function submitForm ( evento ) {
        evento.preventDefault()

        const formCreateMode = selectForm.classList.contains('createItensFormListHeader')
        const dataOfForm = getInputValues()

        if( formCreateMode ) { createItem(dataOfForm) }
        else { editarItem(dataOfForm) }
        
        ocultarFormulario()
        selectForm.reset()
    };

    function createItem( dataOfForm ) {
        listaDeItens.createItem( dataOfForm )
    
        updateItens()
    }

    function editarItem( dataOfForm ) {
        listaDeItens.editItem( dataOfForm )
        
        updateItens()
    }

    function updateItens () {
        const itens = listaDeItens.getAllItems()

        renderizarItem( itens )
    }

    function mudarStatusDaTarefa( id ) {
        listaDeItens.mudarStatusDoItem( id )
    }

    function editarTarefa( id ) {
        const item = listaDeItens.getItem(id)

        mostrarFormulario()
        swapCreateOrEditFormMode()
        showInfoOfForm( item )

        ocultarFormulario()
        
    }

    function showInfoOfForm ( dataOfForm ) {
        selectForm.nome.value = dataOfForm.nome
        selectForm.cor.value = dataOfForm.cor
        selectForm.preco.value = dataOfForm.preco
        selectForm.data.value = dataOfForm.data
        
        const optionsInputRadio = selectForm.selector
        const radioYes = optionsInputRadio[0]
        const radioNo = optionsInputRadio[1]
        
        if ( radioYes.checked ) radioYes.checked = true
        else radioNo.checked = true 
    }

    function removerTarefa( id ) {
       listaDeItens.deleteItem(id)

       updateItens()
    }

    function swapCreateOrEditFormMode() {
        const formCreateMode = selectForm.classList.contains('createItensFormListHeader')

        if ( formCreateMode ) {
            selectForm.classList.remove('createItensFormListHeader');
            selectForm.classList.add('editItensFormListHeader');
        } else {
            selectForm.classList.remove('editItensFormListHeader');
            selectForm.classList.add('createItensFormListHeader')
        }
    }
}

formulario();