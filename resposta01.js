/*
1. Escreva um programa para calcular a redução do tempo de vida de um fumante.
Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
vida um fumante perderá e exiba o total em dias.
*/

let prompt= require("prompt-sync")();

let quantCigarrosFumadosDia = parseInt(prompt("Digite a quantidade de cigarros que vc fuma por dia : "));
let anosFumando = parseInt(prompt('Digite a quantos anos vc fuma : '));
let perdaDeVidaM = quantCigarrosFumadosDia*10;//1 cigarro = 10 minutos de vida; 6 cigarros = 1 hora; 8h= 48 cigarros
let perdaDeVidaH = perdaDeVidaM*60;
let perdaDeVidaD = perdaDeVidaH/24;
let perdaDeVidaA = perdaDeVidaD*anosFumando;
console.log(`A cada 1 cigarro você perde 10 minutos de vida, e  Você já perdeu: ${perdaDeVidaM}min em minutos de vida em um dia, ${perdaDeVidaH} em horas de vida, ${perdaDeVidaD} em dias de vida e em anos ${perdaDeVidaA}.` )