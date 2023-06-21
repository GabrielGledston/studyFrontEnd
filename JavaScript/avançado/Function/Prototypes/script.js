const Product = function(nome, preco, quantidade){
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
}

Product.prototype.total = function(){
    return this.preco * this.quantidade;
}
Product.prototype.add = function(valor){
    return this.quantidade + valor
}

Product.prototype.remove = function(valor){
    if(this.quantidade >= valor){
        this.quantidade -= valor;
    }
    else{
        return(`Não a esse quantidade para remove do estoque | quantia restante: ${this.quantidade}`)
    }
}

Product.prototype.label = function(){
    return `Dados: 
    produto: ${this.nome}
    preço: ${this.preco}
    estoque: ${this.quantidade}
    `
}

const p1 = new Product('teclado', 68.0, 8)
const p2 = new Product('mouse', 20.0, 15)