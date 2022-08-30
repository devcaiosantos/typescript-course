type Todo = {
    title: string;
    description: string;
    completed: boolean;
}

//Readonly
const todo: Readonly<Todo> = {
    title:"Assistir Dark de novo",
    description:"Relembrar os detalhes",
    completed: false
}
//todo.completed = true //Erro, não é possível alterar o valor de completed dessa forma.

// Partial
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>){
    return {...todo, ...fieldsToUpdate}
}

const todo2 : Todo = updateTodo(todo, {completed: true})

//Pick
type TodoPreview = Pick<Todo, "title" | "completed">

const todo3: TodoPreview = {
    title: "Fechar Ghost of Tsushima",
    completed: false
}


//Omit
type TodoPreview2 = Omit<Todo, "description">

const todo4: TodoPreview2 = {
    title: "Fechar Ghost of Tsushima",
    completed: true
}

