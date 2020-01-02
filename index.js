const express = require('express');
const bodyParser = require('body-parser');

const todo=require('./todo')
todo.addTodo("todo");

const app = express();
app.use(bodyParser.json());

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
res.json(todos);
})

app.get('/add', function(req, res){
  const todos =todo.addTodo();
res.json(todos);
})
//res.send(JSON.stringify(todos));

app.get('/delete', function(req, res){
  console.log(req.query.id, "id");
  const todos =todo.deleteTodo(req.query.id);
  res.json(todos);
})

app.post('/create', function(req,res){
  //console.log(req.body);
  res.json(req.body);
})


app.listen(port, function() {
  console.log(`Example app listening on port ${port}`)
})
