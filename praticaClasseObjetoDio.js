class Heroi{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    
    atacar(){
        let ataque
        if(this.tipo === "Mago"){
            ataque = "usou magia"
        } else if(this.tipo === "Guerreiro"){
            ataque = "usou espada"
        } else if(this.tipo === "monge"){
            ataque = "usou artes marciais"
        } else{
            ataque = "usou shuriken"
        }
        console.log(`O ${this.tipo} ${ataque}`)
    }

}

let heroi1 = new Heroi(
    "André",
    18,
    "Ninja"
)
heroi1.atacar()