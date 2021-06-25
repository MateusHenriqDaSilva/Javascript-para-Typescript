function CalcularTaxaComDesconto(valorPassado, desconto = 0, ...extraTaxas) {
    return (valorPassado * 1.2) - desconto + extraTaxas.reduce((total, valorAtual) => total + valorAtual, 0);
}
let taxaValor = CalcularTaxaComDesconto(100, 0);
console.log(`Total Valor ${taxaValor}`);
console.log(`parametro 1: `, CalcularTaxaComDesconto(100));
console.log(`parametro 2: `, CalcularTaxaComDesconto(100, 20, 30));
console.log(`parametro 3: `, CalcularTaxaComDesconto(100, 20, 30, 20));
console.log(`parametro 3: `, CalcularTaxaComDesconto(100, 20, 30, 20, 40, 20, 10, 30));
let taxaValorNova = CalcularTaxaComDesconto(null, 0);
console.log(`taxa valor: ${taxaValorNova}`);
function CalcularTaxaNova(valorPassado, desconto = 0, ...valoresExtra) {
    if (valorPassado != null) {
        return (valorPassado * 1.2) - desconto + valoresExtra.reduce((total, valorAtual) => total + valorAtual, 0);
    }
    else {
        return undefined;
    }
}
let calcularValores = CalcularTaxaNova(100, 0);
console.log(`Taxa Valor: ${calcularValores}`);
function leiaValor(label, valor) {
    console.log(`${label}: ${valor}`);
}
leiaValor("Taxa Valor: ", CalcularTaxaNova(100, 0));
// let taxaContar: number | null = CalcularTaxaNova(100)
// // if(typeof taxaContar === "number") {
//     leiaValor("Taxa Valor", taxaContar)
// // } 
function check(expression) {
    if (!expression) {
        throw new Error("expressao é falsa");
    }
}
function checarNumero(valor) {
    if (typeof valor != "number") {
        throw new Error("Nao e um numero");
    }
}
function CalcularTaxa(valorAtual) {
    checarNumero(valorAtual);
    return valorAtual * 1.2;
}
let TaxaValor = CalcularTaxa(100);
console.log(`Taxa valor: ${taxaValor}`);
function lerProduto(produto, preco) {
    console.log(`Preco por ${produto}: preco $${preco.toFixed(2)}`);
}
let precos = [100, 75, 42];
let nomes = ["chapeu", "luvas", "botas"];
lerProduto(nomes[0], CalcularTaxa(precos[0]));
lerProduto(nomes[1], CalcularTaxa(precos[1]));
lerProduto(nomes[2], CalcularTaxa(precos[2]));
precos.forEach((preco, index) => {
    lerProduto(nomes[index], CalcularTaxa(preco));
});
let chapeu = ["chapeu", 100];
let luvas = ["luvas", 75];
lerProduto(chapeu[0], chapeu[1]);
lerProduto(luvas[0], luvas[1]);
chapeu.forEach((chapeu) => {
    if (typeof chapeu === "string") {
        console.log(`String: ${chapeu}`);
    }
    else {
        console.log(`Numero: ${chapeu.toFixed(2)}`);
    }
});
let [chapeuNome, chapeuPreco] = ["chapeu", 100];
console.log(`nome: ${chapeuNome}`);
console.log(`preco: ${chapeuPreco.toFixed(2)}`);
let produtos = [["chapeu", 100], ["luvas", 75]];
let uniaoDeTupla = [true, false, chapeu, ...produtos];
uniaoDeTupla.forEach((elem) => {
    if (elem instanceof Array) {
        let [str, num] = elem;
        console.log(`Nome ${str}`);
        console.log(`Preco: ${num.toFixed(2)}`);
    }
    else if (typeof elem === "boolean") {
        console.log(`Boolean Valor: ${elem}`);
    }
});
let chapeuzao = ["chapeuzao", 100, 10, 10, 10, 10, 10, 10, 10];
let luvasNova = ["luvasNova", 75, 10];
[chapeuzao, luvasNova].forEach(tuple => {
    let [nome, preco, taxaCobranca, ...cupons] = tuple;
    if (taxaCobranca != undefined) {
        preco += preco * (taxaCobranca / 100);
    }
    cupons.forEach(valorAtual => preco -= valorAtual);
    lerProduto(nome, preco);
});
var Produto;
(function (Produto) {
    Produto[Produto["botas"] = 0] = "botas";
    Produto[Produto["camisetas"] = 1] = "camisetas";
    Produto[Produto["calsas"] = 2] = "calsas";
})(Produto || (Produto = {}));
let ProdutosEnumerados = [[Produto.botas, 100], [Produto.camisetas, 75], [Produto.calsas, 75]];
ProdutosEnumerados.forEach((produtoAtual) => {
    switch (produtoAtual[0]) {
        case Produto.botas:
            lerProduto("chapeu", CalcularTaxa(produtoAtual[1]));
            break;
        case Produto.camisetas:
            lerProduto("luvas", CalcularTaxa(produtoAtual[1]));
            break;
        case Produto.calsas:
            lerProduto("umbrella", CalcularTaxa(produtoAtual[1]));
            break;
    }
});
[Produto.botas, Produto.camisetas, Produto.calsas].forEach(elementoAtaul => {
    console.log(`Valor Numerico: ${elementoAtaul}`);
});
let produtoValor = 0;
let ProdutoNome = Produto[produtoValor];
console.log(`Valor: ${produtoValor}, Nome: ${ProdutoNome}`);
