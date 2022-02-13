const todos = require("../data/todos.json");

getAllTodos = () =>{
    return todos;
}

getTodosById = (todosId)=>{
    return todos.filter(x=>x.id == todosId);
}

module.exports =  {getAllTodos, getTodosById};