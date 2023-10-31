let selectButtons = document.querySelector('.selectButtons');
let adicionarButton = document.querySelector('.adicionarButton');
let submitButton = document.querySelector('.submitButton');
let selectForm = document.querySelector('selectForm');

selectForm.classList.remove('formListHeader');
selectForm.classList.add('invisibleNoneFormListHeader');

function formulario () {

    selectButtons.addEventListener('click', function toogleViewForm() {
        if ( adicionarButton.classList.contains('adicionarButton') ) {
            adicionarButton.classList.add('esconderButton');
            selectForm.classList.remove('displayNoneFormListHeader');
            selectForm.classList.add('formListHeader');
            submitButton.classList.add('submitButton');
        }
        else if( submitButton.classList.contains('submitButton') ) {
            submitButton.classList.add('esconderButton');
            selectForm.classList.add('displayNoneFormListHeader');
            selectForm.classList.remove('formListHeader');
            adicionarButton.classList.add('adicionarButton');
        }

    })
}



formulario();