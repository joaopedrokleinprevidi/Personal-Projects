const optionPlayElements = document.querySelectorAll(".optionPlay");
const jogadorDaVezElement = document.querySelector('#jogadorDaVez');
const winUserX = document.querySelector('#winUserX');
const defeatUserX = document.querySelector('#defeatUserX');
const winUserO = document.querySelector('#winUserO');
const defeatUserO = document.querySelector('#defeatUserO');

let userScoreWinX = 0;
let userScoreDefeatX = 0;
let userScoreWinO = 0;
let userScoreDefeatO = 0;

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

    setTimeout(() => {
        verificarVencedor();
    }, [100]); }

function reiniciarJogo() {
    optionPlayElements.forEach(element => { while(element.firstChild) { element.removeChild(element.firstChild) } }) }

function alternarJogador() { jogadorAtual = (jogadorAtual === 'X') ? 'O' : 'X'; }

function atualizarMensagem() { jogadorDaVezElement.innerText = `Jogador da Vez: ${jogadorAtual}`; }

function ultimoJogador() { let ultimoJogador = (jogadorAtual === "X") ? "O" : "X"; return ultimoJogador; }

function score() {
    if (ultimoJogador() == "X") { winUserX.textContent = `Venceu: ${++userScoreWinX}`; defeatUserO.textContent = `Perdeu: ${++userScoreDefeatO}` }
    if (ultimoJogador() == "O") { winUserO.textContent = `Venceu: ${++userScoreWinO}`; defeatUserX.textContent = `Perdeu: ${++userScoreDefeatX}` } 
}

function resetScore() {
    userScoreWinX = 0;
    userScoreDefeatX = 0;
    userScoreWinO = 0;
    userScoreDefeatO = 0;

    winUserO.textContent = `Venceu: ${userScoreWinO}`
    winUserX.textContent = `Venceu: ${userScoreWinX}`
    defeatUserX.textContent = `Perdeu: ${userScoreDefeatX}`
    defeatUserO.textContent = `Perdeu: ${userScoreDefeatO}` }

function verificarVencedor() {

     const item = selecionado
     .map((item, i) => [item, i])
     .filter((item) => item[0] === ultimoJogador())
     .map((item) => item[1]);

     for (pos of possiveisVitorias) {
        if(pos.every((item) => selecionado[item] === ultimoJogador())) {
            alert("O JOGADOR " + ultimoJogador() + " GANHOU!");
            score()
            selecionado = []
            reiniciarJogo()
            return;
        } }

     if (selecionado.filter((item) => item).length === 9 ){
        alert("DEU EMPATE!");
        selecionado = []
        reiniciarJogo()
        return;
     } }