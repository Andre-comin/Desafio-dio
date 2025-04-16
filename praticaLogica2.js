let resposta = "claro"  //sim ou nao

console.log("Vamos contar de 1 até 5?")
console.log(`Resposta: ${resposta}`)

if(resposta === "sim"){
    for(let i = 1; i <=5;i++)
        console.log(i)
} else if (resposta === "nao"){
    console.log("Ok, não vou contar nada")
} else{
    console.log("Resposta inválida!Digite sim/nao")
}