// dentro da colecao que e a pagina de figurinha
// que e a classe global
// pois e aqui que os items serao colocados.
// entao a colecao e algum tapuer para os items.
// o cidigo da colecao esta abaixo.
import { ListaItem } from "./ListaItem";

type ContarItem = {
    total: number,
    incompleto: number
}

//usamos export para exportar a classe para o nosso projeto
export class ListaColecao {
    private proximoId: number = 1;
    protected itemMap = new Map<number, ListaItem>(); // criamos um map dentro da listaItens pegando id, e o item
    //listando a colecao de itens
    constructor(public usuarioNome: string, public listaItems: ListaItem[] = []) {
        //Lista items lista a classe lista item
        listaItems.forEach(item => this.itemMap.set(item.id, item));
    }

    addLista(tarefa: string): number {
        while (this.pegarListaPorId(this.proximoId)) {
            this.proximoId++;
        }
        this.itemMap.set(this.proximoId, new ListaItem(this.proximoId, tarefa));
        return this.proximoId;
    }
    pegarListaPorId(id: number): ListaItem {
        return this.itemMap.get(id)
    }

    pegarListaItems(includeCompleto: boolean): ListaItem[] {
        return [...this.itemMap.values()].filter(item => includeCompleto || !item.completo);
    }

    marcarCompleto(id: number, completo: boolean) {
        const todoItem = this.pegarListaPorId(id);
        if (todoItem) {
            todoItem.completo = completo;
        }
    }

    removerCompleto() {
        this.itemMap.forEach(item => {
            if(item.completo) {
                this.itemMap.delete(item.id)
            }
        })
    }

    pegarItemsContar(): ContarItem {
        return {
            total: this.itemMap.size,
            incompleto: this.pegarListaItems(false).length
        }
    }
}
