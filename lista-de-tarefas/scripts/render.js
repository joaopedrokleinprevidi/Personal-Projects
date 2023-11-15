function RenderizarItem ( mudarStatusDaTarefa, editarTarefa, removerTarefa ) {
    const listItensContainer = document.querySelector('.ListItensContainer')

    function createElement ( nome, id, cor ) {
        const elementPai = document.createElement('div')
        elementPai.classList.add('divItemList')

        const bolinhaCorTarefa = document.createElement('span')
        bolinhaCorTarefa.classList.add('corTarefaBolinha');
        bolinhaCorTarefa.style.backgroundColor = cor

        const paragrafo = document.createElement('p')
        paragrafo.innerText = nome

        const feitoButton = document.createElement('button')
        feitoButton.classList.add('feitoButton', 'buttonsItemList')
        feitoButton.addEventListener('click', () => mudarStatusDaTarefa(id))
        
        const editarButton = document.createElement('button')
        editarButton.classList.add('editarButton', 'buttonsItemList')
        editarButton.addEventListener('click', () => editarTarefa(id) )

        const removerButton = document.createElement('button')
        removerButton.classList.add('removerButton', 'buttonsItemList')
        removerButton.addEventListener('click', () => removerTarefa(id))

        elementPai.append(bolinhaCorTarefa, paragrafo, feitoButton, editarButton, removerButton)

        return elementPai
    }
    
    return function renderElements ( itens ) {
        const itemFragment = document.createDocumentFragment()

        listItensContainer.innerHTML = ''

        itens.forEach( ({ nome, id, cor }) => { 
            const newElement = createElement( nome, id, cor )
            itemFragment.appendChild(newElement)
        })
        
        listItensContainer.appendChild(itemFragment)
    }
}

export default RenderizarItem;