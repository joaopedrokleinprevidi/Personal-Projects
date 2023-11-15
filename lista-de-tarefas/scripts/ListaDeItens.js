function ListaDeItens () {
    const listaDeItens = { };
    
    function createItem( dataItem ) {
        const id = generateId()
        const tarefaFinalizada = false;

        listaDeItens[id] = { ...dataItem, id, tarefaFinalizada }
        console.log(listaDeItens[id])
    }

    function deleteItem( id ) {
        delete listaDeItens[id];        
    }

    function editItem( id, edited ) {
        if ( id in listaDeItens ) {
            const itemAtual = listaDeItens[id]
            listaDeItens[id] = { ...itemAtual, ...edited }
        }
        else return false        
    }

    function mudarStatusDoItem ( id ) {
        const statusAtual = listaDeItens[id].tarefaFinalizada

        listaDeItens[id].tarefaFinalizada = !statusAtual
    }

    function getItem( id ) {
        return listaDeItens[id];
    }

    function getAllItems() {
        const listaDeIds = Object.keys(listaDeItens)

        return listaDeIds.map( id => listaDeItens[id] )
    }

    function generateRandomNumber() {
        const MAXIMO_DE_ITENS = 3001
        return parseInt( Math.random() * MAXIMO_DE_ITENS )
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
        getAllItems,
        mudarStatusDoItem
    }
}

export default ListaDeItens; 