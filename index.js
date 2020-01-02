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


/*app.get('/add', function(req, res){
  const todos =todo.addTodo();
res.json(todos);
})*/
//res.send(JSON.stringify(todos));

/*app.get('/delete', function(req, res){
//app.get('/delete/:id', function(req, res){
  console.log(req.query.id, "id"); //query parameter (localhost/3000/?id=1)
  //const id=req.param.id; //url parameter (localhost/3000/1)
  const todos =todo.deleteTodo(req.query.id);
  res.json(todos);
})*/

app.delete('/delete/:id', function(req, res){
  const id=req.params.id;
  const todos =todo.deleteTodo(id);
  res.json(todos);
})

app.post('/create', function(req,res){
  //console.log(req.body);
  const todos=todo.addTodo(req.body)
  res.json(todos);
})

/*app.put('/edit/:id', function(req,res){
  res.json({message:"edited successfully"});
})*/

app.put('/edit/:id', function(req,res){
  const todos = todo.editTodo(req.params.id, req.body.name, req.body.description);
  res.json(todos);
})


app.listen(port, function() {
  console.log(`Example app listening on port ${port}`)
})
