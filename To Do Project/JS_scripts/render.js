function RenderizarItem ( mudarStatusDaTarefa, editarTarefa, removerTarefa ) {
    const listItensContainer = document.querySelector('.ListItensContainer')

    function createElement ( nome, id ) {
        const elementPai = document.createElement('div')
        elementPai.classList.add('divItemList')

        const paragrafo = document.createElement('p')
        paragrafo.innerText = nome

        const feitoButton = document.createElement('button')
        feitoButton.classList.add('feitoButton', 'buttonsItemList')
        feitoButton.addEventListener('click', () => mudarStatusDaTarefa(id))
        
        const editarButton = document.createElement('button')
        editarButton.classList.add('editarButton', 'buttonsItemList')
        editarButton.addEventListener('click', () => editarTarefa(id))

        const removerButton = document.createElement('button')
        removerButton.classList.add('removerButton', 'buttonsItemList')
        removerButton.addEventListener('click', () => removerTarefa(id))

        elementPai.append(paragrafo, feitoButton, editarButton, removerButton)

        return elementPai
    }
    
    return function renderElements ( itens ) {
        const itemFragment = document.createDocumentFragment()

        listItensContainer.innerHTML = ''

        itens.forEach( ({ nome, id }) => { 
            const newElement = createElement( nome, id )
            itemFragment.appendChild(newElement)
        })
        
        listItensContainer.appendChild(itemFragment)
    }
}

export default RenderizarItem;