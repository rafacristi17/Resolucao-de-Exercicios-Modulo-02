/*
5. Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).
*/
let prompt= require("prompt-sync")();


     prompt("Vamos jogar joKenpo! 0 = pedra, 5 = papel e 2 = tesoura, quero ver quem vai ganhar, aperte enter e digitem seus números : ");
    let jog01= parseInt(prompt("Digite seu número jogador 01 "));
    let jog02= parseInt(prompt("Digite seu número jogador 02 "));


    if (jog01 ===jog02 ){
        console.log("Empate! Tentem novamente.")
    }if (jog01 == 0 && jog02 ==2) {
        console.log("Pedra quebra tesoura, jogador 01 venceu!")
    } if(jog01==2 && jog02==5){
        console.log("Tesoura corta papel, jogador 01 venceu!")
    }if (jog01==5 && jog02==0){
        console.log("Papel enrola pedra, jogador 01 venceu!")
    }if (jog02 == 0 && jog01 ==2) {
        console.log("Pedra quebra tesoura, jogador 02 venceu!")
    }if(jog02==2 && jog01==5){
        console.log("Tesoura corta papel, jogador 02 venceu!")
    }if (jog02==5 && jog01==0){
        console.log("Papel enrola pedra, jogador 02 venceu!")
    }




