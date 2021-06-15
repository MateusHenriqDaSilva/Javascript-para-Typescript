let chapeus = {
    nome: "Bota de palha",
    preco: 30,

    getPegarTaxa() {
        return Number(this.preco) * 1.2;
    }
}

let botas = {
    nome: "Bota de ferro",
    preco: 100,

    getPegarTaxa() {
        return Number(this.preco) * 1.2;
    }
}

let chapeusPrototype = Object.getPrototypeOf(chapeus);
console.log(`chapeu prototype: ${chapeusPrototype}`)

let botasPrototype = Object.getPrototypeOf(botas);
console.log(`botas prototype: ${botasPrototype}`)

console.log(`prototype comum: ${chapeusPrototype === botasPrototype}`)

chapeusPrototype.toString = function () {
    return `toString: Nome: ${this.nome}, preco: ${this.preco}`
}
console.log(chapeus.toString())
console.log(botas.toString())

let Produto = function (nome, preco) {
    this.nome = nome;
    this.preco = preco;
}
Produto.prototype.toString = function () {
    return `toString: nome: ${this.nome}, preco: ${this.preco}`;
}
let chapeus2 = new Produto("Chapeus", 100);
let botas2 = new Produto("Botas", 100);

console.log(chapeus2.toString());
console.log(botas2.toString());

let chapeus3 = new Produto("chapeu de ferro", 300)
console.log(chapeus3.toString())

let TaxandoProduto = function (nome, preco, precoTaxa) {
    Produto.call(this, nome, preco);
    this.precoTaxa = precoTaxa;
}
Object.setPrototypeOf(TaxandoProduto.prototype, Produto.prototype);

TaxandoProduto.prototype.pegarPrecoTaxa = function () {
    return Number(this.preco) * this.precoTaxa;
}
TaxandoProduto.prototype.toTaxString = function () {
    return `${this.toString()}, Tax: ${this.pegarPrecoTaxa()}`;
}
let chapeu5 = new TaxandoProduto("Chapeu de Folha", 100, 1.2);
console.log(chapeu5.toTaxString());

Produto.processar = (...produtos) => {
    produtos.forEach(produtoAtual => console.log(produtoAtual.toString()))
}

Produto.processar(new Produto("chapeu de asas", 100, 1.2), new Produto("Botas", 100))

class ProdutoClasse {
    constructor(nome, preco) {
        this.nome = nome
        this.preco = preco
    }

    toString() {
        return `toString: nome: ${this.nome}, preco: ${this.preco}`;
    }
}

let chapeusDaClasse = new ProdutoClasse("chapeu de palha", 100)
let botasDaClasse = new ProdutoClasse("botas de ferro", 100)

console.log(chapeusDaClasse.toString())
console.log(botasDaClasse.toString())

class TaxaProduto extends Produto {
    constructor(nome, preco, taxaRate = 1.2) {
        super(nome, preco)
        this.taxaRate = taxaRate
    }

    pegarPrecoTaxa() {
        return Number(this.preco) * this.taxaRate;
    }

    toString() {
        let mostrarResultado = super.toString()
        return `${mostrarResultado}, Taxa:${this.pegarPrecoTaxa()}`
    }

    static processarVariosProdutos(...produtos) {
        produtos.forEach(produtoAtual => console.log(produtoAtual.toString()))
    }
}

TaxaProduto.processarVariosProdutos(
    new TaxaProduto("cahpeu de feno", 100),
    new TaxaProduto("cahpeu de papel", 100, 1.2)
)

let chapeuTaxa = new TaxaProduto("Chapeu de taxa", 100)
console.log(chapeuTaxa)

function criandoProdutoClasseIterator() {
    const chapeu = new ProdutoClasse("chapeu", 100);
    const bota = new ProdutoClasse("bota", 100);
    const corporacao = new ProdutoClasse("corporacao", 23);
    let valorAtual;
    return {
        proximo() {
            switch (valorAtual) {
                case undefined:
                    valorAtual = chapeu;
                    return { value: chapeu, done: false };
                case chapeu:
                    valorAtual = bota;
                    return { value: bota, done: false };
                case bota:
                    valorAtual = corporacao;
                    return { value: corporacao, done: false };
                case corporacao:
                    return { value: undefined, done: true };
            }
        }
    }
}
let iterator = criandoProdutoClasseIterator();
let resultado = iterator.proximo();
while (!resultado.done) {
    console.log(resultado.value.toString());
    resultado = iterator.proximo();
}

class PaginacaoProduto {
    constructor(nome, produto1, produto2, produto3) {
        this.nome = nome
        this.produto1 = produto1
        this.produto2 = produto2
        this.produto3 = produto3
    }

    getTotalPreco() {
        return [this.produto1, this.produto2, this.produto3]
            .reduce((total, produtoAtual) => total + produtoAtual.preco, 0);
    }

    *pegarGerador() {
        yield this.produto1
        yield this.produto2
        yield this.produto3
    }
}

let inverno = new PaginacaoProduto("inverno",
    new ProdutoClasse("chapeu", 100),
    new ProdutoClasse("botas", 80),
    new ProdutoClasse("Luvas", 23),
);

console.log(`Total precos: ${inverno.getTotalPreco()}`);

[...inverno.pegarGerador()].forEach(produto => console.log(`Produto: ${produto}`))

let data = {
    chapeu: new Produto("Chapeu", 100)
}

data.botas = new Produto("Botas", 100)
Object.keys(data).forEach(key => console.log(data[key].toString()))

let data2 = new Map()
data2.set("chapeus", new Produto("chapeu", 100));
data2.set("botas",new Produto("Botas", 100));

[...data2.keys()].forEach(elemento => {
    console.log(data2.get(elemento).toString())
});