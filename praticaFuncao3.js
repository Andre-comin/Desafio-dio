function resultadoRanked(qtdVitorias, qtdDerrotas){
    let diferenca = qtdVitorias - qtdDerrotas
    return diferenca
}

let resultado = resultadoRanked(50, 20)
let ranking

if(resultado < 0){
    ranking = "Sem ranking"
} else if(resultado === 0){
    ranking = "Sem ranking"
} else if(resultado >=1 && resultado <= 10){
    ranking = "Ferro"
} else if(resultado >= 11 && resultado <= 20){
    ranking = "Bronze"
} else if(resultado >=21 && resultado <= 50){
    ranking = "Prata"
} else if(resultado >= 51 && resultado <=80){
    ranking = "Ouro"
} else if(resultado >= 81 && resultado <= 90){
    ranking = "Diamante"
} else if(resultado >= 91 && resultado <= 100){
    ranking = "Lendário"
} else{
    ranking = "Imortal"
}

console.log(`O Heroi tem saldo de ${resultado} vitórias e está no nível de ${ranking}.`)