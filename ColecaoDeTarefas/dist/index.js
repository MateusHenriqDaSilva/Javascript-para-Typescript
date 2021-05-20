"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ListaItem_1 = require("./ListaItem");
//comando para instalar a dependecia -> # npm install inquirer@7.3.3 #
const inquirer = require("inquirer");
const jsonListaColecao_1 = require("./jsonListaColecao");
let todos = [
    new ListaItem_1.ListaItem(1, "comprar flores"), new ListaItem_1.ListaItem(2, "pegar botas"),
    new ListaItem_1.ListaItem(3, "pegar convites"), new ListaItem_1.ListaItem(4, "falar com renato", true)
];
let colecao = new jsonListaColecao_1.JsonListaColecao("Mateus", todos);
let mostrarCompleto = true;
function displayListar() {
    console.log(`${colecao.usuarioNome}'s lista`
        + `(${colecao.pegarItemsContar().incompleto} items da lista)\n`);
    colecao.pegarListaItems(mostrarCompleto).forEach(item => item.mostrarDetalhes());
}
var Comandos;
(function (Comandos) {
    Comandos["Add"] = "Adicionar Tarefa";
    Comandos["Completar"] = "Completar Tarefa";
    Comandos["Alternar"] = "Mostrar/Esconder Completo";
    Comandos["Remover"] = "Remover Tarefas Completadas";
    Comandos["Quit"] = "Quit";
})(Comandos || (Comandos = {}));
function promptAdd() {
    console.clear();
    inquirer.prompt({
        type: "input", name: "add", message: "Entrar Tarefa:"
    }).then(respostas => {
        if (respostas["add"] !== "") {
            colecao.addLista(respostas["add"]);
        }
        promptDoUsuario();
    });
}
function promptCompleto() {
    console.clear();
    inquirer.prompt({
        type: "checkbox",
        name: "completo",
        message: "Marcar como completo",
        choices: colecao.pegarListaItems(mostrarCompleto).map(item => ({ name: item.tarefa, value: item.id, checked: item.completo }))
    }).then(respostas => {
        let tarefasCompletas = respostas["completo"];
        colecao.pegarListaItems(true).forEach(item => colecao.marcarCompleto(item.id, tarefasCompletas.find(id => id === item.id) != undefined));
        promptDoUsuario();
    });
}
function promptDoUsuario() {
    console.clear();
    displayListar();
    inquirer.prompt({
        type: "list",
        name: "comando",
        message: "fechar opcoes",
        choices: Object.values(Comandos),
        // badProperty: true
    }).then(respostas => {
        switch (respostas["comando"]) {
            case Comandos.Alternar:
                mostrarCompleto = !mostrarCompleto;
                promptDoUsuario();
                break;
            case Comandos.Add:
                promptAdd();
                break;
            case Comandos.Completar:
                if (colecao.pegarItemsContar().incompleto > 0) {
                    promptCompleto();
                }
                else {
                    promptDoUsuario();
                }
                break;
            case Comandos.Remover:
                colecao.removerCompleto();
                promptDoUsuario();
                break;
        }
    });
}
promptDoUsuario();
// console.clear()
// console.log(`${colecao.usuarioNome}’s mostrar lista` + `(${ colecao.pegarItemsContar().incompleto} items da lista)`);
// colecao.pegarListaItems(true).forEach(item => item.mostrarDetalhes())
// let novoId: number = colecao.addLista("correr de manha")
// let todoItem: TodoItem = colecao.getTodoPorId(novoId)
// todoItem.mostrarDetalhes()
// colecao.addTodo(todoItem)
// colecao.removerCompleto()
// colecao.pegarListaItems(true).forEach(item => item.mostrarDetalhes())
