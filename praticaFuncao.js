/* 💡 Enunciado do exercício:
Crie um programa que simule uma função chamada verificarNumerosPares, que recebe um número final como parâmetro e imprime todos os números de 1 até esse número, mostrando na tela se cada número é par ou ímpar. */

verificarNumerosPares(3)

function verificarNumerosPares(numero){
    for(i = 1; i <= numero; i++){
        if(i % 2 === 1){
             console.log(`O número ${i} é ímpar.`)
        } else {
            console.log(`O número ${i} é par.`)
        }
    }
}
