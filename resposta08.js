/*
8. Um programa de vida saudável quer dar pontos por atividades físicas realizadas que
podem ser trocados por dinheiro. Cada hora de atividade física no mês vale pontos. O
sistema funciona assim:
- até 10 h de atividade no mês: ganha 2 pontos por hora
- de 10 h até 20 h de atividade no mês: ganha 5 pontos por hora
- acima de 20 h de atividade no mês: ganha 10 pontos por hora
- A cada ponto ganho, o cliente fatura R$ 0,05 (5 centavos)
Faça um programa que leia quantas horas de atividade uma pessoa teve por mês.
Calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar.

*/

let prompt= require("prompt-sync")();

let horaDeAtividade = parseFloat(prompt("Digite quantas horas você se exercitou no mês: "));

dinheiroPorPonto = 0.05

if(horaDeAtividade<=10){
    let valorPonto = horaDeAtividade*2;
    let valorFaturado = dinheiroPorPonto*valorPonto;
    console.log(`Você faturou nesse mês R$${valorFaturado}`)
}else if(horaDeAtividade>10 && horaDeAtividade<=20){
    let valorPonto = horaDeAtividade*5;
    let valorFaturado = dinheiroPorPonto*valorPonto;
    console.log(`Você faturou nesse mês R$${valorFaturado}`)
}else if (horaDeAtividade>20){
    let valorPonto = horaDeAtividade*10;
    let valorFaturado = dinheiroPorPonto*valorPonto;
    console.log(`Você faturou nesse mês R$${valorFaturado}`)
}
