"use strict";
//Readonly
const todo = {
    title: "Assistir Dark de novo",
    description: "Relembrar os detalhes",
    completed: false
};
//todo.completed = true //Erro, não é possível alterar o valor de completed dessa forma.
// Partial
function updateTodo(todo, fieldsToUpdate) {
    return Object.assign(Object.assign({}, todo), fieldsToUpdate);
}
const todo2 = updateTodo(todo, { completed: true });
const todo3 = {
    title: "Fechar Ghost of Tsushima",
    completed: false
};
const todo4 = {
    title: "Fechar Ghost of Tsushima",
    completed: true
};
