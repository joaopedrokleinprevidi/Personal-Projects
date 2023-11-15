const painelDeListas = document.querySelector("#painel-de-listas")
const buttonOcultarPainelDeListas = document.querySelector("#buttonOcultarPainelDeListas")

buttonOcultarPainelDeListas.addEventListener('click', () => {
    painelDeListas.classList.toggle('painel-de-listas--visivel')
})