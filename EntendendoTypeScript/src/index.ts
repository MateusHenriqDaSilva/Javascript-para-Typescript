function calcularTaxa(resultado: number, formato: boolean): string | number  {
    const calcularResultado = resultado * 1.2
    return formato ? `$${calcularResultado.toFixed(2)}` : calcularResultado;
}

let valorTaxa = calcularTaxa(100,false)

switch(typeof valorTaxa) {
    case "number":
        console.log(`valor numerico: ${valorTaxa.toFixed(2)}`)
        break;
    case "string":
        console.log(`valor string: ${valorTaxa.charAt(0)}`)
        break;
    default:
        let valor: never = valorTaxa
        console.log(`Tipo inesperado de valor: ${valor}`)
}

let novoResultado: unknown = calcularTaxa(200, false);
let meuNumero: number = novoResultado as number
console.log(`valor Numerico: ${meuNumero.toFixed(2)}`);