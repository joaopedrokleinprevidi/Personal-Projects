let buttonOcultarPainelEscolherListas = document.querySelector('#painelSelectListas_ocultarButton');
let painelEscolherListas = document.querySelector('#painelDeEscolherListas')
let painelEscolherListas_buttonDeOcultar = document.querySelector('#painelSelectListas_ocultarButton');
let painelEscolherListas_buttonDeInfoApresentaçao = document.querySelector('#painelSelectListas_infoButton')

function toggleOcultarOuMostrar_PainelEscolherListas() {
    painelEscolherListas.classList.toggle('painel_listasAnimationOcultar');
    painelEscolherListas_buttonDeOcultar.classList.toggle('Animation_buttonListaSelector');
    painelEscolherListas_buttonDeInfoApresentaçao.classList.toggle('Animation_buttonListaSelector');
}


buttonOcultarPainelEscolherListas.addEventListener('click', toggleOcultarOuMostrar_PainelEscolherListas)

