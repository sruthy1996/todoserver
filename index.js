const express = require('express');
const bodyParser = require('body-parser');

const todo=require('./todo')

const cors = require('cors');

const app = express();


app.use(bodyParser.json());

app.use(cors());

const port = 3002;

app.get('/', function(req, res){
    todo.getTodo()
    .then(todos=>{
        res.json(todos);
    })
})

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

/*app.get('/', function(req, res){
  const todos =todo.getTodo();
res.json(todos);
})*/


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
  //const todos =todo.deleteTodo(id);
  todo.deleteTodo(id).then(data=>{
    res.json(data);
  })
 
})

app.post('/create', function(req,res){
  //console.log(req.body);
  //const todos=todo.addTodo(req.body)
  todo.addTodo(req.body)
  .then(data=>{
    res.json(data);
  })
  
})

/*app.put('/edit/:id', function(req,res){
  res.json({message:"edited successfully"});
})*/

app.put('/edit/:id', function(req,res){
  //const todos = todo.editTodo(req.params.id, req.body.name, req.body.description);
  todo.editTodo(req.params.id, req.body.name, req.body.description)
  .then(data=>{
    res.json(data);
  });
 
})

app.get('/todo/:id', function(req,res){
  todo.getTodoById(req.params.id)
  .then(data=>{
    res.json(data)
   });
})
app.listen(port, function() {
  console.log(`Example app listening on port ${port}`)
})
