import { somar } from "./funcoes/funcao"

function mostrarMensagem(msg: string): void {
	console.log(`Mensagem: ${msg}`)
}
mostrarMensagem('Bem Vindo ao Typescript')

let data = new Map()
data.set("Mateus", "Lodon")
data.set("alice", "Paris")
data.forEach((valor, chave) => console.log(`${chave} mora em: ${valor}`))

let total = somar(100,200,300)
console.log(`Total: ${total}`)

