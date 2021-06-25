let variavel;
console.log(`${variavel} = ${typeof variavel}`);
variavel = 12;
console.log(`${variavel} = ${typeof variavel}`);
variavel = "Ola";
console.log(`${variavel} = ${typeof variavel}`);
variavel = true;
console.log(`${variavel} = ${typeof variavel}`);
function calcularTaxa(receberValor) {
    return `$${(receberValor * 1.2).toFixed(2)}`;
}
console.log(`${12} = ${calcularTaxa(12)}`);
let preco = 100;
let taxaValor = calcularTaxa(preco);
let divisao = taxaValor / 2;
console.log(`total com taxa: ${taxaValor} `);
console.log(`total com divisao: ${divisao} `);
let novoResultado = calcularTaxa(200);
let numeroNovo = novoResultado;
console.log(`valor do numero: ${numeroNovo}`);
let valorPessoa = calcularTaxa("BOB");
console.log(`Nome: ${valorPessoa}`);
function calcularTaxa2(valorPassado, format) {
    if (valorPassado === 0) {
        return null;
    }
    const calcularValor = valorPassado * 1.2;
    return format ? `$${calcularValor.toFixed(2)}` : calcularValor;
}
let taxaValor2 = calcularTaxa2(0, false);
console.log(taxaValor2);
let taxaNumerica = calcularTaxa2(100, false);
let taxaString = calcularTaxa2(100, true);
let taxaBoolean = calcularTaxa2(0, false);
console.log(`numero valor: ${taxaNumerica}`);
console.log(`string valor: ${taxaString}`);
console.log(`boolean valor: ${taxaBoolean}`);
