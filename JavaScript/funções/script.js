// ___________________Function declaration_______________________________________


// function test(name){
//     console.log('function declaration', name)
// }

// test('Gabriel');



// ___________________Function expression_______________________________________

// const test = function(name){
//     console.log('function expression', name)
// }

// test('Gabriel');



// ___________________Arrow function_______________________________________

// const test = (name) =>{
//     console.log('arrow function', name);
// }

// test('Gabriel');



// ___________________Factory function_______________________________________

// const factoryFunction = (name) => {
//     return {
//         logou: () => alert(`o usuário ${name} logou`),
//         deslogou: () => alert(`o usuário ${name} deslogou`)
//     }
// }

// factoryFunction("Gabriel").logou()



// ___________________Constructor function_______________________________________


function Pessoa(){
    this.nome = "";
    this.idade = 0
}

const pessoa1 = new Pessoa();
pessoa1.nome = 'Skull knight';
pessoa1.idade = 99

const pessoa2 = new Pessoa();
pessoa2.nome = 'Guts';
pessoa2.idade = 28


//-------Simplificado-------
//Passando direto pelo parametro


function User(nome, idade){
    this.nome = nome;
    this.idade = idade
}


const user1 = new User("Gabriel", 17);

const user2 = new User("Gustavo", 14);