import { ListaItem } from "./ListaItem"
import { ListaColecao } from "./ListaColecao"
import * as lowdb from "lowdb";
import * as FileSync from "lowdb/adapters/FileSync";

type Colecao = {
    tarefas: {
        id: number
        tarefa: string
        completo: boolean
    }[]
}

export class JsonListaColecao extends ListaColecao {
    private database: lowdb.LowdbSync<Colecao>;

    constructor(public usuarioNome: string, public listaItems: ListaItem[] = []){
        super(usuarioNome, [])
        this.database = lowdb(new FileSync("Listas.json"))
        if(this.database.has("tarefas").value()) {
            let dbItems = this.database.get("tarefas").value();
            dbItems.forEach(item => this.itemMap.set(item.id, 
                new ListaItem(item.id, item.tarefa, item.completo)))       
        } else {
            this.database.set("tarefas", listaItems).write()
            listaItems.forEach(item => this.itemMap.set(item.id, item))
        }
    }

    addLista(tarefa: string): number {
        let resultado = super.addLista(tarefa)
        this.historicoTarefas()
        return resultado 
    }

    removerCompleto(): void{
        super.removerCompleto()
        this.historicoTarefas()
    }

    private historicoTarefas() {
        this.database.set("tarefas", [...this.itemMap.values()]).write();
    }
}

