/* 
7. Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um
carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o
cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado
(popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final,
mostre o preço a ser pago de acordo com os dados a seguir:
Carros populares
- Até 100 Km percorridos: R$ 0,20 por Km
- Acima de 100 Km percorridos: R$ 0,10 por Km
Carros de luxo
- Até 200 Km percorridos: R$ 0,30 por Km
- Acima de 200 Km percorridos: R$ 0,25 por Km
*/

let prompt= require("prompt-sync")();

let carro = parseInt(prompt("Digite 01 para carro popular e 02 para carro de luxo: "));
let diasAlugado = parseInt(prompt("Digite quantos dias ficou alugado: "));
let km = parseFloat(prompt("Digite a quilometragem percorrida: "));

let alugPop= diasAlugado*90;
let aluglux= diasAlugado*150;

switch(carro){

    case 1:
        if(km<=100){
           let valorTotal= (km*0.20)+alugPop
            console.log(`O valor total a ser pago ficou em R$${valorTotal} `)
        }else if(km>100){
            let valorTotal= (km*0.10)+alugPop
            console.log(`O valor total a ser pago ficou em R$${valorTotal} `)
        }
        break;
    case 2: 
    if(km<=200){
        let valorTotal= (km*0.30)+aluglux
         console.log(`O valor total a ser pago ficou em R$${valorTotal} `)
     }else if(km>200){
         let valorTotal= (km*0.25)+aluglux
         console.log(`O valor total a ser pago ficou em R$${valorTotal} `)
     }


}