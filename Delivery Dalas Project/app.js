import manipulador from './manipulation.js';
import ingredientes from './ingredientes.js';

let ingredientesOrdenados = manipulador.ordenar(ingredientes, 'nome');
let containerIngredientes = document.querySelector('#container-ingredientes');
let ingredientesCapitalizados = manipulador.capitalizar(ingredientes, 'nome');   
for (let ingrediente of ingredientesOrdenados){
        let textoHTML = `
        <div class="ingredientes">
            <img src="img/${ingrediente.img}">
            <p class="nome-ingrediente">${ingrediente.nome} </p>
        </div>
        `
        containerIngredientes.innerHTML += textoHTML;
    }


    console.log(ingredientesCapitalizados);


