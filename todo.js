function addTodo(todo){
    console.log(todo);
}

/*function addTodo(todo){
    const todos = [
        {name:"todo1", description:"todo1 desc"},
        {name:"todo2", description:"todo2 desc"},
    ]
    return todos;
}*/

function getTodo(todo){
    const todos = [
        {name:"todo1", description:"todo1 desc"},
        {name:"todo2", description:"todo2 desc"},
    ]
    return todos;
}
var name="todo";
exports.addTodo=addTodo;
exports.getTodo=getTodo;
exports.name=name;
