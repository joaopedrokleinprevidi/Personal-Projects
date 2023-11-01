function ListaDeItens () {
    const listaDeItens = { };
    
    function createItem( dataItem ) {
        const id = generateId()
        
        listaDeItens[id] = { ...dataItem }

        console.log(listaDeItens)
    }

    function deleteItem() {
        
    }

    function editItem() {
        
    }

    function getItem() {
        
    }

    function getAllItems() {

    }

    function generateRandomNumber() {
        const MAXIMO_DE_ITENS = 3001
        return parseInt( Math.random() * MAXIMO_DE_ITENS)
    }

    function generateId() {
        const id = `item-${generateRandomNumber()}`
        const idJaExiste = id in listaDeItens

        return idJaExiste ? generateId() : id
    }

    return {
        createItem,
        deleteItem,
        editItem,
        getItem,
        getAllItems
    }
}

const listaDeItens = ListaDeItens()

listaDeItens.createItem({
    nome: 'Limpar casa'
})

export default ListaDeItens; 