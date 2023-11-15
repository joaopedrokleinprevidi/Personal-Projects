const painelDeListas = document.querySelector("#painelDeEscolherListas")
const buttonOcultarPainelDeListas = document.querySelector("#buttonOcultarPainelDeListas")

buttonOcultarPainelDeListas.addEventListener('click', () => {
    painelDeListas.classList.toggle('painel-de-listas--visivel')
})