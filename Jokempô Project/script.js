var buttonJogar = document.querySelector('#button-jogar');

function playGame() {
    window.location = "http://127.0.0.1:5500/Jokemp%C3%B4%20Project/game%20archives/game.html";
}

var loading_all = document.querySelector(".loading_all");
function loading_false(){
    loading_all.classList.remove('loadingPedraTrue')
    loading_all.classList.remove('loadingPapelTrue')
    loading_all.classList.remove('loadingTesouraTrue')
    }
    loading_false();



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

function MaquinaG(){
var aleatorio = parseInt(Math.random() * 3);
return aleatorio;
}
MaquinaG();

function resetInterface(){
    var win = 0;
    var defeat = 0;
    var empate = 0
    var score = 0;

    empateHTML.textContent = "Empate: " + empate;
    defeatHTML.textContent = "Derrota: " + defeat;
    winHTML.textContent = "Vitória: " + win;
    scoreHTML.textContent = "Score: " + score;
// tem q ver isso aqui, pq tá bugando
// tu da reset e ok, ele reseta, mas se tu continuar jogando ele volta como tava ante
}
console.log("Vitória: " + win)
console.log("Derrota: " + defeat)

function clickUsuario_loading(){
    if (usuarioPedra()){
        loading_all.classList.remove("loadingPapelFalse");
        loading_all.classList.add("loadingPapelTrue");

        loading_all.classList.remove("loading")
    }
}
/*

1- Deixa invisível tudo == OK
2- IF:
Se usuário clicar in (usuarioPedra()){
    mostra loadingPapel && loadingTesoura
}
Se usuário clicar in (usuarioPapel()){
    mostra loadingPedra && loadingTesoura
}
Se usuário clicar in (usuárioTesoura()){
    mostra loadingPedra && loadingPapel
}

TEM q colocar essa função em cada jogada

3- após tudo acima estiver ok. Criar animação loading
4- Vou ter que fazer uma verificação, de caso a animação esteja OK, sumir todos os loading
5- Ao usuário clicar novamente em uma opção, isso tem que estar pegando corretamente
*/

function displayMaquina(){
    sectionMaquina.classList.remove('maquina') //tira o display none
    sectionMaquina.classList.add('maquinaAlterado'); //deixa visivel com flexbox centralizado
    playMaquina.classList.remove('playMaquina'); //tira o display none
    playMaquina.classList.add('playMaquinaAlterado'); //deixa visivel
}

function maquinaPedra(){ 
    displayMaquina();
    playMaquina.src = "../images/Pedra.png"
    console.log(playMaquina.src);
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
    if (MaquinaG() == 0){
        clickUsuario_loading();
        maquinaPedra();
        empate = empate + 1;
        empateHTML.textContent = "Empate: " + empate;
    }
    else if (MaquinaG() == 1){
        maquinaPapel();
        defeat = defeat + 1;
        defeatHTML.textContent = "Derrota: " + defeat;
    }
    else if (MaquinaG() == 2){
        maquinaTesoura();
        win = win + 1;
        winHTML.textContent = "Vitória: " + win;
        score = score + 1;
        scoreHTML.textContent = "Score: " + score;
    }
}

function usuarioPapel(){
    
 if(MaquinaG() == 0){
        maquinaPedra();
        win = win + 1;
        winHTML.textContent = "Vitória: " + win;
        score = score + 1;
        scoreHTML.textContent = "Score: " + score;
 }
 else if (MaquinaG() == 1){
        maquinaPapel();
        empate = empate + 1;
        empateHTML.textContent = "Empate: " + empate;
 }
 else if(MaquinaG() == 2){
        maquinaTesoura();
        defeat = defeat + 1;
        defeatHTML.textContent = "Derrota: " + defeat;
 }
}

function usuarioTesoura(){
    if(MaquinaG() == 0){
        maquinaPedra();
        defeat = defeat + 1;
        defeatHTML.textContent = "Derrota: " + defeat;
     }
     else if (MaquinaG() == 1){     
        maquinaPapel();
        win = win + 1;
        winHTML.textContent = "Vitória: " + win;
        score = score + 1;
        scoreHTML.textContent = "Score: " + score;
     }
     else if(MaquinaG() == 2){
        maquinaTesoura();
        empate = empate + 1;
        empateHTML.textContent = "Empate: " + empate;
     }
}

  console.log("Maquina: " + MaquinaG());
  console.log("Empate: "+ empate);
  console.log("Derrota: " + defeat);
  console.log("Vitória: " + win);
  console.log("Score: " + score);
  console.log(resetInterface());

/*
    RESULTADOS MÁQUINA: 
    0 == PEDRA
    1 == PAPEL
    2 == TESOURA
    */

