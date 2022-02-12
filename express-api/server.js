const express = require("express");
//express import ettik
const posts = require("./data/posts.json");
const users = require("./data/users.json");
//gerekli datalara erişim sağladık

const app = express();
//1) Hangi methodu kullanıcaz GET POST DELETE PUT
//2) Hangi end point
//3) Hangi parametrik end point

app.get("/users", (req,res)=>{
    //endpoint users ise
    if(req.query.id){
        //eğer query girilmişse
        var item = users.filter(x=>x.id == req.query.id);
        res.send(item);
    }else{
        res.send(users);
    }
});

app.get("/posts/:postid", (req,res)=>{
    //eğer tek bil id bilgisine göre erişim sağlayacak isek
    var result = posts.filter(x=>x.id == req.params.postid);
    res.send(result);
});

app.get("/posts",(req,res)=>{
    //bütün postları döndür
    res.send(posts);
});

const PORT = 5000;
app.listen(PORT);