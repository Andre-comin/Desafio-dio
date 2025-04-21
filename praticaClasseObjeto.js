class estudantes{
    constructor(nome, idade, estadoCidade, estudante){
        this.nome = nome
        this.idade = idade
        this.estadoCidade = estadoCidade
        this.estudante = estudante
    }

    escrever(){
        console.log(`Aluno(a) ${this.nome} tem ${this.idade} anos, é natural de ${this.estadoCidade.estado}/${this.estadoCidade.cidade}`)
    }

    statusEstudante(){
        console.log(`O aluno(a) é estudante? ${this.estudante ? "Sim" : "Não"}`)
    }
}
let pessoa1 = new estudantes(
    "André",
    18, 
    {estado: "SC", cidade: "Joinville"},
    false
)

pessoa1.escrever()
pessoa1.statusEstudante()