const coresDoJogo = document.querySelectorAll(".coresDoJogo");
const buttonJogar = document.querySelector("#button");
const corAzul = document.querySelector("#blueColor");
const corAmarela = document.querySelector("#yellowColor");
const corVerde = document.querySelector("#greenColor");
const corVermelha = document.querySelector("#redColor");
const audio1 = document.querySelector("#audio1");
const audio2 = document.querySelector("#audio2");
const audio3 = document.querySelector("#audio3");
const audio4 = document.querySelector("#audio4");
const audioDoJogo = document.querySelector("#audioDoJogo");

let coresEscolhidasPelaMaquina = [];
let coresEscolhidasPeloUsuario = [];

let quantidadeDeVezesPraMaquinaJogar = 2;
let quantidadeDeVezesQueMaquinaJaJogou = 0;

buttonJogar.addEventListener("click", () => {
  rodarJogo();
  musicaDoJogo(true, false);
  buttonJogar.classList.add("button-display-none");
});

coresDoJogo.forEach((elemento) => {
  elemento.addEventListener("click", () => {
    const corEscolhida = elemento.getAttribute("data-i");

    coresEscolhidasPeloUsuario = coresEscolhidasPeloUsuario + corEscolhida;

    rodarAnimacaoDeCores(corEscolhida);
  });
});

function rodarAnimacaoDeCores(cor) {
  if (cor == 0) {
    corAzul.classList.add("animationColorBlue");
    corAzul.addEventListener("animationend", function onAnimationBlueEnd() {
      corAzul.classList.remove("animationColorBlue");
      corAzul.removeEventListener("animationend", onAnimationBlueEnd);
    });
    efeitosSonoros(true, false, false, false);
  }
  if (cor == 1) {
    corAmarela.classList.add("animationColorYellow");
    corAmarela.addEventListener(
      "animationend",
      function onAnimationYellowEnd() {
        corAmarela.classList.remove("animationColorYellow");
        corAmarela.removeEventListener("animationend", onAnimationYellowEnd);
      }
    );
    efeitosSonoros(false, true, false, false);
  }
  if (cor == 2) {
    corVerde.classList.add("animationColorGreen");
    corVerde.addEventListener("animationend", function onAnimationGreenEnd() {
      corVerde.classList.remove("animationColorGreen");
      corVerde.removeEventListener("animationend", onAnimationGreenEnd);
    });
    efeitosSonoros(false, false, true, false);
  }
  if (cor == 3) {
    corVermelha.classList.add("animationColorRed");
    corVermelha.addEventListener("animationend", function onAnimationRedEnd() {
      corVermelha.classList.remove("animationColorRed");
      corVermelha.removeEventListener("animationend", onAnimationRedEnd);
    });
    efeitosSonoros(false, false, false, true);
  }
}

function gerarCoresEscolhidasPelaMaquina() {
  const corAleatoria = parseInt(Math.random() * 4);

  rodarAnimacaoDeCores(corAleatoria);

  coresEscolhidasPelaMaquina = coresEscolhidasPelaMaquina + corAleatoria;
}

function rodarJogo() {
  const intervaloDasJodadasDaMaquina = setInterval(() => {
    gerarCoresEscolhidasPelaMaquina();
    quantidadeDeVezesQueMaquinaJaJogou++;

    if (
      quantidadeDeVezesPraMaquinaJogar <= quantidadeDeVezesQueMaquinaJaJogou
    ) {
      clearInterval(intervaloDasJodadasDaMaquina);
      setTimeout(() => {
        verificarSeJogoContinuaOuReseta();
      }, Number(`${quantidadeDeVezesQueMaquinaJaJogou}999`));
    }
  }, 650);
}

function verificarSeJogoContinuaOuReseta() {
  // return true para jogo continua (arrays iguais)
  if (
    arraysPossuemMesmoConteudo(
      coresEscolhidasPelaMaquina,
      coresEscolhidasPeloUsuario
    )
  ) {
    quantidadeDeVezesPraMaquinaJogar = quantidadeDeVezesPraMaquinaJogar + 1;
    quantidadeDeVezesQueMaquinaJaJogou = 0;
    coresEscolhidasPelaMaquina = [];
    coresEscolhidasPeloUsuario = [];
    rodarJogo();
  } else {
    resetarJogo();
  }
}

function arraysPossuemMesmoConteudo(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (i = 0; i <= array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
}

function resetarJogo() {
  console.log("Cores escolhidas pelo usuário: ", coresEscolhidasPeloUsuario);
  console.log("Cores escolhidas pela máquina: ", coresEscolhidasPelaMaquina);
  coresEscolhidasPelaMaquina = [];
  coresEscolhidasPeloUsuario = [];
  quantidadeDeVezesPraMaquinaJogar = 2;
  quantidadeDeVezesQueMaquinaJaJogou = 0;
  buttonJogar.classList.remove("button-display-none");
  alert(
    "Você errou ou demorou muito para jogar, o jogo foi resetado. Clique novamente em jogar."
  );
  musicaDoJogo(false, true);
}

function efeitosSonoros(a, b, c, d) {
  if (a) {
    audio1.play();
  }
  if (b) {
    audio2.play();
  }
  if (c) {
    audio3.play();
  }
  if (d) {
    audio4.play();
  }
}

function musicaDoJogo(a, b) {
  if (a) {
    audioDoJogo.play();
    audioDoJogo.volume = 0.1;
  }
  if (b) {
    audioDoJogo.pause();
    audioDoJogo.currentTime = 0;
  }
}
