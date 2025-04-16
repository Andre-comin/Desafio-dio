let nomeHeroi = "Ginka"
let quantidadeXp = 1000
let nivel

if (quantidadeXp <= 1000) {
    nivel = "Ferro"
} else if (quantidadeXp >= 1001 && quantidadeXp <= 2000) {
    nivel = Bronze
} else if (quantidadeXp >= 2001 && quantidadeXp <= 5000) {
    nivel = "Prata"
} else if (quantidadeXp >= 5001 && quantidadeXp <= 7000) {
    nivel = "Ouro"
} else if (quantidadeXp >= 7001 && quantidadeXp <= 9000) {
    nivel = "Ascendente"
} else if (quantidadeXp >= 9001 && quantidadeXp <= 10000) {
    nivel = "Imortal"
} else if (quantidadeXp >= 10001) {
    nivel = "Radiante"
}

console.log(`O jogador ${nomeHeroi} está no nível de ${nivel}.`)

//alteração teste