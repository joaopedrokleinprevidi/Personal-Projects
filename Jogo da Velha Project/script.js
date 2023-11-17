const optionPlayElements = document.querySelectorAll(".optionPlay");
const jogadorDaVezElement = document.querySelector('#jogadorDaVez');

/*
const colunaUmLinhaUm = document.querySelector('#1-1');
const columaUmLinhaDois = document.querySelector('#1-2');
const colunaUmLinhaTres = document.querySelector('#1-3');

const colunaDoisLinhaUm = document.querySelector('#2-1');
const colunaDoisLinhaDois = document.querySelector('#2-2');
const colunaDoisLinhaTres = document.querySelector('#2-3');

const colunaTresLinhaUm = document.querySelector('#3-1');
const colunaTresLinhaDois = document.querySelector('#3-2');
const colunaTresLinhaTres = document.querySelector('#3-3');
*/

const possiveisVitorias = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
];
//trabalhando com data-* do html ... 
//preciso retornar o valor em alguma function
// e verificar se ta tendo vitoria
// e de quem é a vitória (verificando o ultimo a jogar)

let jogadorAtual = 'X';

optionPlayElements.forEach(element => {
    element.addEventListener('click', () => {
        if (temParagrafo(element)) {
            return null;
        }

        adicionarJogada(element);
        alternarJogador();
        atualizarMensagem();
    });
});

function temParagrafo(element) {
    return element.querySelector('.paragrafoOptionPlay') !== null;
}

function adicionarJogada(element) {
    const paragrafo = document.createElement("p");
    paragrafo.classList.add('paragrafoOptionPlay');
    paragrafo.textContent = jogadorAtual;
    element.appendChild(paragrafo);
}

function alternarJogador() {
    jogadorAtual = (jogadorAtual === 'X') ? 'O' : 'X';
}

function atualizarMensagem() {
    jogadorDaVezElement.innerText = `Jogador da Vez: ${jogadorAtual}`;
}

function verificarJogador(element) {
     
}

