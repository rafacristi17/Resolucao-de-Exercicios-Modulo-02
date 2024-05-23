/*
3. Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em
Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
R$ 0.45 para viagens mais longas.
*/

let prompt= require("prompt-sync")();

let distancia= parseInt(prompt("Digite a distância em km que você deseja percorrer: "));

curta = distancia*0.50
longa = distancia*45

if(distancia<=200){
    console.log(`Opreço da passagem é R$${curta},00`)
}else{
    console.log(`Opreço da passagem é R$${longa},00`)
}

