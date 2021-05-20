"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonListaColecao = void 0;
const ListaItem_1 = require("./ListaItem");
const ListaColecao_1 = require("./ListaColecao");
const lowdb = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
class JsonListaColecao extends ListaColecao_1.ListaColecao {
    constructor(usuarioNome, listaItems = []) {
        super(usuarioNome, []);
        this.usuarioNome = usuarioNome;
        this.listaItems = listaItems;
        this.database = lowdb(new FileSync("Listas.json"));
        if (this.database.has("tarefas").value()) {
            let dbItems = this.database.get("tarefas").value();
            dbItems.forEach(item => this.itemMap.set(item.id, new ListaItem_1.ListaItem(item.id, item.tarefa, item.completo)));
        }
        else {
            this.database.set("tarefas", listaItems).write();
            listaItems.forEach(item => this.itemMap.set(item.id, item));
        }
    }
    addLista(tarefa) {
        let resultado = super.addLista(tarefa);
        this.historicoTarefas();
        return resultado;
    }
    removerCompleto() {
        super.removerCompleto();
        this.historicoTarefas();
    }
    historicoTarefas() {
        this.database.set("tarefas", [...this.itemMap.values()]).write();
    }
}
exports.JsonListaColecao = JsonListaColecao;
