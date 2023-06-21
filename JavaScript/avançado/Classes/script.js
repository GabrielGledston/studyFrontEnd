class Carro{
    constructor(modelo, ano, preco){
        this.ligado = false
        this.modelo = modelo
        this.ano = ano
        this.preco = preco
    }
    info(){
        console.log(`Ligado.....: ${this.ligado ? "SIM" : "NÃO"}`)
        console.log(`Modelo.....: ${this.modelo}`)
        console.log(`Ano........: ${this.ano}`)
        console.log(`Preço......: ${this.preco}`)
        console.log('---------------------------------------')
    }
    ligar(){
        if(this.ligado == false){
            this.ligado = true
        }
        else{
            console.log('Carro ja esta ligado!')
        }
        
    }
    desligar(){
        if(this.ligado == true){
            this.ligado = false
        }
        else{
            console.log('Carro ja está desligado!')
        }
    }
}

const c1 = new  Carro('Supra mk4', 1995, 228.229.toFixed(3))
const c2 = new  Carro('Chevette', 1993, 20.000.toFixed(3))