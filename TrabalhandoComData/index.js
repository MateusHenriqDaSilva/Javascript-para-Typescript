class Produto {
    constructor(nome, preco) {
        this.id = Symbol();
        this.nome = nome;
        this.preco = preco;
    }
}

class Fornecedor {
    constructor(nome, produtoId){
        this.nome = nome;
        this.produtoId = produtoId
    }
}

let lojaProduto = [new Produto("colar", 100), new Produto("Botas", 100)]
let empresaProduto = [new Produto("colar", 100), new Produto("Botas", 100)]

let produtos = new Map();
[...lojaProduto, ...empresaProduto].forEach(produto => produtos.set(produto.id, produto))
let fornecedor = new Map()
fornecedor.set("loja", new Fornecedor("loja", lojaProduto.map(produto => produto.id)))
fornecedor.set("empresa", new Fornecedor("empresa", empresaProduto.map(produto => produto.id)))

fornecedor.get("loja").produtoId.forEach(id => console.log(`Nome: ${produtos.get(id).nome}`))


let produto = new Produto("chapeu", 100)
let produtoArray = []
let produtoSet = new Set()

for(let i = 0; i < 5; i++){
    produtoArray.push(produto)
    produtoSet.add(produto)
}

console.log(`Array length: ${produtoArray.length}`)
console.log(`Set size: ${produtoSet.size}`)

console.log(produtoSet)
