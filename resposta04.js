/*
4. Crie um programa que leia o tamanho de três segmentos de reta. Analise seus
comprimentos e diga se é possível formar um triângulo com essas retas.
Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada
lado deve ser menor que a soma dos outros dois.
*/

let prompt= require("prompt-sync")();

let lado01 = parseInt(prompt("Digite o tamanho do lado 01: "));
let lado02 = parseInt(prompt("Digite o tamanho do lado 02: "));
let lado03 = parseInt(prompt("Digite o tamanho do lado 03: "));



if(lado01+lado02>lado03){
    console.log("Os números dos lados digitados formam um triângulo, pois a soma de dois deles deve ser maior que o comprimento de um");
}
else if(lado03+lado01>lado02){
    console.log("Os números dos lados digitados formam um triângulo, pois a soma de dois deles deve ser maior que o comprimento de um");
}
else if(lado02+lado03>lado1){
    console.log("Os números dos lados digitados formam um triângulo, pois a soma de dois deles deve ser maior que o comprimento de um");

}
else{
    console.log("Digite um número válido");

}
