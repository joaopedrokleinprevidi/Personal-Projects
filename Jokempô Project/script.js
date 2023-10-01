var buttonJogar = document.querySelector('#button-jogar');

function playGame() {
    window.location = "http://127.0.0.1:5500/Jokemp%C3%B4%20Project/game%20archives/game.html";
}



var selectPedra = document.querySelector("#selectPedra");
var selectPapel = document.querySelector("#selectPapel");
var selectTesoura = document.querySelector("#selectTesoura");
var win = 0;
var defeat = 0;
var empate = 0;
var score = 0;

var winHTML = document.querySelector('#win');
var defeatHTML = document.querySelector('#defeat');
var empateHTML = document.querySelector('#empate');
var scoreHTML = document.querySelector('#score');


var maquina = parseInt(Math.random() * 3);

function resetInterface(){
    var win = 0;
    var defeat = 0;
    var empate = 0;
    var score = 0;

    empateHTML.textContent = "Empate: " + empate;
    defeatHTML.textContent = "Derrota: " + defeat;
    winHTML.textContent = "Vitória: " + win;
    scoreHTML.textContent = "Score: " + score;
// tem q ver isso aqui, pq tá bugando
// tu da reset e ok, ele reseta, mas se tu continuar jogando ele volta como tava antes
//to cagado de sono e a lógica aqui tá faiando, deixo contigo joão do futuro! tu é foda!
}

function usuarioPedra() {
    var jokempo = 1;
    if (maquina == 0){
        empate = empate + 1;
        empateHTML.textContent = "Empate: " + empate;
    }
    else if (maquina == 1){
        defeat = defeat + 1;
        defeatHTML.textContent = "Derrota: " + defeat;
    }
    else if (maquina == 2){
        win = win + 1;
        winHTML.textContent = "Vitória: " + win;
        score = score + 1;
        scoreHTML.textContent = "Score: " + score;
    }

//tem q escreve o resto: papel e tesoura
//tem q fazer no html aparecer oque a máquina jogou !
  console.log("Maquina: " + maquina);
  console.log("Empate: "+ empate);
  console.log("Derrota: " + defeat);
  console.log("Vitória: " + win);
  console.log("Score: " + score);
} 
/*
    RESULTADOS MÁQUINA: 
    0 == PEDRA
    1 == PAPEL
    2 == TESOURA
    */

    // Empate!
  
if(jokempo == 1 && maquina == 0){
    console.log("Você jogou: PEDRA")
    console.log("A máquina jogou: PEDRA")
    console.log("Resultado: EMPATE!")
}else if(jokempo == 2 && maquina == 1){
    console.log("A máquina jogou: PAPEL")
    console.log("Você jogou: PAPEL")
    console.log("Resultado: EMPATE!")
}else if(jokempo == 3 && maquina == 2){
    console.log("Você jogou: TESOURA")
    console.log("A máquina jogou: TESOURA")
    console.log("Resultado: EMPATE!")
    // ...
    // Vitória ou Derrota (PEDRA)
}else if(jokempo == 1 && maquina == 1){
    console.log("Você jogou: PEDRA")
    console.log("A máquina jogou: PAPEL")
    console.log("Resultado: A máquina venceu!")
}else if(jokempo == 1 && maquina == 2){
    console.log("Você jogou: PEDRA")
    console.log("A máquina jogou: TESOURA")
    console.log("Resultado: Parabéns, você venceu!")
    //Vitória ou Derrota (PAPEL)
}else if(jokempo == 2 && maquina == 0){
    console.log("Você jogou: PAPEL")
    console.log("A máquina jogou: PEDRA")
    console.log("Resultado: Parabéns, você venceu!")
}else if(jokempo == 2 && maquina == 2){
    console.log("Você jogou: PAPEL")
    console.log("A máquina jogou: TESOURA")
    console.log("Resultado: A máquina venceu!")
    //Vitória ou Derrota (TESOURA)
}else if(jokempo == 3 && maquina == 0){
    console.log("Você jogou: TESOURA")
    console.log("A máquina jogou: PEDRA")
    console.log("Resultado: A máquina venceu!")
}else if(jokempo == 3 && maquina == 1){
    console.log("Você jogou: TESOURA")
    console.log("A máquina jogou: PAPEL")
    console.log("Resultado: Parabéns, você venceu!")
}; 
