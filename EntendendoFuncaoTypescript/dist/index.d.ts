declare function CalcularTaxaComDesconto(valorPassado: number, desconto?: number, ...extraTaxas: number[]): number;
declare let taxaValor: number;
declare let taxaValorNova: number;
declare function CalcularTaxaNova(valorPassado: number | null, desconto?: number, ...valoresExtra: number[]): number;
declare let calcularValores: number;
declare function leiaValor(label: string, valor: number): void;
declare function check(expression: boolean): asserts expression;
declare function checarNumero(valor: any): asserts valor is number;
declare function CalcularTaxa(valorAtual: number | null): number;
declare let TaxaValor: number;
declare function lerProduto(produto: string, preco: number): void;
declare let precos: number[];
declare let nomes: string[];
declare let chapeu: [string, number];
declare let luvas: [string, number];
declare let chapeuNome: string, chapeuPreco: number;
declare let produtos: [string, number][];
declare let uniaoDeTupla: ([string, number] | boolean)[];
declare let chapeuzao: [string, number, number?, ...number[]];
declare let luvasNova: [string, number, number?, ...number[]];
declare enum Produto {
    botas = 0,
    camisetas = 1,
    calsas = 2
}
declare let ProdutosEnumerados: [Produto, number][];
declare let produtoValor: Produto;
declare let ProdutoNome: string;
