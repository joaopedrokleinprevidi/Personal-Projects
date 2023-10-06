var buttonJogar = document.querySelector('#button-jogar');

function playGame() {
    window.location = "http://127.0.0.1:5500/Jokemp%C3%B4%20Project/game%20archives/game.html";
}

var selectPedra = document.querySelector("#selectPedra");
var selectPapel = document.querySelector("#selectPapel");
var selectTesoura = document.querySelector("#selectTesoura");

var playMaquina = document.querySelector(".playMaquina");
var sectionMaquina = document.querySelector(".maquina");

var win = 0;
var defeat = 0;
var empate = 0;
var score = 0;

var winHTML = document.querySelector('#win');
var defeatHTML = document.querySelector('#defeat');
var empateHTML = document.querySelector('#empate');
var scoreHTML = document.querySelector('#score');

function maquinaJogou(){
var maquinaAleatorio = parseInt(Math.random() * 3);
return maquinaAleatorio;
};

function resetInterface(){
    win = 0;
    defeat = 0;
    empate = 0
    score = 0;

    empateHTML.textContent = "Empate: " + empate;
    defeatHTML.textContent = "Derrota: " + defeat;
    winHTML.textContent = "Vitória: " + win;
    scoreHTML.textContent = "Score: " + score;
}
console.log("Vitória: " + win)
console.log("Derrota: " + defeat)

function displayMaquina(){
    sectionMaquina.classList.remove('maquina') //tira o display none
    sectionMaquina.classList.add('maquinaAlterado'); //deixa visivel com flexbox centralizado
    playMaquina.classList.remove('playMaquina'); //tira o display none
    playMaquina.classList.add('playMaquinaAlterado'); //deixa visivel
}

function maquinaPedra(){ 
    displayMaquina();
    playMaquina.src = "../images/Pedra.png"
}

function maquinaPapel(){
    displayMaquina();
    playMaquina.src = "../images/Papel.png"
}

function maquinaTesoura(){
    displayMaquina();
    playMaquina.src = "../images/Tesoura.png" 
}


function usuarioPedra() {
    var escolhaMaquina = maquinaJogou();
    if (escolhaMaquina == 0){
        maquinaPedra();
        empate = empate + 1;
        empateHTML.textContent = "Empate: " + empate;
        score = 0;
        scoreHTML.textContent = "Score: " + score;
    }
    else if (escolhaMaquina == 1){
        maquinaPapel();
        defeat = defeat + 1;
        defeatHTML.textContent = "Derrota: " + defeat;
        score = 0;
        scoreHTML.textContent = "Score: " + score;
    }
    else if (escolhaMaquina == 2){
        maquinaTesoura();
        win = win + 1;
        winHTML.textContent = "Vitória: " + win;
        score = score + 1;
        scoreHTML.textContent = "Score: " + score;
    }
}

function usuarioPapel(){
    var escolhaMaquina = maquinaJogou();
    if(escolhaMaquina == 0){
            maquinaPedra();
            win = win + 1;
            winHTML.textContent = "Vitória: " + win;
            score = score + 1;
            scoreHTML.textContent = "Score: " + score;
    }
    else if (escolhaMaquina == 1){
            maquinaPapel();
            empate = empate + 1;
            empateHTML.textContent = "Empate: " + empate;
            score = 0;
            scoreHTML.textContent = "Score: " + score;
    }
    else if(escolhaMaquina == 2){
            maquinaTesoura();
            defeat = defeat + 1;
            defeatHTML.textContent = "Derrota: " + defeat;
            score = 0;
            scoreHTML.textContent = "Score: " + score;
    }
}

function usuarioTesoura(){
    var escolhaMaquina = maquinaJogou();
    if(escolhaMaquina == 0){
        maquinaPedra();
        defeat = defeat + 1;
        defeatHTML.textContent = "Derrota: " + defeat;
        score = 0;
        scoreHTML.textContent = "Score: " + score;
     }
     else if (escolhaMaquina == 1){     
        maquinaPapel();
        win = win + 1;
        winHTML.textContent = "Vitória: " + win;
        score = score + 1;
        scoreHTML.textContent = "Score: " + score;
     }
     else if(escolhaMaquina == 2){
        maquinaTesoura();
        empate = empate + 1;
        empateHTML.textContent = "Empate: " + empate;
        score = 0;
        scoreHTML.textContent = "Score: " + score;
     }
    }


  console.log("Maquina: " + maquinaJogou());
  console.log("Empate: "+ empate);
  console.log("Derrota: " + defeat);
  console.log("Vitória: " + win);
  console.log("Score: " + score);

/*
    RESULTADOS MÁQUINA: 
    0 == PEDRA
    1 == PAPEL
    2 == TESOURA
    */

