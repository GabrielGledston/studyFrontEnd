// && = and
// || = or
// ! = not

const idade = 18
const tipo = 'adm'

//___________________if___________________________
// if(idade >= 18 && tipo == 'adm'){
//     console.log('Seja bem vindo ADM');
// }else if (idade >= 18 && tipo == 'membro') {
//     console.log('Seja bem vindo Membro Comum');
// } else {
//     console.log('Ocorreu um erro com seu login');
// }

switch(tipo){
    case 'adm':
        if (idade >= 18) {
            console.log('Seja bem vindo ADM')
            break;
        }
    case 'membro':
        if (idade >= 18) {
            console.log('Seja bem vindo Membro Comum')
            break;
        }
    default:
        console.log('Ocorreu um error no seu login')
}