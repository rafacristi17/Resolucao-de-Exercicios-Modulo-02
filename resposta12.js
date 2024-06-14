/*12. Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci.
Ex.: 1, 1, 2, 3, 5, 8, 13, 21.*/


function gerarFibonacci(n) {
    let fib = [1, 1]; 
  
    for (let i = 2; i < n; i++) {
      fib.push(fib[i - 1] + fib[i - 2]);
    }
  
    return fib;
  }
  
  const numeroDeTermos = 10;
  
  const fibonacci = gerarFibonacci(numeroDeTermos);
  
  console.log('Os 10 primeiros termos da sequência de Fibonacci são:', fibonacci.join(', '));
  