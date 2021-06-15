import {CalcularTaxa, TotalProdutoComTaxa, MostrarDetalhes, AplicarDesconto} from './OutrosArquivos'

class Produto {
    constructor(nome, preco){
        this.id = Symbol()
        this.nome = nome
        this.preco = preco
    }
}

let produto = new Produto("Chapeu", 100)
AplicarDesconto(produto, 10)
MostrarDetalhes(Produto)
let taxaPreco = CalcularTaxa(produto.preco)
console.log(`Nome: ${ produto.nome }, taxado preco: ${taxaPreco}`)

let produtos = [new Produto("Luvas", 23), new Produto("Botas", 100)];
let totalPreco = TotalProdutoComTaxa(...produtos.map(produto => produto.preco))
console.log(`Total Preco: ${totalPreco.toFixed(2)}`)