// const factoryFunction = (user, age) => {

//     return{
//         user,
//         age,
//        logou: ()=>{
//         console.log(`O usuário ${user} logou.`)
//        },
//        deslogou: ()=>{
//         console.log(`O usuário ${user} deslogou.`)
//        }
//     }
// }

// factoryFunction('Gabriel', 17).deslogou();


function criarUser(nome, telefone,  idade){
    return{
        nome,
        telefone,
        idade,
        login: ()=>{
            alert(`Olá ${nome} seja bem vindo!`)
        }
    }
}


let usuário1 = criarUser('Gabriel', 8999999999, 17);

console.log(usuário1.login())

console.log(usuário1)