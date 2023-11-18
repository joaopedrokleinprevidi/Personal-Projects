const optionPlayElements = document.querySelectorAll(".optionPlay");
const jogadorDaVezElement = document.querySelector('#jogadorDaVez');

let selecionado = []

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

function temParagrafo(element) { return element.querySelector('.paragrafoOptionPlay') !== null; }

function adicionarJogada(element) {
    const paragrafo = document.createElement("p");
    paragrafo.classList.add('paragrafoOptionPlay');
    paragrafo.textContent = jogadorAtual;
    element.appendChild(paragrafo);
    const index = element.getAttribute("data-i");
    selecionado[index] = jogadorAtual;
    console.log(selecionado);

    setTimeout(() => {
        verificarVencedor();
    }, [100]);
}

function alternarJogador() { jogadorAtual = (jogadorAtual === 'X') ? 'O' : 'X'; }

function atualizarMensagem() { jogadorDaVezElement.innerText = `Jogador da Vez: ${jogadorAtual}`; }

function verificarVencedor() {
     let ultimoJogador = (jogadorAtual === "X") ? "O" : "X";

     const item = selecionado
     .map((item, i) => [item, i])
     .filter((item) => item[0] === ultimoJogador)
     .map((item) => item[1]);

     for (pos of possiveisVitorias) {
        if(pos.every((item) => selecionado[item] === ultimoJogador)) {
            alert("O JOGADOR " + ultimoJogador + " GANHOU!");
            selected = []
            return;
        }
     }
     if (selecionado.filter((item) => item).length === 9 ){
        alert("DEU EMPATE!");
        selected = []
        return;
     }
}

