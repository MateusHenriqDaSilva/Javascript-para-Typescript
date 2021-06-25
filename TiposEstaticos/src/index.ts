let variavel;
console.log(`${variavel} = ${typeof variavel}`)
variavel = 12
console.log(`${variavel} = ${typeof variavel}`)
variavel = "Ola"
console.log(`${variavel} = ${typeof variavel}`)
variavel = true
console.log(`${variavel} = ${typeof variavel}`)

function calcularTaxa(receberValor: any): any{
    return `$${(receberValor * 1.2).toFixed(2)}`
}

console.log(`${12} = ${calcularTaxa(12)}`)

let preco: number = 100
let taxaValor: number = calcularTaxa(preco)
let divisao: number = taxaValor / 2

console.log(`total com taxa: ${taxaValor} `)
console.log(`total com divisao: ${divisao} `)

let novoResultado: any = calcularTaxa(200)
let numeroNovo: number = novoResultado
console.log(`valor do numero: ${numeroNovo}`)

let valorPessoa = calcularTaxa("BOB")
console.log(`Nome: ${valorPessoa}`)

function calcularTaxa2(valorPassado: number, format: boolean): string | number | null {
    if(valorPassado === 0) {
        return null
    }
    const calcularValor = valorPassado * 1.2
    return format ? `$${calcularValor.toFixed(2)}` : calcularValor
}
let taxaValor2: string | number | null = calcularTaxa2(0, false)
console.log(taxaValor2)

let taxaNumerica: string | number = calcularTaxa2(100, false) as number
let taxaString: string | number = calcularTaxa2(100, true) as string
let taxaBoolean = calcularTaxa2(0, false) as any as boolean;

console.log(`numero valor: ${taxaNumerica}`) 
console.log(`string valor: ${taxaString}`)
console.log(`boolean valor: ${taxaBoolean}`)

