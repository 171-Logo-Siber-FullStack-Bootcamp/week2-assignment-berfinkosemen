const http = require("http");
//kendi serverımı oluşturmam için gerekli olan kütüphane
const users = require("./data/users.json");
const posts = require("./data/posts.json");
//verilerimizi import ettikS


const server = http.createServer((req,res)=>{
    console.log("Talep geldi");
    if(req.url === "/users"){
        //users geriye döndürülecek
        res.setHeader("content-Type", "application/JSON");
        res.write(JSON.stringify(users));
        res.end();
    }else if(req.url === "/posts"){
        //posts geriye döndürülecek
        res.setHeader("content-Type", "application/JSON");
        res.write(JSON.stringify(posts));
        res.end();
    }else{
        //404 döndürülecek
        res.setHeader("content-Type", "application/JSON");
        res.end(JSON.stringify({ mesage: "yönlendirme hatalı"}));
    }
        
})
//http üzerinde yeni bir server yarat
//request ve response u yakalayabileceğimiz parametreleri yazıyoruz.
const PORT = 5000;
//çalışacağı portu belirliyoruz.
server.listen(PORT, ()=>console.log('server ${PORT} portu üzerinde çalışmaya başladı.'));
//serverı dinliyoruz