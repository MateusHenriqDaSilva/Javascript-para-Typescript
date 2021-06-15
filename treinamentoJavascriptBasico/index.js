let precoChapeu = 300;
console.log(`o preco do chapeu custa: ${precoChapeu}`)

let precoBota = 500;
console.log(`o preco da bota custa: ${precoBota}`)

if (precoChapeu == precoBota) {
    console.log(`o preco da bota é igual`)
} else {
    console.log('o preco da bota e diferente')
}

let total = precoBota + precoChapeu
console.log(`total: ${total}`)

let variavel = "Mateus Henrique"
console.log(`tipo da variavel: ${typeof variavel}`)
variavel = total
console.log(`tipo da variavel: ${typeof variavel}`)

function somarPreco(...precos) {
    return precos.reduce((total, valor) =>
        total + (Number.isNaN(Number(valor)) ? 0 : Number(valor)))
}

let totalDosPreco = somarPreco(precoChapeu, precoBota)
console.log(`totalDosPreco: ${totalDosPreco} ${typeof totalDosPreco}`)


let totalDosPrecoTeste = somarPreco(precoChapeu, precoBota, 300, "300", "testando", 0, "")
console.log(`totalDosPreco: ${totalDosPreco} ${typeof totalDosPreco}`)

let produtos = ['chapeu', 'bota', 'calca']
let precosProdutos = []

precosProdutos.push(100)
precosProdutos.push("100")
precosProdutos.push(50.25)

console.log(`Primeiro Item: ${produtos[0]}: ${precosProdutos[0]}`)
let totalPrecosProdutos = somarPreco(...precosProdutos)
console.log(`Total: ${totalPrecosProdutos} ${typeof totalPrecosProdutos}`)

let combinarArray = [...produtos, ...precosProdutos];
combinarArray.forEach(elemento => console.log(`Combinando Elemento do Array: ${elemento}`));

let [um, dois, tres] = produtos;
console.log(`um: ${um}, dois: ${dois}, tres:${tres}`)

let chapeu = {
    nome: "chapeu de palha",
    _preco: 30,
    precoTaxa: 100 * 1.3,

    set preco(novoPreco) {
        this._preco = novoPreco;
        this.precoTaxa = this.preco * 1.3
    },

    get preco() {
        return this._preco
    },
    
    lendoDetalhes(){
            console.log(`${this.nome}: ${this.preco}, ${this.precoTaxa}`)
    }
}

let botas = {
    nome: "bota",
    preco: 100,

    get precoTaxa() {
        return Number(this.preco) * 1.3
    }
}

let luvas = {
    produtoNome: "luvas",
    preco: 40,
}

delete luvas.produtoNome
luvas.preco = 60

let totalDosPrecoDosObjetos = somarPreco(chapeu.preco, botas.preco)
console.log(`Total: ${totalDosPrecoDosObjetos} ${typeof totalDosPrecoDosObjetos}`)

totalDosPrecoDosObjetos = somarPreco(chapeu.preco, botas.preco, luvas.preco)
console.log(`Total: ${totalDosPrecoDosObjetos} ${typeof totalDosPrecoDosObjetos}`)

let checarPropriedades = chapeu.preco ?? 0;
let objetoChecarPropriedades = chapeu?.preco ?? 0;
console.log(`Checagens: ${checarPropriedades}, ${objetoChecarPropriedades}`);

let outroChapeu = { ...chapeu }
console.log(`derivando de outro objeto: ${outroChapeu.nome}, ${outroChapeu.preco}`)

let adicionarPropriedade = { ...chapeu, joia: true }
console.log(`adicionar: ${JSON.stringify(adicionarPropriedade)}`)

let alterandoPropriedade = { ...chapeu, preco: 20 }
console.log(`alterando valor: ${JSON.stringify(alterandoPropriedade)}`)

console.log(`chapeu: ${chapeu.preco}, ${chapeu.precoTaxa}`)
chapeu.preco = 120;
console.log(`chapeu: ${chapeu.preco}, ${chapeu.precoTaxa}`)

console.log(`botas: ${botas.preco}, ${botas.precoTaxa}`)
botas.preco = '120'
console.log(`botas: ${botas.preco}, ${botas.precoTaxa}`)

chapeu.lendoDetalhes()
chapeu.preco = 50
chapeu.lendoDetalhes()