let buttonOcultarPainelEscolherListas = document.querySelector('#painelSelectListas_ocultarButton');
let buttonInfoApresentaçao = document.querySelector('#painelSelectListas_infoButton');
let sectionInfoApresentaçao = document.querySelector('#apresentation_section_info');
let painelEscolherListas = document.querySelector('#painelDeEscolherListas')
let painelEscolherListas_buttonDeOcultar = document.querySelector('#painelSelectListas_ocultarButton');
let painelEscolherListas_buttonDeInfoApresentaçao = document.querySelector('#painelSelectListas_infoButton')
let painelLista = document.querySelector('#lists_section')

function toggleOcultarOuMostrar_PainelEscolherListas() {
    painelEscolherListas.classList.toggle('painel_listasAnimationOcultar');
    painelEscolherListas_buttonDeOcultar.classList.toggle('Animation_buttonListaSelector');
    painelEscolherListas_buttonDeInfoApresentaçao.classList.toggle('Animation_buttonListaSelector');
    painelLista.classList.toggle('section_lists_animation');
    painelLista.classList.toggle('section_lists');
}


buttonOcultarPainelEscolherListas.addEventListener('click', toggleOcultarOuMostrar_PainelEscolherListas)
buttonInfoApresentaçao.addEventListener('click', ()=> {
    sectionInfoApresentaçao.classList.toggle('section._apresentaçaoAnimation')
})
