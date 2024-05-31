/*

6. Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
tentar descobrir qual foi o valor sorteado.

*/

let prompt= require("prompt-sync")();

let num = [0,1,2,3,4,5,6,7,8,9];

let numsorteado = num[Math.floor(Math.random()*10)];
console.log(numsorteado)// para saber o número sorteado
let user = parseInt(prompt("Qual o número foi sorteado? "))

if(numsorteado == user){
    console.log(`Que top você acertou !!`)
}else{
    console.log(`Errrouuu!! o número sorteado foi ${numsorteado} e o que você digitou é ${user}`)
}
