var jokempo = parseInt(prompt("[JOKEMPO] Digite 1 para [PEDRA], 2 para [PAPEL] ou 3 para [TESOURA]."));
var maquina = parseInt(Math.random() * 3);
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