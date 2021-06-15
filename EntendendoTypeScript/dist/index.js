function calcularTaxa(resultado, formato) {
    const calcularResultado = resultado * 1.2;
    return formato ? `$${calcularResultado.toFixed(2)}` : calcularResultado;
}
let valorTaxa = calcularTaxa(100, false);
switch (typeof valorTaxa) {
    case "number":
        console.log(`valor numerico: ${valorTaxa.toFixed(2)}`);
        break;
    case "string":
        console.log(`valor string: ${valorTaxa.charAt(0)}`);
        break;
    default:
        let valor = valorTaxa;
        console.log(`Tipo inesperado de valor: ${valor}`);
}
let novoResultado = calcularTaxa(200, false);
let meuNumero = novoResultado;
console.log(`valor Numerico: ${meuNumero.toFixed(2)}`);
