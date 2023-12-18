const coresDoJogo = document.querySelectorAll('.coresDoJogo')
const buttonJogar = document.querySelector('#button')
const corAzul = document.querySelector('#blueColor')
const corAmarela = document.querySelector('#yellowColor')
const corVerde = document.querySelector('#greenColor')
const corVermelha = document.querySelector('#redColor')

let coresEscolhidasPelaMaquina = [];
let coresEscolhidasPeloUsuario = [];
let quantidadeDeVezesPraMaquinaJogar = 2;
let quantidadeDeVezesQueMaquinaJaJogou = 0;

buttonJogar.addEventListener('click', rodarJogo)

coresDoJogo.forEach( (elemento) => {
    elemento.addEventListener('click', ()=> {
        const corEscolhida = elemento.getAttribute('data-i');
        console.log("corEscolhida: ", corEscolhida)

        coresEscolhidasPeloUsuario = coresEscolhidasPeloUsuario + corEscolhida;
        console.log("Total de cores Escolhidas pelo usuário: ", coresEscolhidasPeloUsuario)

        rodarAnimacaoDeCores(corEscolhida)
    })
})

function rodarAnimacaoDeCores(cor){
    if(cor == 0) {
        corAzul.classList.add('animationColorBlue')
        corAzul.addEventListener('animationend', function onAnimationBlueEnd() { corAzul.classList.remove('animationColorBlue'); corAzul.removeEventListener('animationend', onAnimationBlueEnd); })  }
    if(cor == 1) {
        corAmarela.classList.add('animationColorYellow')
        corAmarela.addEventListener('animationend', function onAnimationYellowEnd() { corAmarela.classList.remove('animationColorYellow'); corAmarela.removeEventListener('animationend', onAnimationYellowEnd); }) }
    if(cor == 2) {
        corVerde.classList.add('animationColorGreen')
        corVerde.addEventListener('animationend', function onAnimationGreenEnd() { corVerde.classList.remove('animationColorGreen'); corAmarela.removeEventListener('animationend', onAnimationGreenEnd); }) }
    if(cor == 3) {
        corVermelha.classList.add('animationColorRed')
        corVermelha.addEventListener('animationend', function onAnimationRedEnd() { corVermelha.classList.remove('animationColorRed'); corVermelha.removeEventListener('animationend', onAnimationRedEnd); }) }
}


function gerarCoresEscolhidasPelaMaquina() {
    const corAleatoria = parseInt(Math.random() * 4)
    console.log(corAleatoria)

    rodarAnimacaoDeCores(corAleatoria)

    coresEscolhidasPelaMaquina = coresEscolhidasPelaMaquina + corAleatoria;
    console.log("coresDaMaquina: ", coresEscolhidasPelaMaquina)
}

function rodarJogo() {

    const intervaloDasJodadasDaMaquina = setInterval( ()=> {
    
        gerarCoresEscolhidasPelaMaquina();
        quantidadeDeVezesQueMaquinaJaJogou++;

        if(quantidadeDeVezesPraMaquinaJogar <= quantidadeDeVezesQueMaquinaJaJogou){ clearInterval(intervaloDasJodadasDaMaquina) }

    }, 750 )
}

function verificarSeJogoContinuaOuReseta() {
    // return true para jogo continua (arrays iguais)
    if( arraysPossuemMesmoConteudo(coresEscolhidasPelaMaquina, coresEscolhidasPeloUsuario) ) {
        quantidadeDeVezesPraMaquinaJogar = quantidadeDeVezesPraMaquinaJogar + 1;
    }else {
        resetarJogo()
    }
}

function arraysPossuemMesmoConteudo(array1, array2){
    if(array1.length !== array2.length) { return false }

    for(i = 0; i <= array1.length; i++) {
        if(array1[i] !== array2[i]) { return false }
    }

    return true; 
}

function resetarJogo() {
    coresEscolhidasPelaMaquina = [];
    coresEscolhidasPeloUsuario = [];
    quantidadeDeVezesPraMaquinaJogar = 2;
    quantidadeDeVezesQueMaquinaJaJogou = 0;
}

//1- config o botao do jogar, pra iniciar o jogo, e o botao sumir
//2- config como vai ser feita a analise pra saber se o jogador venceu ... 
//3- config para o botao do jogo voltar, caso o usuario perca

// adds:
//4- adicionar som ao jogo, para cada cor e caso perca
//5- adicionar interface de vitórias/derrotas??


//... 2: Pode ser feito com um tempo, ex tem 5 vezes pra maquina jogar, entao o usuario tem 7s pra jogar...
//ao final da animation do 