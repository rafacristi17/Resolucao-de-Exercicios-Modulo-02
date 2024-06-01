/*
9. Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final,
mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai
perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um
funcionário.
*/


let leia = require('readline-sync');
let prompt= require("prompt-sync")();


let salarioF;

function cadastroSalarioMulher(){
    let f = parseInt(prompt('Digite o salário separado por vírgula R$').split(',').map(Number));
    let somaF;
    
     for (let i = 0; i < f.length; i ++) {
        somaF += f[i];
          }
          somaF = salarioF     
            console.log("Salário de usuária cadastrada com sucesso!!")  
};

function consultaSalarioF(){
    if(salarioF !== undefined) {
        console.log("A soma dos elementos é: " + salarioF);
    } else {
        console.log("A soma ainda não foi calculada.");
    }

}

let option

do {
  
  console.log('\n=== Empresa ===\n')
  console.log()
  console.log('= ( 1 ) - Cadastrar Mulheres')
  console.log('= ( 2 ) - Cadastrar Homens')
  console.log('= ( 3 ) - Ver total de salários pagos a mulheres')
  console.log('= ( 4 ) - Ver total de salários pagos a homens')
  console.log('= ( 0 ) - Sair')

  option = parseInt(leia.question('\n= Escolha uma das opcoes para continuar ou sair = '))



  switch (option) {
    case 1:
        cadastroSalarioMulher();
        break;    
    case 2: 
        cadastroSalarioHomem();
        break;
      
    case 3: 
        consultaSalarioF();
        break;

    case 4: 
        consultaSalarioM();  
        break;

    case 0:
        option != 0
        break;

}

} while (option != 0)
    
