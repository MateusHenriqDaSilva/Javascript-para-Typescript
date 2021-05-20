"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListaColecao = void 0;
// dentro da colecao que e a pagina de figurinha
// que e a classe global
// pois e aqui que os items serao colocados.
// entao a colecao e algum tapuer para os items.
// o cidigo da colecao esta abaixo.
const ListaItem_1 = require("./ListaItem");
//usamos export para exportar a classe para o nosso projeto
class ListaColecao {
    //listando a colecao de itens
    constructor(usuarioNome, listaItems = []) {
        this.usuarioNome = usuarioNome;
        this.listaItems = listaItems;
        this.proximoId = 1;
        this.itemMap = new Map(); // criamos um map dentro da listaItens pegando id, e o item
        //Lista items lista a classe lista item
        listaItems.forEach(item => this.itemMap.set(item.id, item));
    }
    addLista(tarefa) {
        while (this.pegarListaPorId(this.proximoId)) {
            this.proximoId++;
        }
        this.itemMap.set(this.proximoId, new ListaItem_1.ListaItem(this.proximoId, tarefa));
        return this.proximoId;
    }
    pegarListaPorId(id) {
        return this.itemMap.get(id);
    }
    pegarListaItems(includeCompleto) {
        return [...this.itemMap.values()].filter(item => includeCompleto || !item.completo);
    }
    marcarCompleto(id, completo) {
        const todoItem = this.pegarListaPorId(id);
        if (todoItem) {
            todoItem.completo = completo;
        }
    }
    removerCompleto() {
        this.itemMap.forEach(item => {
            if (item.completo) {
                this.itemMap.delete(item.id);
            }
        });
    }
    pegarItemsContar() {
        return {
            total: this.itemMap.size,
            incompleto: this.pegarListaItems(false).length
        };
    }
}
exports.ListaColecao = ListaColecao;
