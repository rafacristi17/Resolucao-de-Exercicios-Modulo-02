/*
10. Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
a) O somatório entre todos os valores;
b) Qual foi o menor valor digitado;
c) A média entre todos os valores;
d) Quantos valores são pares.
*/


let prompt= require("prompt-sync")();


let numbers = [];


function pushNumbers(){
    let num = parseInt(prompt('Digite qualquer número para continuar ou zero para sair :').split(',').map(Number));

     numbers.push(num);  
     console.log("Número salvo!!"+ numbers);
     if(num==0){
        return process.exit(console.log("Saindo do sistema..."));
        
    }
        
      }
    

function somaNumbers() {
    let soma = 0; 

    for (let i = 0; i < numbers.length; i++) {
        soma += numbers[i];
    }
    console.log("A soma de todos os valores é : "+soma);
}

function menorNumero() {
    let menor = Math.min(...numbers);
    console.log("O menor número digitado foi : "+menor)
}

function medianumbers() {
    let soma = 0;
    for (let i = 0; i < numbers.length; i++) {
        soma += numbers[i];
    }
    console.log("A média dos números digitados é "+ soma / numbers.length);
}
 function valoresPares(){

    let pares = numbers.filter(function(nume) {
        return nume % 2 === 0;
    });
    
    console.log("Os números pares são: " +pares);   
}

let option;
option = parseInt(prompt('\n= Bem vindo!! Digite 1.jogar ou 0.sair = '))

do{
   
  switch (option) {
    case 1:
        pushNumbers();
        somaNumbers();
        menorNumero();
        medianumbers();
        valoresPares();
        break;    
    case 0: 
    console.log("Saindo do sistema...");
    process.exit();
        break;
  }

}while(option!=0);


