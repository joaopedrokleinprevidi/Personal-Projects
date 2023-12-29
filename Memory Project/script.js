const todosCards = document.querySelectorAll('.allButtons');
const containerDeTodosOsCards = document.querySelector('.paiDoAllButtons')
const telaDoJogo = document.querySelector('#gameContainer');

const numerosUsados = [];

const nivel1 = 16;
const nivel2 = 20;
const nivel3 = 24;

function criarCard(e) {
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('paragrafoCard')
    paragrafo.innerHTML = e;
    paragrafo.setAttribute('data-card', e)
    
    const div = document.createElement('div')
    div.classList.add('allButtons')

    div.appendChild(paragrafo)
    containerDeTodosOsCards.appendChild(div)

}

function embaralharCards(){

    do{
    const numeroAleatorio = Math.floor(Math.random() * 100);
    console.log(numeroAleatorio)

    const numerosJaGerado = numerosUsados.includes(numeroAleatorio)

    if(!numerosJaGerado) {
    numerosUsados.push(numeroAleatorio)
    }
 
    } while(numerosUsados.length == nivel1)
    console.log(numerosUsados.length)
}
embaralharCards()









todosCards.forEach(function(elemento) {
    elemento.addEventListener('click', (event)=>{
      rodarAnimacaoDeClick(event)  
    })
})

function rodarAnimacaoDeClick(elemento){
    elemento.style.color = 'black';
}

