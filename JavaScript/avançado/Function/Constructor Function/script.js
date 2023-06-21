// function Pessoa(){
//     this.nome = '';
//     this.idade = 0
// }

// const pessoa1 = new Pessoa();
// pessoa1.nome = 'Gabriel';
// pessoa1.idade = 17                  

// const pessoa2 = new Pessoa();
// pessoa2.nome = 'Maria'
// pessoa2.idade = 22


// Simplificando passando direto pelo parâmetro ==>


function Pessoa(nome, idade){
    this.nome = nome
    this.idade = idade
}

const pessoa1 = new Pessoa('Chica', 17);
const pessoa2 = new Pessoa('Maria', 14);