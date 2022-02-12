const http = require("http");
//kendi serverımı oluşturmam için gerekli olan kütüphane
const kisiler = require("./data.json");
// dataları import etmiş olduk

const server = http.createServer((req,res)=>{
    console.log(req.url);
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    //zarfımızın head inin type ını belirliyoruz
    res.write(JSON.stringify(kisiler));
    //kisiler object ten string e dönüştürür
    res.end();
})
//http üzerinde yeni bir server yarat
//request ve response u yakalayabileceğimiz parametreleri yazıyoruz.
const PORT = 5000;
//çalışacağı portu belirliyoruz.
server.listen(PORT, ()=>console.log('server ${PORT} portu üzerinde çalışmaya başladı.'));
//serverı dinliyoruz