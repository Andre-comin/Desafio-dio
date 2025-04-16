/*Desafio: Tabuada dos Ímpares com Função

Crie uma função chamada mostrarTabuadaImpar que:
 -Recebe como parâmetro um número inteiro positivo.
 - Verifica se o número é ímpar:
 - Se for ímpar, exibe a tabuada de 1 a 10 desse número.
 - Se for par, exibe a mensagem: "Somente números ímpares são aceitos!.*/


function mostrarTabuadaImpar(numInteiroPositivo){ 
    if(numInteiroPositivo < 0){
        console.log("São aceitos apenas número positivos")
    } else if(numInteiroPositivo % 2 === 1){ 
        for(let i = 1; i <=10; i++){ 
            console.log(`${numInteiroPositivo} x ${i} = ${numInteiroPositivo * i}`)
        }
      } else{
        console.log("Somente números ímpares são aceitos.") 
        }
}
mostrarTabuadaImpar(21)