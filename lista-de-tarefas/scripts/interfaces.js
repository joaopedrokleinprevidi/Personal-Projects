let buttonOcultarPainelEscolherListas = document.querySelector('#painelSelectListas_ocultarButton');
let buttonInfoApresentaçao = document.querySelector('#painelSelectListas_infoButton');
let sectionInfoApresentaçao = document.querySelector('#apresentation_section_info');
let sectionApresentaçao_iniciarApp_button = document.querySelector('#sectionApresentaçao_iniciarApp_button');
let painelEscolherListas = document.querySelector('#painelDeEscolherListas')
let painelEscolherListas_buttonDeOcultar = document.querySelector('#painelSelectListas_ocultarButton');
let painelEscolherListas_buttonDeInfoApresentaçao = document.querySelector('#painelSelectListas_infoButton')
let painelLista = document.querySelector('#lists_section')
let body = document.querySelector('.body_with_lists')

function toggleOcultarOuMostrar_PainelEscolherListas() {
    painelEscolherListas.classList.toggle('painel_listasAnimationOcultar');
    painelEscolherListas_buttonDeOcultar.classList.toggle('Animation_buttonListaSelector');
}

buttonOcultarPainelEscolherListas.addEventListener('click', toggleOcultarOuMostrar_PainelEscolherListas)

sectionApresentaçao_iniciarApp_button.addEventListener('click', ()=> {
    painelLista.classList.add('section_lists')
    painelEscolherListas.classList.toggle('painel-lista--visivel')
    painelEscolherListas.classList.toggle('painel-lista')

})

