"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const funcao_1 = require("./funcoes/funcao");
function mostrarMensagem(msg) {
    console.log(`Mensagem: ${msg}`);
}
mostrarMensagem('Bem Vindo ao Typescript');
let data = new Map();
data.set("Mateus", "Lodon");
data.set("alice", "Paris");
data.forEach((valor, chave) => console.log(`${chave} mora em: ${valor}`));
let total = funcao_1.somar(100, 200, 300);
console.log(`Total: ${total}`);
