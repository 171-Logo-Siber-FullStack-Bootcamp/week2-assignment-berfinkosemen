const express = require("express");
const postsController = require("./src/controllers/posts.controller");
const usersController = require("./src/controllers/users.controller");
const todosController = require("./src/controllers/todos.controller");
//Gerekli kütüphane ve veri lerimizi import ediyoruz

const app = express();
// express applicationı oluşturduk

app.get("/posts", (req,res)=>{
    //end point kontrolü
    var posts;
    if(req.query.userId){
        //postsController ile fonksiyonlara erişim sağlıyoruz
        posts = postsController.getPostById(req.query.userId);
    }else{
        posts = postsController.getAllPosts();
    }
    //data yı gönder
    res.send(posts);

});

app.get("/posts/:postId", (req,res)=>{
    var post = postsController.getPostById(req.params.postId);
    res.send(post);
});

app.get("/users", (req,res)=>{
    var users;
    if(req.query.userId){
        users = usersController.getUsersById(req.query.userId);
    }else{
        users = usersController.getAllUsers();
    }
    res.send(users);
});

app.get("/users/:userId", (req,res)=>{
    var user = usersController.getUsersById(req.params.userId);
    res.send(user);
});

app.get("/todos", (req,res)=>{
    var todos;
    if(req.query.userId){
        todos = todosController.getTodosById(req.query.userId);
    }else{
        todos = todosController.getAllTodos();
    }
    res.send(todos);
});

app.get("/todos/:todosId", (req,res)=>{
    var todo = todosController.getTodosById(req.params.todosId);
    res.send(todo);
});

app.listen(5000);