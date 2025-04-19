let pessoa = {
    nome: "André",
    idade: 20,
    estadoCidade:{
          0: ["Santa Catarina", "Joinville"],
          1: ["São Paulo", "São Paulo"],
          2: ["Bahia", "Salvador"]
    },
    estudante: true
}

function chamar(pessoa){
    console.log(`O nome da pessoa é ${pessoa.nome}`);
    console.log(`Idade de ${pessoa.idade}`);
    for(let i in pessoa.estadoCidade){
             let [estado, cidade] = pessoa.estadoCidade[i]
             console.log(`Estado: ${estado}, Cidade: ${cidade}`)          
    }
    console.log(`É estudante? ${pessoa.estudante ? "Sim" : "Não"}`)
}
   
chamar(pessoa)
