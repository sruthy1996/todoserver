/*
//function addTodo(todo){
   // const todos = [*/

    const db = require('./db');

    /*let  todos = [
        {id:0,name:"todo1", description:"todo1 desc"},
        {id:1,name:"todo2", description:"todo2 desc"},
        {id:2,name:"todo3", description:"todo3 desc"},
    ]*/
    //return todos;


function addTodo(todo){
    //console.log(todo);
    //return;
   //todos.push({name:"todo4", description:"todo4 desc"});
    const newTodo = new db.Todo(todo);
       //name:"todo4", description:"todo4 desc"
 
    return newTodo.save();
    /*.then(data=>{
        console.log(data);
    })
    return todos;*/
}

function editTodo(id, name, description){
   // return db.Todo.find({_id:id});   // to find all data of specified id
   return db.Todo.update({_id:id}, {name, description}); //name and description of specific id can be updated
    /*let todo = todos.find(function(todo){
        return todo.id==id;
    });
    todo.name = name;
    todo.description = description;
    return todos;*/
}

function getTodo(){
   // return db.Todo.find({});
    return db.Todo.find().sort({name:'asc'});
     /*.then(data=>{
         console.log(data);

     })
    return todos;*/
}

function getTodoById(id){
    return db.Todo.findById(id);
}

function deleteTodo(id){
    return db.Todo.deleteOne({_id:id});
    /*todos=todos.filter(function(todo){
        return todo.id!=id;
    });
    return todos;*/
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
exports.getTodoById = getTodoById;