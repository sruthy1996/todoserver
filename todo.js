function addTodo(todo){
    console.log(todo);
}

//function addTodo(todo){
   // const todos = [
    let  todos = [
        {id:0,name:"todo1", description:"todo1 desc"},
        {id:1,name:"todo2", description:"todo2 desc"},
        {id:2,name:"todo1", description:"todo1 desc"},
    ]
    //return todos;


function addTodo(){
    todos.push({name:"todo1", description:"todo1 desc"});
    return todos;
}

function editTodo(id, name, description){
    let todo = todos.find(function(todo){
        return todo.id==id;
    });
    todo.name = name;
    todo.description = description;
    return todos;
}

function getTodo(){
    return todos;
}

function deleteTodo(id){
    todos=todos.filter(function(todo){
        return todo.id!=id;
    });
    return todos;
}


/*function getTodo(todo){
    const todos = [
        {name:"todo1", description:"todo1 desc"},
        {name:"todo2", description:"todo2 desc"},
    ]
    return todos;
}*/
var name="todo";
exports.addTodo=addTodo;
exports.getTodo=getTodo;
exports.deleteTodo=deleteTodo;
exports.name=name;
exports.editTodo = editTodo;