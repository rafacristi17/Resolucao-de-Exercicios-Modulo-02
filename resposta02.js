/*
2. Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km
h-1, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da
multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.
*/

let prompt= require("prompt-sync")();

let vel = parseInt(prompt("Digite a velocidade de seu carro : "));
const multa = vel*5

if(vel>80){
    console.log("Você foi multado o valor da multa é R$"+multa+",00");
}else{
    console.log("Você está no limite de velocidade permitida, continue assim!!")
}
