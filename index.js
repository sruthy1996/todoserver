const express = require('express');
const todo=require('./todo')
todo.addTodo("todo");
const app = express();
const port = 3000;
/*app.get('/', function(req, res){
    console.log(req.query)
    if(req.query.search=="1"){
        res.send("Hello");
    }
    else{
    res.send("World");
    }
})*/

/*app.get('/', function(req, res){
  const todos = [
    {name:"todo1", description:"todo1 desc"},
    {name:"todo2", description:"todo2 desc"},
]*/

app.get('/', function(req, res){
  const todos =todo.getTodo();
res.send(todos);
})
//res.send(JSON.stringify(todos));


app.listen(port, function() {
  console.log(`Example app listening on port ${port}`)
})
