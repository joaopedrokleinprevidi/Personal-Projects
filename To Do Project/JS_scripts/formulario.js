import ListaDeItens from './ListaDeItens.js';

function formulario () {
    let submitAdicionarBttn = document.querySelector('#adicionarBtn');
    let selectFormHeader = document.querySelector('.invisibleFormListHeader');
    let selectForm = document.querySelector('.formListHeader');

    submitAdicionarBttn.addEventListener( 'click', toggleViewForm );
    selectForm.addEventListener( 'submit', submitForm );

    function toggleViewForm() { 
        selectFormHeader.classList.toggle('invisibleFormListHeader');        
    }

    function getInputValues() {
        const nomeInputValue = selectForm.nome.value;
        const corInputValue = selectForm.cor.value
        const precoInputValue = selectForm.preco.value;
        const dataInputValue = selectForm.data.value;
        const alarmeInputValue = selectForm.selector.value;

        return {
            nomeInputValue,
            corInputValue,
            precoInputValue,
            dataInputValue,
            alarmeInputValue 
        }
    }

    function submitForm ( evento ) {
        evento.preventDefault()

        const formCreateMode = selectForm.classList.contains('createItensFormListHeader')
        const dataOfForm = getInputValues()

        console.log(dataOfForm)

        if( formCreateMode ) { createItem(dataOfForm) }
        else { editarItem(dataOfForm) }
        
        selectForm.reset()
        toggleViewForm()
    };

    function createItem( dataOfForm ) {

    }

    function editItem( dataOfForm ) {
        
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