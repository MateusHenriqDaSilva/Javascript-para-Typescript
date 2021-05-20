"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListaItem = void 0;
// criamos um classe ListaItem dentro dessa classe chamamos ela no index e na colecaoLista
// a colecao lista nada menos nada mais e um album de figurinhas;
// cada pagina tem suas figurinhas
// e dentro da colecao existem os items, sao as figurinhas
// a programacao dos items esta listamo abaixo 
class ListaItem {
    constructor(id, tarefa, completo = false) {
        this.id = id;
        this.tarefa = tarefa;
        this.completo = completo;
        //nao precisa preencher
    }
    mostrarDetalhes() {
        console.log(`${this.id}\t${this.tarefa}${this.completo ? "\t(completo)" : ""}`);
    }
}
exports.ListaItem = ListaItem;
