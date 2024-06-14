/*
11. Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão
Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os
valores da sequência.
*/

let prompt= require("prompt-sync")();


function calcularPA(primeiroTermo, razao) {
    let termos = [];
    let soma = 0;
  
    for (let i = 0; i < 10; i++) {
      let termo = primeiroTermo + i * razao;
      termos.push(termo);
      soma += termo;
    }
  
    return { termos, soma };
  }
  
  const primeiroTermo = 2;  
  const razao = 3;  

  let { termos, soma } = calcularPA(primeiroTermo, razao);
  
  console.log('Os 10 primeiros termos da PA são:', termos.join(', '));
  console.log('A soma dos 10 primeiros termos da PA é:', soma);
  console.log('A Razão da PA é:', razao);